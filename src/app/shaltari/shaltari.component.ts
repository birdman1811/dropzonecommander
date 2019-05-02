import { Component, OnInit, Input } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-shaltari',
  templateUrl: './shaltari.component.html',
  styleUrls: ['./shaltari.component.css']
})
export class ShaltariComponent implements OnInit {

  @Input() faction: Faction;

  constructor() {  
    
   }

  ngOnInit() {
    this.faction.name = "Shaltari"    
  }

}
