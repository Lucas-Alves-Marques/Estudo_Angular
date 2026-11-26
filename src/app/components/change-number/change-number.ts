import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-change-number',
  styleUrl: './change-number.css',
  templateUrl: './change-number.html',
})

export class ChangeNumber {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {

    this.changeNumber.emit()

  }

}
