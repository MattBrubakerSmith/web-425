import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      Here has a product for which to you to enjoy!
    </p>
  `,
  styles: [
    `
      p {
        font-family: "Comic Sans MS", cursive, sans-serif;
      }
    `
  ]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
