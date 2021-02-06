import { Injectable } from '@angular/core';
import { Character } from '../interface/dbz.interfaces';

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        { name: 'Goku', power: 1500 },
        { name: 'Vegueta', power: 1478 },
        { name: 'Krillin', power: 720 }
    ];

    constructor() { }

    /**
     * Retorna la lista de personajes.
     */
    public get characters(): Character[] {
        return [...this._characters];
    }

    /**
     * Agrega un personaje a la lista.
     * @param character es un nuevo personaje.
     */
    public addCharacter(character: Character): void {
        this._characters.push(character);
    }
}
