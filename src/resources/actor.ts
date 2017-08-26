import { Film } from './films';

export class Actor {
    constructor(
        public characterId: number,
        public name: string,
        public films: Film[],
        public release_date: string
    ) { }
}

export const EmptyActor = new Actor(0, '', [], '');