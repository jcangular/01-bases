import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HerosModule } from './heros/heros.module';
import { CountersModule } from './counters/counters.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CountersModule,
        HerosModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
