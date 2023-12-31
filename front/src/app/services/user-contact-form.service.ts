import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserContactFormService {
  constructor() {}

  addUserContactInitItems(): FormGroup {
    return new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
      }),
      surname: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  addAdditionalFields(contact: FormGroup, index: number): void {
    if (index === 1) {
      contact.addControl(
        'email',
        new FormControl('', [Validators.required, Validators.email])
      );
      contact.addControl('city', new FormControl('', Validators.required));
    } else if (index === 2) {
      contact.addControl('state', new FormControl('', Validators.required));
      contact.addControl('zip', new FormControl('', Validators.required));
    }
  }

  copyPreviousContactValues(
    newContact: FormGroup,
    previousContact: AbstractControl
  ): void {
    newContact.patchValue(previousContact.value);
  }
}
