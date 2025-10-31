import { Component, output } from '@angular/core';
import { GemeniApi } from '../../services/gemeni-api';
import { EventFormData } from '../../interfaces/event-form-data.model';
@Component({
  selector: 'app-file-drop',
  imports: [],
  templateUrl: './file-drop.html',
  styleUrl: './file-drop.css'
})
export class FileDrop {


  constructor(private geminiApi: GemeniApi){

  }

  fileDropped(event: Event, form: HTMLFormElement): void{
    const input = event.target as HTMLInputElement;
    console.log("input from the form:");
    console.log(input);

    if(input.files //check undefined first before we check if there are any files uploaded
      && input.files.length > 0){ //check if any files were uploaded
        console.log("These many files were uploaded: " + input.files.length);

        
        const selectedFile = input.files[0];
        this.fileSubmitted(selectedFile);
        this.geminiApi.uploadFileToGemini(selectedFile);


    }
  }

  fileSubmitted(selectedFile: File) : void {
    console.log("file submitted");
  }

  dropFile() {
    console.log("Dropping File");
    console.log("creating prompt");
    console.log("calling gemini api");
    console.log("processing response");
    console.log("creating component list");
  }

  //<ObjectType> is the required parameter for the function being passed
  //If you need more than one, just make an "interface", basically a pojo object
  fileSubmittedOutput = output<EventFormData>();
}
