export interface RemoteCharacter {
    name: string;
    personUrl: string;
}

export class Character {
    constructor(
        public name: string,
        public personUrl: string
    ) { }
}