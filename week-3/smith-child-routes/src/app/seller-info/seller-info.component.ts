import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Sold <span>illegally</span> by everyone's favorite, Salesbot {{ sellerId }}!
    </p>
  `,
  styles: [
    `
      span {
        text-decoration: line-through;
      }
    `
  ]
})
export class SellerInfoComponent implements OnInit {
  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}
