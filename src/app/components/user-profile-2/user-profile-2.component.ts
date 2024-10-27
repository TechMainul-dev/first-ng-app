import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile-2.component.html',
  styleUrl: './user-profile-2.component.css',
})
export class UserProfile2Component {
  name = 'Sadia';
  status = 'married';
  gender = 'female';

  isDisabled = true;
  inputValue = '';
  clickValue: string = '';

  onInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputValue = value;
    this.updateButtonState();
  }

  onClick(e: Event) {
    this.clickValue = 'square : ' + +this.inputValue * 2;
    this.inputValue = this.clickValue.toString();
    console.clear();
    console.log(this.inputValue);
    this.updateButtonState();
  }

  updateButtonState() {
    this.isDisabled = +this.inputValue !== 10;
  }

  users = [
    { name: 'ahnaf', gender: 'male' },
    { name: 'mariyam', gender: 'female' },
    { name: 'Mainul', gender: 'male' },
    { name: 'sadia', gender: 'female' },
  ];
}
