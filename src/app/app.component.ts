import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Jesús';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  number: number = 0.234;
  salary: number = 1234.5;
  heroe: any = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'Primera',
      number: 19,
    }
  };
  promiseValue: Promise= new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego el dato'), 3500);
  });
  date: Date = new Date();
}
