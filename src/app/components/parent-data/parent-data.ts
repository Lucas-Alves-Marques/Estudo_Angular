import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-parent-data',
  styleUrl: './parent-data.css',
  templateUrl: './parent-data.html',
})
export class ParentData {

  @Input() name: string = '';
  @Input() userData!: {email: string; role: string};

}
