import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss'],
})
export class UserContactComponent {
  constructor() {}

  static addUserContactItem(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
}
