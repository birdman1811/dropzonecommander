import { Component, OnInit, Input } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {

  @Input() faction: Faction;

  constructor() {  
    
   }

  ngOnInit() {
    this.faction.name = "Resistance"    
  }

}
