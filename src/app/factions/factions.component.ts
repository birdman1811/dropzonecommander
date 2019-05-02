import { Component, OnInit } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  selectedFaction: string;
  faction: Faction = new Faction();
  

  constructor() {
    this.selectedFaction = 'UCM';    
   }

  ngOnInit() {
  }

  SelectFaction(faction: string){
    this.selectedFaction = faction;
    this.faction.name = this.selectedFaction
  
  }

}
