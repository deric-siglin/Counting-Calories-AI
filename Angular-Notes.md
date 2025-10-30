#Notes on Angular
These are some notes on the key things I learned and that are important for building an Angular application.
##1. Setup
ng new my-app
ng generate component /folder/component-name
ng generate service /folder/component-name
ng generate interface /folder/component-name
---
##Signals and props
input()
output()
signal()
these are the new ways you create props to be used in the html of an angular component
input is something that will passed in when the component is created
output is used when a function is passed in when the component is created, and the output passes data as a parameter to that function
signal is something that only acts within a component, it would a value that changes and needs to be updated only within the component it is instantiated in

examples
some-text-component
ptext = input(''); -> in the .ts file
or pObject = input<ObjectType>(); if you need a specific object type
<p>{{ ptext }}</p> -> in the .html file
and finally
<some-text-component ptext="hello"/> for a hardcoded value
<some-text-component [ptext]="ptextVal"/> for a variable from the parent component

some-input-component
ptext = output(''); -> in the .ts file
or pObject = input<ObjectType>(); if you need a specific object type
<input (change)="ptextfileSubmittedOutput.emit({ -> example of an object which is likely in most cases since you want the $event
                event: $event,                   -> but here it could be some text object idk
                formData: imageForm
            })"/> -> in the .html file
and finally
<some-text-component (ptext)="textInput($event)"/> and event is the data type of whatever is emitted by the child component!
so you will need a 1 datatype parameter for the function you have in the parent component

and then a signal would just be
some-text-component
ptext = signal(''); -> in the .ts file
or pObject = input<ObjectType>(); if you need a specific object type
<p (hover)="changeText()">{{ ptext }}</p> -> in the .html file
changeText(): void{
  ptext="something random";
}
and now anytime you hover it would set the text to something random and change the ptext on the screen in real time
---
##2. @if and @for
@if and @for are html annotations for angular
They go directly in the html
example
@if(status === "complete") {
  <app-complete/>
}
@if(status === "failed") {
  <app-failed/>
}
pretty straightforward, I should look into if it is possible to put this in the classes for tailwind
like <app-failed class="@if(status==="complete"){bg-green-900}" @if(status==="failed"){bg-red-900}"/>
also obviously something like this for props might be necessary as well
so look into that for @if

@for is a little more complicated
look at the output-list.html for a great example of @if, @for and props!
@for here looks like
@for (outputItem of outputarray(); track outputItem.id) {
  <app-output-item [outputString]="outputItem"/>
}
the track is required for all for loops
and you need a object that has an id to do that, so you need to make an interface (strings do not inherently work with this)
---
##3. File structure
This is what the typical angular app should look like
src/
├── app/
│   ├── app.component.ts --just the normal angular app stuff
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── features/  --create a folder for each feature, each containing a folder for components, interfaces, and services
│   │   ├── cal-counter/
│   │   │   ├── components/
│   │   │   │   ├── ... (Feature-specific components)
│   │   │   ├── interfaces/
│   │   │   │   ├── calorie-entry.interface.ts (e.g., for objects/types)
│   │   │   ├── services/
│   │   │   │   ├── cal-counter.service.ts
│   │   ├── common/
│   │   │   ├── components/
│   │   │   │   ├── loading.component.ts (The reusable loading indicator)
│   │   │   │   ├── ... (Other common UI elements)
---
##4. Services
Angular makes this for you
basically you are making what is the equivalent of a bean
It is an exportable clss with a constructor (this is where you can effectively autowire services)
and do normal constructor things
Then you just put in methods for components to call

example constructor:
constructor(private geminiApi : GemeniApi){
    this.status ="fileDrop";
}
private is the part that autowires it as a variable, you do not need to initialize the private parameter
where as status should already be initialized before the constructor

method example
createOutputList(response: any): String{
  return "list" + response.toString();
}

and async example
async calculateCalorieCount(event: Event, form: HTMLFormElement): Promise<boolean>{
  let response = await someService.call(event, form);
  return response == null;
}

the () is the parameters and the type after the colon is the return type
You cannot have multiple types here, you have to make an interface if you want to return a composite object
