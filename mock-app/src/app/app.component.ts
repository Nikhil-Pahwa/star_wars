import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/forkJoin';

import { StarWarsService } from './app.service';
import { Character, People, Film, Actor, EmptyActor } from '../resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StarWarsService]
})

export class AppComponent implements OnInit {
  private characters: Character[];
  private actor: Actor = EmptyActor;
  private selectedItem: Character = null;
  private isLoaded: boolean = true;
  private errorMsg: string = '';

  constructor(private starWarService: StarWarsService) { }

  ngOnInit() {
    this.starWarService.getCharacters()
      .map(character => character.characters)
      .subscribe((data: Character[]) => this.characters = data);
  }

  showDetail(character: Character) {
    this.selectedItem = character;
    this.isLoaded = false;
    this.actor.films = [];
    this.errorMsg = '';
    this.starWarService.getPeople(character.url)
      .switchMap((people: People) => {
        this.actor.name = people.name;
        return Observable.forkJoin(this.fetchFilms(people))
      })
      .subscribe(
      (films: Film[]) => {
        this.actor.films = films;
        this.isLoaded = true;
      },
      err => {
        console.log('error occur while fetching data');
        this.isLoaded = true;
        this.errorMsg = 'No record found';
      }
      );
  }

  private fetchFilms(people: People) {
    let list = [];
    people.films.forEach((filmUrl: string) => {
      list.push(this.starWarService.getFilm(filmUrl));
    });
    return list;
  }
}

