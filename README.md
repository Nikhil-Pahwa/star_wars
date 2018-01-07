# About
In this application there is good usage of rxjs observable. This project is build in angular 2+ using angular cli.

## Objectives

Use the Star Wars API swapi.co to generate a list of the films that a particular character appears in

* Allow users to choose a character from the provided JSON file
* Upon selection of a character, the UI should update to display information about each of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
* Do this with some kind of component-based pattern
* You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
* Don't load the movie data until the character is clicked
* Don't show any movie information until all of the character's movies have loaded

## Continous Integration
This project supports CI using 'Travis'.

## Hosting
Hosting is done using 'surge'