import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-fruit',
  template: `
    <table class="table table-hover table-striped">
      <thead class="fruit-thead">
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
          </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      .fruit-thead {
        background-color: chartreuse;
        text-transform: uppercase;
      }

      .fruit-thead th {
        cursor: help;
        transition: color 5s ease-in;
        -webkit-transition: color 5s ease-in;
      }

      .fruit-thead th:hover {
        color: pink;
      }
    `
  ],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
