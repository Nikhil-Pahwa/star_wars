import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RemoteCharacter, RemotePeople, PeopleFromRemote, People, RemoteFilm, Film, FilmFromRemote, Actor, EmptyActor } from '../resources';

@Injectable()
export class StarWarsService {
    constructor(
        private http: Http
    ) { }

    getCharacters() {
        return this.http.get('assets/json/characters.json')
            .map(res => res.json());
    }

    getPeople(personUrl: string): Observable<People> {
        return this.http.get(personUrl)
            .map(res => res.json())
            .map((remotePeople: RemotePeople) => PeopleFromRemote(remotePeople));
    }

    getFilm(filmUrl: string) {
        return this.http.get(filmUrl)
            .map(res => res.json())
            .map((remoteFilm: RemoteFilm) => FilmFromRemote(remoteFilm));
    }
}
