import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

function formateName(value: string) {
  return `Hi, ${value}`;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  // @Input() name = '';

  @Input({ alias: 'userName', transform: formateName }) name = '';
  @Input({ transform: booleanAttribute }) isHidden: boolean = false;
  @Input({ transform: numberAttribute }) pin!: number;

  // // name = `Sadia`;
  // status = `Married`;
  // salary = 10000;
  // isBtnDisabled = false;
  // inputVal = 'test';

  // users = [
  //   { name: 'Mainul', isSingle: false, salary: 50000 },
  //   { name: 'Hasan', isSingle: false, salary: 20000 },
  //   { name: 'Khan', isSingle: false, salary: 30000 },
  // ];

  // onInput(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputVal = value;
  //   console.log(value);
  // }
}
