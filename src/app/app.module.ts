import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { PlayingComponent } from './playing/playing.component';
import { UcmComponent } from './ucm/ucm.component';
import { ScourgeComponent } from './scourge/scourge.component';
import { PhrComponent } from './phr/phr.component';
import { ShaltariComponent } from './shaltari/shaltari.component';
import { ResistanceComponent } from './resistance/resistance.component';
import { ResourcesComponent } from './resources/resources.component';
import { FactionsComponent } from './factions/factions.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    PlayingComponent,
    UcmComponent,
    ScourgeComponent,
    PhrComponent,
    ShaltariComponent,
    ResistanceComponent,
    ResourcesComponent,
    FactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
