import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent} from '../app/intro/intro.component';
import { AboutComponent } from '../app/about/about.component';
import { PhrComponent } from '../app/phr/phr.component';
import { PlayingComponent } from '../app/playing/playing.component';
import { ResistanceComponent } from '../app/resistance/resistance.component';
import { ResourcesComponent } from '../app/resources/resources.component';
import { ScourgeComponent } from '../app/scourge/scourge.component';
import { ShaltariComponent } from '../app/shaltari/shaltari.component';
import { UcmComponent } from '../app/ucm/ucm.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: '#home', component: IntroComponent},
  {path: '#about', component: AboutComponent},
  {path: '#phr', component: PhrComponent},
  {path: '#playing', component: PlayingComponent},
  {path: '#resistance', component: ResistanceComponent},
  {path: '#resources', component: ResourcesComponent},
  {path: '#scourge', component: ScourgeComponent},
  {path: '#shaltari', component: ShaltariComponent},
  {path: '#ucm', component: UcmComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
