import { SplashComponent } from './splash/splash.component';
import { IronComponent } from './iron/iron.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KonamiDirective } from './shared/directive/konami.directive';

@NgModule({
    declarations: [AppComponent, SplashComponent, IronComponent, KonamiDirective],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
