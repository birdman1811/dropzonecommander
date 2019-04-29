import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  selectedFaction: string;

  constructor() {
    this.selectedFaction = 'UCM';
   }

  ngOnInit() {
  }

  SelectFaction(faction: string){
    this.selectedFaction = faction;
  }

}
