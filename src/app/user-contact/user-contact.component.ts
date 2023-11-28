import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss'],
})
export class UserContactComponent {
  @Input()
  public childForm: FormGroup;

  @Input()
  public arrayIndex: number;

  @Output()
  public deleteContactEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  static addUserContactItem(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public deleteContact(index: number): void {
    this.deleteContactEvent.next(index);
  }
}
