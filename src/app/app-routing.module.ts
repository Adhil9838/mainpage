import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgresComponent } from './progres/progres.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { UpdataComponent } from './updata/updata.component';
import { ContactComponent } from './contact/contact.component';
import { CharacterComponent } from './character/character.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'people',component:PeopleComponent
  },
  {
    path:'char',component:CharacterComponent
  },
  {
    path:'prog',component:ProgresComponent
  },
  {
    path:'update',component:UpdataComponent
  },
  {
    path:'cont',component:ContactComponent
  },
  {
    path:'game',component:GameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
