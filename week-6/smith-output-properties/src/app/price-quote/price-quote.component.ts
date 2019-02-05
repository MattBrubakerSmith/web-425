import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `
    <h1>
      Inside PriceQuoteComponent:
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD' }}
    </h1>
  `,
  styles: [`
    :host {
      color: blue;
      background-color: pink;
      padding: 5px 10px;
    }
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };
        this.lastPrice.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }

}
