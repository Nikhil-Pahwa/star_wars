export interface RemoteFilm {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Film {
    title: string;
    releaseDate: string;
}

export class Film implements Film {
    constructor(
        public title: string,
        public releaseDate: string
    ) { }
}

export function FilmFromRemote(film: RemoteFilm): Film {
    return new Film(film.title, film.release_date);
}


