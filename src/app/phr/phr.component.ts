import { Component, OnInit, Input } from '@angular/core';
import { Faction } from '../faction';

@Component({
  selector: 'app-phr',
  templateUrl: './phr.component.html',
  styleUrls: ['./phr.component.css']
})
export class PhrComponent implements OnInit {

  @Input() faction: Faction;

  constructor() {  
    
   }

  ngOnInit() {
    this.faction.name = "PHR"    
  }

}
