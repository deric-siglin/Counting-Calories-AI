import { Component } from '@angular/core';
import { FileDrop } from "../file-drop/file-drop";
import { OuputList } from "../ouput-list/ouput-list";
import { CalCounterOrchestration } from '../../services/cal-counter-orchestration';
import { CommonModule } from '@angular/common';
import { Loading } from "../../../common/loading/loading";
import { EventFormData } from '../../interfaces/event-form-data.model';

@Component({
  selector: 'app-cal-counter-component',
  imports: [FileDrop, OuputList, CommonModule, Loading],
  templateUrl: './cal-counter-component.html',
  styleUrl: './cal-counter-component.css'
})
export class CalCounterComponent {
  constructor(public calCounterOrchestration: CalCounterOrchestration) {

  }

  //we can make this specific so to ensure the data we get is correct
  kickOffOS(data: EventFormData) {
    this.calCounterOrchestration.calculateCalorieCount(data.event, data.formData);
  }
}
