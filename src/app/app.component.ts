import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfile2Component } from './components/user-profile-2/user-profile-2.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    UserProfile2Component,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'first-ng-app';
  users = [
    { name: 'Mainul', isHidden: false, pin: 423 },
    { name: 'Hasan', isHidden: true, pin: 100 },
    { name: 'Khan', isHidden: false, pin: 101 },
  ];

  receiveData(e: User) {
    console.log(e);

    const userIndex = this.users.findIndex((user) => user.name == e.name);
    this.users[userIndex].pin = e.newPin;
  }
}
