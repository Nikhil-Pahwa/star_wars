import { Component } from '@angular/core';
import { StarWarsService } from './app.service';
import { Character } from '../resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StarWarsService]
})

export class AppComponent {
  private characters: any;
  constructor(private starWarService: StarWarsService) {
    this.starWarService.getCharacters()
      .subscribe((data: Character) => this.characters = data);
  }
}
