import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {

    show: boolean = true;

    showMessage(): void {

      this.show = !this.show;

    };

}
