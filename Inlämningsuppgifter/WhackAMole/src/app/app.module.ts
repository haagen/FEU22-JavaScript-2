import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoleComponent } from './mole/mole.component';
import { PlayService } from './play.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PlayboardComponent } from './playboard/playboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { DatabaseService } from './database.service';
import { NameFormComponent } from './name-form/name-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoleComponent,
    PlayboardComponent,
    DashboardComponent,
    NameFormComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [DatabaseService, PlayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
