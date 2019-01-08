import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      Sup HOMEs?!
    </h2>
  `,
  styles: [
    `
      h2 {
        color: deeppink;
        margin-top: 20px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
