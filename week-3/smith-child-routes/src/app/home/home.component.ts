import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1><span>H</span><span>o</span><span>m</span><span>e</span></h1>
    </div>
  `,
  styles: [
    `
      div {
        width: 100vw;
        height: calc(100vh - 56px);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1 {
        font-size: 24vw;
      }

      span:nth-of-type(odd) {
        color: deeppink;
      }

      span:nth-of-type(even) {
        color: green;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
