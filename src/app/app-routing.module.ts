import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent} from '../app/intro/intro.component';

const routes: Routes = [
  {path: '', component: IntroComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
