import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid mt-5">
      <h1>My current hairstyle is a {{hairstyle}}!</h1>
      <button
        class="btn btn-primary mt-3"
        (click)="updateHairstyle()"
      >
        Get a Haircut!
      </button>
    </div>
  `
})
export class AppComponent {
  title = 'smith-one-way-binding';
  hairstyle:string = "mullet";

  updateHairstyle() {
    this.hairstyle = "pompadour";
  }
}
