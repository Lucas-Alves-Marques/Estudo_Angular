import { Component } from '@angular/core';
import { ChangeNumber } from '../change-number/change-number';

@Component({
  imports: [ChangeNumber],
  selector: 'app-emitter',
  styleUrl: './emitter.css',
  templateUrl: './emitter.html',
})
export class Emitter {

    myNumber: number = 0;

    onChangeNumber(): void{

      this.myNumber = Math.floor(Math.random() * 10);

    }

}
