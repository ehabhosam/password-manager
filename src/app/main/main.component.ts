import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  key: string = '';
  accounts: { id: string, title: string, email: string, password: string }[] = [];
  newAccount: { title: string, email: string, password: string } = {
    title: '',
    email: '',
    password: ''
  };

  constructor(private modalService: NgbModal) { }

  @ViewChild('accountsRef') accountsRef!: ElementRef;

  ngOnInit() {
    this.loadAccounts();
  }

  ngDoCheck() {
    this.updateLocalStorage();
  }

  loadAccounts() {
    const savedAccounts = localStorage.getItem('accounts');
    if (savedAccounts) {
      this.accounts = JSON.parse(savedAccounts);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

  addAccount(modal: any) {
    this.accounts.push({
      id: Date.now().toString(),
      ...this.newAccount,
      password: this.encryptPassword(this.newAccount.password, this.key)
    });
    this.newAccount = { title: '', email: '', password: '' };
    modal.dismiss();
  }

  clearAccounts() {
    this.accounts = [];
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  encryptPassword(password: string, key: string): string {
    let encryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
      const passwordChar = password.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);
      const encryptedChar = String.fromCharCode(passwordChar ^ keyChar);
      encryptedPassword += encryptedChar;
    }
    return encryptedPassword;
  }
}
