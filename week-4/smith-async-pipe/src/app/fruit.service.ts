import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[] = [
    { 
      id: 0, 
      name: "Starfruit", 
      pricePerPound: "$23",
      quantity: 3
    },
    { 
      id: 1, 
      name: "Red Pepper", 
      pricePerPound: "$3.21",
      quantity: 82
    },
    { 
      id: 2, 
      name: "Plantain", 
      pricePerPound: "$2",
      quantity: 56.4
    },
    { 
      id: 3, 
      name: "Ugli", 
      pricePerPound: "$230,002",
      quantity: 23
    },
    { 
      id: 4, 
      name: "Rollup", 
      pricePerPound: "$.03",
      quantity: 1983924
    },
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
