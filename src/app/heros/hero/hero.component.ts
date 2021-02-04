import { Component } from '@angular/core';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    public name = 'Ironman';
    public age = 40;

    get upperCaseName(): string {
        return this.name.toLocaleUpperCase();
    }

    public setName(name: string): void {
        this.name = name;
    }
    public setAge(age: number): void {
        this.age = age;
    }

    public getNameAndAge = (): string => `${this.name} - ${this.age}`;

}
