import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { UserContactFormService } from '../services/user-contact-form.service';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss'],
})
export class UserContactFormComponent implements OnInit {
  public userContactForm: FormGroup;

  constructor(private userContactService: UserContactFormService) {}

  ngOnInit(): void {
    this.generateUserContactForm();
  }

  public generateUserContactForm(): void {
    this.userContactForm = new FormGroup({
      contacts: new FormArray([
        this.userContactService.addUserContactInitItems(),
      ]),
    });
  }

  public addUserContact(): void {
    const newContact = this.userContactService.addUserContactInitItems();

    // Copy values from the previous contact
    const previousContact = this.contactArray.at(this.contactArray.length - 1);
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

  public submitUserContactForm(): void {
    console.log(this.userContactForm.value);
  }
}
