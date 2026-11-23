import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-if-render',
  styleUrl: './if-render.css',
  templateUrl: './if-render.html',
})
export class IfRender {

  canShow: boolean = true;
  name: string = "Pedro";

};
