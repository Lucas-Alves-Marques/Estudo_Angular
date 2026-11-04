import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';

@Component({
  imports: [RouterOutlet, FirstComponent, ParentData],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  userName = "Joaquim";

  userData = {

    email: "joaquim@email.com",
    role: "Admin"

  };

  protected readonly title = signal('curso_angular');
}
