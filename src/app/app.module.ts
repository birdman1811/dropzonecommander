import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatDialogModule } from '@angular/material/dialog';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';


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
import { UnitphotosComponent } from './unitphotos/unitphotos.component';
import { UnitlistComponent } from './unitlist/unitlist.component';
import { UnitdatasheetComponent } from './unitdatasheet/unitdatasheet.component';
import { MatButtonModule } from '@angular/material/button';



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
    FactionsComponent,
    UnitphotosComponent,
    UnitlistComponent,
    UnitdatasheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    
  ],
  entryComponents: [UnitlistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
