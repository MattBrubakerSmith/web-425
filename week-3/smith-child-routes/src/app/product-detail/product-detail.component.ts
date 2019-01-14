import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2>Product Information for {{ productId }}</h2>
        </div>
        <div class="col-md-6">
          <router-outlet></router-outlet>
          <a class="btn btn-primary" [routerLink]="['./seller', sellerId]">View Seller Info</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h2 {
        color: orange;
      }
    `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}
