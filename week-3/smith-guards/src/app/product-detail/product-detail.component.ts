import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  template: `
    <h1>Product Detail<span>z</span></h1>
    <input class="form-control" placeholder="Enter your name" type="text" [formControl]="name" />
  `,
  styles: [`
    h1 {
      margin-top: 20px;
      color: firebrick;
    }

    span {
      display: inline-block;
      transform: rotate(13deg) translate(3px, 8px);
    }

    input {
      width: 300px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
