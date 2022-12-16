import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DogService } from './dog.service';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogListingComponent } from './dog-listing/dog-listing.component';
import { LikedComponent } from './liked/liked.component';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    DogListingComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
