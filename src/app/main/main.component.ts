import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  key: string = '';
  accounts: { title: string, email: string, password: string }[] = [];

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    const savedAccounts = localStorage.getItem('accounts');
    if (savedAccounts) {
      this.accounts = JSON.parse(savedAccounts);
    }
  }
}
