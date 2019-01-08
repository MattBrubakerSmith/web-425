import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Don't move, I dropped a CONTACT!
    </h2>
  `,
  styles: [
    `
      h2 {
        color: royalblue;
        margin-top: 20px;
      }
    `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
