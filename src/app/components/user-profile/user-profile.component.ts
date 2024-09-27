import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = `Sadia`;
  status = `Married`;
  salary = 10000;
  isBtnDisabled = false;
  inputVal = 'test';

  users = [
    { name: 'Mainul', isSingle: false, salary: 10000 },
    { name: 'Hasan', isSingle: false, salary: 20000 },
    { name: 'Khan', isSingle: false, salary: 30000 },
  ];

  onInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputVal = value;
    console.log(value);
  }
}
