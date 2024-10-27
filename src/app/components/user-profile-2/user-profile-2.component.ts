import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile-2.component.html',
  styleUrl: './user-profile-2.component.css',
})
export class UserProfile2Component {
  name = 'Mainul Hasan Khan';
  status = 'Married';
  pin = 423;
  isBtnDisabled = false;
  inputVal = 'sample value';

  users = [
    { name: 'Mainul', status: 'Married', pin: 423 },
    { name: 'Raj', status: 'Married', pin: 3423 },
  ];

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
    this.inputVal = value;
  }
}
