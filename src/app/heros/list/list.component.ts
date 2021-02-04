import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    public heros: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Ant-Man'];
    public heroDeleted = '';

    public delete(): void {
        // this.heros.pop();
        this.heroDeleted = this.heros.shift() || '';
    }
}
