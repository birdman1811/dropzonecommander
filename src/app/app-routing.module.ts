import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent} from '../app/intro/intro.component';
import { AboutComponent } from '../app/about/about.component';
import { PlayingComponent } from '../app/playing/playing.component';
import { ResourcesComponent } from '../app/resources/resources.component';
import { FactionsComponent } from '../app/factions/factions.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'home', component: IntroComponent},
  //{path: 'about', component: AboutComponent},
  //{path: 'phr', component: FactionsComponent},
  //{path: 'playing', component: PlayingComponent},
  //{path: 'resistance', component: FactionsComponent},
  //{path: 'resources', component: ResourcesComponent},
  //{path: 'scourge', component: FactionsComponent},
  //{path: 'shaltari', component: FactionsComponent},
  //{path: 'ucm', component: FactionsComponent},
  //{path: 'factions', component: FactionsComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
