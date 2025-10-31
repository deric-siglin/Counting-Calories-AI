import { Component, input } from '@angular/core';
import { CalItem } from '../../interfaces/calItem.model';

@Component({
  selector: 'app-output-item',
  imports: [],
  templateUrl: './output-item.html',
  styleUrl: './output-item.css'
})
export class OutputItem {

  outputString = input.required<CalItem>();
}
