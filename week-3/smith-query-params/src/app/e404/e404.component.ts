import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h1>Sorry, this page does NOT EXIST.</h1>
        <p class="tiny-disturbing-question">Do you?</p>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      
      .tiny-disturbing-question {
        font-size: 7px;
        line-height: 75px;
        margin-left: 5px;
      }
    `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
