import { Component, Input } from '@angular/core';

import { Character } from '../interface/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

    constructor(private dbzService: DbzService) { }

    public get characters(): Character[] {
        return this.dbzService.characters;
    }

}
