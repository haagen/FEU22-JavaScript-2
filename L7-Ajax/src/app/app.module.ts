import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChuckNorrisJokeComponent } from './chuck-norris-joke/chuck-norris-joke.component';
import { ChuckNorrisAPIService } from './chuck-norris-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ChuckNorrisAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
