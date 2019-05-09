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
  prevUnit: Unit;
  prevUnitNumber: number;
  nextUnit: Unit;
  nextUnitNumber: number;

  constructor(
    private unitService: UnitsService,
  ) { 
    this.units = [];
    this.definedUnits = [];
    this.viewedUnit = new Unit();
    this.viewedUnitNumber = 0;
    this.prevUnit = new Unit();
    this.prevUnitNumber = 0;
    this.nextUnit = new Unit();
    this.nextUnitNumber = 0;
  }

  ngOnInit() {    
    this.getAllUnits();
    //this.ChangeImage();
    this.UpdatePrevNext();
  }

  pitch(event: any){
    this.viewedUnit = this.definedUnits[event.value -1]
    this.viewedUnitNumber = event.value -1 
    this.UpdatePrevNext();   
  }

  prevunit(){
    if (this.viewedUnitNumber > 0){
      this.viewedUnitNumber = this.viewedUnitNumber -1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }

    else{
      this.viewedUnitNumber = this.definedUnits.length -1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber];
    }
    this.UpdatePrevNext();
  }

  nextunit(){
    if (this.viewedUnitNumber >= this.definedUnits.length-1){
      this.viewedUnitNumber = 0;
      this.viewedUnit = this.definedUnits[0];
    }
    else{
      this.viewedUnitNumber = this.viewedUnitNumber +1;
      this.viewedUnit = this.definedUnits[this.viewedUnitNumber]
    }
    this.UpdatePrevNext();
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
    this.UpdatePrevNext();
  }

  UpdatePrevNext(){
    if (this.viewedUnitNumber < this.units.length && this.viewedUnitNumber >= 1){
      this.prevUnitNumber = this.viewedUnitNumber -1;
      this.nextUnitNumber = this.viewedUnitNumber +1;
      this.prevUnit = this.definedUnits[this.prevUnitNumber]
      this.nextUnit = this.definedUnits[this.nextUnitNumber]      
    }
    if (this.viewedUnitNumber == this.units.length-1){
      this.nextUnitNumber = 0;
      this.nextUnit = this.definedUnits[0];
      this.prevUnitNumber = this.viewedUnitNumber -1;
      this.prevUnit = this.definedUnits[this.prevUnitNumber]
    }
    if (this.viewedUnitNumber == 0){
      this.nextUnitNumber = 1;
      this.nextUnit = this.definedUnits[this.nextUnitNumber];
      this.prevUnitNumber = this.units.length-1; 
      this.prevUnit = this.definedUnits[this.prevUnitNumber];
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
    this.nextUnit = this.definedUnits[1];
    this.prevUnit = this.definedUnits[this.definedUnits.length-1];
    
  }

}
