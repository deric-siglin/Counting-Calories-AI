#Notes on Angular

##Setup
ng new my-app
ng generate component /folder/component-name
ng generate service /folder/component-name
ng generate interface /folder/component-name



##Signals and props

##@if and @for

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
