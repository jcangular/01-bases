import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1> {{title}} </h1>
    <h3>La base: <strong> {{base}} </strong></h3>

    <button (click)="change(-base)"> - {{base}} </button>
    <span> {{counter}} </span>
    <button (click)="change(base)"> + {{base}} </button>
    `
})
export class CounterComponent {

    readonly title: string = 'Contador App';
    public counter: number = 10;
    public base: number = 5;

    public change(value: number): void {
        this.counter += value;
    }

}