# MockApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Objectives

Use the Star Wars API swapi.co to generate a list of the films that a particular character appears in

Use plunker to build a working example.

Allow users to choose a character from the provided JSON file
Upon selection of a character, the UI should update to display information about each of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
Do this with some kind of component-based pattern
You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
Don't load the movie data until the character is clicked
Don't show any movie information until all of the character's movies have loaded