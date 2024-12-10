import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstappTsComponent } from './firstapp.ts/firstapp.ts.component';
import { HomeComponent } from './home/home.component';
import { ProgresComponent } from './progres/progres.component';
import { PeopleComponent } from './people/people.component';
import { UpdataComponent } from './updata/updata.component';
import { ContactComponent } from './contact/contact.component';
import { CharacterComponent } from './character/character.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstappTsComponent,
    HomeComponent,
    ProgresComponent,
    PeopleComponent,
    UpdataComponent,
    ContactComponent,
    CharacterComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
