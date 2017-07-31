import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

import { StarWarsService } from './app.service';
import { Character, People, Film, Actor, EmptyActor } from '../resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StarWarsService]
})

export class AppComponent {
  private characters: Character[];
  private actor: Actor = EmptyActor;
  private selectedItem: Character = null;
  private isLoaded: boolean = true;

  constructor(private starWarService: StarWarsService) {
    this.starWarService.getCharacters()
      .map(character => character.characters)
      .subscribe((data: Character[]) => this.characters = data);
  }

  showDetail(character: Character) {
    this.selectedItem = character;
    this.isLoaded = false;
    this.actor.films = [];
    this.starWarService.getPeople(character.url)
      .mergeMap((people: People) => {
        this.actor.name = people.name;
        return Observable.forkJoin(this.fetchFilms(people))
      })
      .subscribe((films: Film[]) => {
        this.actor.films = films;
        this.isLoaded = true;
      });
  }

  private fetchFilms(people: People) {
    let list = [];
    people.films.forEach((filmUrl: string) => {
      list.push(this.starWarService.getFilm(filmUrl));
    });
    return list;
  }
}

