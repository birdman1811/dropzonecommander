import { Component, OnInit, Input } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-scourge',
  templateUrl: './scourge.component.html',
  styleUrls: ['./scourge.component.css']
})
export class ScourgeComponent implements OnInit {

  @Input() faction: Faction;

  constructor() {  
    
   }

  ngOnInit() {
    this.faction.name = "Scourge"    
  }

}
