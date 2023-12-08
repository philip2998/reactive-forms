import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserContactFormService } from '../services/user-contact-form.service';
import { ZapierService } from '../services/zapier.service';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss'],
})
export class UserContactFormComponent implements OnInit {
  public userContactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userContactService: UserContactFormService,
    private zapierService: ZapierService
  ) {}

  ngOnInit(): void {
    this.generateUserContactForm();
  }

  public generateUserContactForm(): void {
    this.userContactForm = this.formBuilder.group({
      contacts: this.formBuilder.array([
        this.userContactService.addUserContactInitItems(),
      ]),
    });
  }

  public addUserContact(): void {
    const newContact = this.userContactService.addUserContactInitItems();
    const previousContact = this.getLastContact();

    if (previousContact) {
      this.userContactService.copyPreviousContactValues(
        newContact,
        previousContact
      );
    }

    this.userContactService.addAdditionalFields(
      newContact,
      this.contactArray.controls.length
    );

    this.contactArray.push(newContact);
  }

  public deleteContact(index: number): void {
    this.contactArray?.removeAt(index);
  }

  get contactArray(): FormArray {
    return this.userContactForm?.get('contacts') as FormArray;
  }

  private getLastContact(): FormGroup | null {
    return this.contactArray.at(this.contactArray.length - 1) as FormGroup;
  }

  public submitUserContactForm(): void {
    const webhookUrl = 'http://localhost:3000/api';
    const combinedContact = this.contactArray.controls.reduce(
      (result, currentContact) => {
        return { ...result, ...currentContact.value };
      },
      {}
    );
    console.log(combinedContact);

    this.zapierService.submitUserContactForm(webhookUrl, combinedContact);
  }
}
