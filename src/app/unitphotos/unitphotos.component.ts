import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

import { Faction } from '../faction';
import { UnitsService } from '../units.service';
import { Unit } from '../unit';


@Component({
  selector: 'app-unitphotos',
  templateUrl: './unitphotos.component.html',
  styleUrls: ['./unitphotos.component.css']
})
export class UnitphotosComponent implements OnInit {

  @Input() faction: Faction;
  
  
  units: Unit[];
  definedUnits: Unit[];
  viewedUnit: Unit;
  viewedUnitNumber: number;

  constructor(
    private unitService: UnitsService,
  ) { 
    this.units = [];
    this.definedUnits = [];
    this.viewedUnit = new Unit();
    this.viewedUnitNumber = 0;
  }

  ngOnInit() {    
    this.getAllUnits();
    this.ChangeImage();
  }

  pitch(event: any){
    this.viewedUnit = this.definedUnits[event.value -1]
    this.viewedUnitNumber = event.value -1    
  }

  prevunit(){
    if (this.viewedUnitNumber > 0){
      this.viewedUnitNumber = this.viewedUnitNumber -1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }
  }

  nextunit(){
    if (this.viewedUnitNumber >= this.definedUnits.length-1){
      
    }
    else{
      this.viewedUnitNumber = this.viewedUnitNumber +1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }
  }

  ChangeImage(){
    const source = interval(5000);
    const subscribe = source.subscribe(val => this.ScrollImage());    
  }

  ScrollImage(){
    if (this.viewedUnitNumber >= this.definedUnits.length-1){
      this.viewedUnitNumber = 0;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }
    else{
      this.viewedUnitNumber = this.viewedUnitNumber +1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }
  }



  getAllUnits(){
    this.unitService.getUnits(this.faction)
    .subscribe((units) => {
      this.units = units;
      this.setunitPhotos();      
    });
  }

  setunitPhotos(){
    for (let unit of this.units){
      var newUnit = new Unit();
      newUnit.faction = this.faction.name;
      newUnit.Name = unit.Name;
      newUnit.GetPicture();
      this.definedUnits.push(newUnit);
    }
    this.viewedUnit = this.definedUnits[0]
    
  }

}
