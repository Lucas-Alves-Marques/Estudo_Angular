import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {

  size = 40;
  font = 'Arial';
  color = 'red';
  classes = ['green-title', 'small-title'];
  underline = 'undeline-title'


}
