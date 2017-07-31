export interface RemotePeople {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface People {
    name: string;
    films: string[];
}

export class People implements People {
    constructor(
        public name: string,
        public films: string[]
    ) { }
}

export function PeopleFromRemote(people: RemotePeople): People {
    return new People(people.name, people.films);
}
