import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1>Logging? No, this is <span>Login</span>. Logging is over there.</h1>
  `,
  styles: [`
    h1 {
      margin-top: 20px;
      color: darkgreen;
    }

    span {
      font-style: italic;
      font-weight: bold;
      color: cyan;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
