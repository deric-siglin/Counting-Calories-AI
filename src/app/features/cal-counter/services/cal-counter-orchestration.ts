import { Injectable } from '@angular/core';
import { GemeniApi } from './gemeni-api';
import { CalItem } from '../interfaces/calItem.model';
@Injectable({
  providedIn: 'root'
})
export class CalCounterOrchestration {
  
  //status for pages
  status = "";
  fileSubmitted: any;
  outputList: any;

  constructor(private geminiApi : GemeniApi){
    this.status ="fileDrop";
  }

  fileDropped(event: Event, form: HTMLFormElement): File | undefined{
    

    //begin file upload
    const input = event.target as HTMLInputElement;
    console.log("input from the form:");
    console.log(input);

    if(input.files //check undefined first before we check if there are any files uploaded
      && input.files.length > 0){ //check if any files were uploaded
        console.log("These many files were uploaded: " + input.files.length);
        return input.files[0];
    }

    return undefined;
  }


  async calculateCalorieCount(event: Event, form: HTMLFormElement): Promise<boolean>{
    //start loading
    this.status = "loading"

    //get the selected file
    const selectedFile = this.fileDropped(event, form);
    
    if(!selectedFile){
      return false;
    }
    //get api response
    const response = await this.geminiApi.uploadFileToGemini(selectedFile);
    //const response = "This is an estimated calorie count of your meal (Medium plate size)\n1.  Fried Chicken Tenders (3 large tenders, approximately 7.5 ounces): 560 calories\n2.  Mashed Potatoes with Gravy (approximately 5 ounces potatoes, 1.5 ounces gravy): 150 calories\n3.  Green Beans (approximately 7 ounces): 175 calories\n4.  Biscuit (approximately 3 ounces): 220 calories\nTotal Estimated Calories: 1105 calories";
    
    if(!response){
      return false;
    }
    //create the output list
    this.outputList = this.createOutputList(response);


    //stop loading
    this.status = "outputList";
    console.log(this.status);
    
    return true;

  }


  createOutputList(response: any): CalItem[]{

    const responseArray = response.split("\n");
    let outputArray: CalItem[] = [];
    let sizeLine: string = "Unknown";
    let totalCalories: string = "Unknown";

    responseArray.forEach((element: string, index: number) => {
      let item: CalItem = {
        id: index,
        message: element
      };
      if(index==0){
        outputArray.push(item);
      } else {
        //this is how you do a regex in javaScript, you have to put it in / /, instead of ""
        if(element.search(/^\d/)>=0){
          item.id = outputArray.length + 1;
          outputArray.push(item);
        } else if(element.search(/^Total Estimated Calories/)>=0){
          item.id = outputArray.length + 1;
          outputArray.push(item);
        }
      }
    });
    console.log(outputArray[0]);

    return outputArray;
  }

  async startApiCall(file: File) : Promise<string>{

    return this.geminiApi.uploadFileToGemini(file);
  }
}
