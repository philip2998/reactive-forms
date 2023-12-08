import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss'],
})
export class UserContactComponent {
  @Input() public childForm: any;
  @Input() public arrayIndex: number;
  @Input() public totalContacts: number;

  @Output() public deleteContactEvent: EventEmitter<number> =
    new EventEmitter<number>();

  sections = [
    { fields: ['name', 'surname'] },
    { fields: ['email', 'city'] },
    { fields: ['state', 'zip'] },
  ];

  getFormControl(field: string): FormControl {
    return this.childForm?.get(field) as FormControl;
  }

  get nameField(): FormControl {
    return this.getFormControl('name');
  }

  get surnameField(): FormControl {
    return this.getFormControl('surname');
  }

  get emailField(): FormControl {
    return this.getFormControl('email');
  }

  get cityField(): FormControl {
    return this.getFormControl('city');
  }

  get stateField(): FormControl {
    return this.getFormControl('state');
  }

  get zipField(): FormControl {
    return this.getFormControl('zip');
  }

  public deleteContact(index: number): void {
    this.deleteContactEvent.next(index);
  }
}
