#Notes on Angular

##Setup
ng new my-app
ng generate component /folder/component-name
ng generate service /folder/component-name
ng generate interface /folder/component-name

##Signals and props

##@if and @for
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

##File structure
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

##Services
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
