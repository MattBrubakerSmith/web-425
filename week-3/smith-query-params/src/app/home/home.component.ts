import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h1>This <span>is</span> your home now!</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }

      h1 {
        color: maroon;
      }

      h1 span {
        font-weight: bold;
        text-decoration: underline;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
