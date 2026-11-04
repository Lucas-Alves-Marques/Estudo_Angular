import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-first-component',
  styleUrl: './first-component.css',
  templateUrl: './first-component.html',
})
export class FirstComponent {

  name: string = "Lucas Alves";
  age: number = 23;
  job: string = "Programador";
  hobbies: string[] = ["Estudar", "Jogar no PC", "Jogar bola"]
  car = {

    model: "Celta",
    year: "2012",
    color: "Black"

  }
}
