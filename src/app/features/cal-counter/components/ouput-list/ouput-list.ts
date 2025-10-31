import { Component, input, signal } from '@angular/core';
import { OutputItem } from "../output-item/output-item";
import { CalItem } from '../../interfaces/calItem.model';

@Component({
  selector: 'app-ouput-list',
  imports: [OutputItem],
  templateUrl: './ouput-list.html',
  styleUrl: './ouput-list.css'
})
export class OuputList {

  outputArray = input<CalItem[]>();
  
}
