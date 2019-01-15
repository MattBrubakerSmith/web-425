import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Compopo</h1>
  `,
  styles: [
    `
      h1 {
        transform: scaleY(5);
        margin-top: 100px;
        background-color: steelblue;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
