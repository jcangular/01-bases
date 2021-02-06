import { Component, Input } from '@angular/core';

import { Character } from '../interface/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-add-character',
    templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

    // @Output() characterAddEvent: EventEmitter<Character> = new EventEmitter();
    @Input()
    character: Character = { name: '', power: 0 };

    constructor(private dbzService: DbzService) { }

    public isFormNotComplete(): boolean {
        return !this.character.name || !this.character.power;
    }

    public add(): void {
        // this.characterAddEvent.emit(this.character);
        this.dbzService.addCharacter(this.character);
        this.character = { name: '', power: 0 };
    }

}
