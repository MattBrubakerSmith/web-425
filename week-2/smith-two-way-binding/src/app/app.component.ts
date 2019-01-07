import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid form-container">
      <div class="container-fluid two-way-form">
        <h2>Two-Way Binding Example</h2>
        <div class="form-group">
          <input 
            class="form-control"
            type="text" 
            placeholder="Enter your favorite food..."
            [(ngModel)]="food"
          />
          <button
            class="btn btn-primary form-control mt-2"
            (click)="food=''"
          >
            Clear Favorite Food
          </button>
        </div>
        <div class="form-group">
          <p class="alert-success">Two-way binding makes me hungry for {{food}}!</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .form-container {
      height: calc(100vh - 56px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `,
    `
    .two-way-form {
      width: 50%;
    }
    `
  ]
})
export class AppComponent {
  title = 'smith-two-way-binding';
  food = "asparagus";
}
