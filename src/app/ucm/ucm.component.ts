import { Component, OnInit, Input } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-ucm',
  templateUrl: './ucm.component.html',
  styleUrls: ['./ucm.component.css'],  
})
export class UcmComponent implements OnInit {

@Input() faction: Faction;
  

  constructor() {  
    
   }

  ngOnInit() {
    this.faction.name = "UCM"   
    }

  

}
