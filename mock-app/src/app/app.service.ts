import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
    constructor(
        private http: Http
    ) { }

    getCharacters() {
        return this.http.get('assets/json/characters.json')
            .map(res => res.json());
    }
}