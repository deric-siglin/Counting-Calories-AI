import { Injectable } from '@angular/core';
import { createPartFromUri, createUserContent, GoogleGenAI } from "@google/genai";

@Injectable({
  providedIn: 'root'
})
export class GemeniApi {

  prompt = 'You are a nutritionist. You are able to tell from an image alone what foods are on a plate and how many calories are in the meal shown. Begin by estimating the size of the plate as Small, Medium, or Large. You will use the size of the plate to help you determine the size and volume of the food to calculate their calories. Once you have determined the size of the plate, use that as a reference for the foods shown as that size and volume (in ounces) and then you identify each food and roughly the size of each food. Then by referencing how many calories are in each ounce, you calculate the calories of each food shown, add each amount up and report a total calorie count. Please identify each food in this image and a calorie count for each in a bullet pointed list, and give a total calorie count at the end. I understand that these will only be estimates so only say at the beginning of your reply "This is an estimated calorie count of your meal" and include the estimated size of the meal in this statement, and after the opening statement start making your numbered list. Each item in the list should look like 1. {Food} (assumed size): 100 calories. And the last line will say Total Estimated Calories: 1000 calories.';
  async convertToBase64(file: File) : Promise<string> {
    //this alone is really interesting I really want to get what this does
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        //the result here is already base64
        //the result is the file that we loaded
        //in readAsDataUrl
        const data = reader.result as string;

        //the result looks like an object
        //it will have the type and the data itself
        //we need both here so we save them seperately
        const dataType = data.split(",")[0];
        const base64Data = data.split(",")[1];

        //for now I just want to return the data
        resolve(dataType);
        //resolve is basically the return anytime we want to finish a promise
      }

      reader.onerror = (error) => {
        reject(error);
        //the most basic way to return an error for a promise
      }

      reader.readAsDataURL(file);
    });
  }

  async uploadFileToGemini(file: File) : Promise<string> {
    const ai = new GoogleGenAI({apiKey: "YOUR API KEY HERE"});

    const dataType = await this.convertToBase64(file);
    console.log(dataType);
    let formattedDataType = ""
    if(dataType){
      formattedDataType = dataType.split(':')[1];
      formattedDataType = formattedDataType.split(';')[0];
    }
    console.log(formattedDataType);
    const myFile = await ai.files.upload({
      file: file,
      config: { mimeType: formattedDataType },
    });

    if(myFile.uri && myFile.mimeType){
      const response =  await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: createUserContent([
          createPartFromUri(myFile.uri, myFile.mimeType),
          this.prompt,
        ]),
      });
      console.log(response.text);
      return response.text ? response.text : "";
    }
    return "file not found";
  }


}
