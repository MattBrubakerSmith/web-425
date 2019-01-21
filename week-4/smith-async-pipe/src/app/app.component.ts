import { Component } from '@angular/core';
import { FruitService } from './fruit.service';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FruitService]
})
export class AppComponent {
  fruits: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
