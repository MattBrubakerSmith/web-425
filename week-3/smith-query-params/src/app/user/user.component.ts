import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Displaying user information for loser, I mean user {{ userId }}.</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }

      h2 {
        color: yellow;
        background-color: violet;
        transform: rotate(3deg);
        margin-top: 30px;
      }
    `
  ]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}
