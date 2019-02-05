import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smith-onchange-events';

  myGreeting: string = "Hello";
  myUser: { name: string } = { name: "Joe Bob" };
}
