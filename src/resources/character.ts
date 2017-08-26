export interface RemoteCharacter {
    name: string;
    url: string;
}

export class Character {
    constructor(
        public name: string,
        public url: string
    ) { }
}
