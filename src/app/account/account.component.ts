import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @Input() title: string = '';
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() key: string = '';
  isShowingPassword: boolean = false;

  togglePasswordVisibility() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  decryptPassword(encryptedPassword: string, key: string): string {
    let decryptedPassword = '';
    for (let i = 0; i < encryptedPassword.length; i++) {
      const encryptedChar = encryptedPassword.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);
      const decryptedChar = String.fromCharCode(encryptedChar ^ keyChar);
      decryptedPassword += decryptedChar;
    }
    return decryptedPassword;
  }
}
