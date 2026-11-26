import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Events } from './components/events/events';
import { Emitter } from './components/emitter/emitter';

@Component({
  imports: [FirstComponent, ParentData, Directives, IfRender, Events, Emitter],
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
