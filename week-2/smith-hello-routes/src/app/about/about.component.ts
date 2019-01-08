import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h2>
      Whatchu talk ABOUT?!
    </h2>
  `,
  styles: [
    `
      h2 {
        color: darkgreen;
        margin-top: 20px;
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
