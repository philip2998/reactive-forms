import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserContactComponent } from '../user-contact/user-contact.component';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss'],
})
export class UserContactFormComponent implements OnInit {
  public userContactForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.generateUserContactForm();
  }

  public generateUserContactForm(): void {
    this.userContactForm = new FormGroup({
      contacts: new FormArray([UserContactComponent.addUserInitialItems()]),
    });
  }

  public addUserContact(): void {
    const newContact = UserContactComponent.addUserInitialItems();

    // Copy values from the previous contact
    const previousContact = this.contactArray.at(this.contactArray.length - 1);
    if (previousContact) {
      newContact.patchValue(previousContact.value);
    }

    const existingContacts = this.contactArray.controls.length;

    if (existingContacts === 1) {
      newContact.addControl(
        'email',
        new FormControl('', [Validators.required, Validators.email])
      );
      newContact.addControl('city', new FormControl('', Validators.required));
    } else if (existingContacts === 2) {
      newContact.addControl('state', new FormControl('', Validators.required));
      newContact.addControl('zip', new FormControl('', Validators.required));
    }
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
