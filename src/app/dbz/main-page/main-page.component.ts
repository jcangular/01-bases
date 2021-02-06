import { Component } from '@angular/core';
import { Character } from '../interface/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    defaultCharacter: Character = { name: 'Trunks', power: 1020 };

    constructor(private dbzService: DbzService) { }

    public addCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

}
