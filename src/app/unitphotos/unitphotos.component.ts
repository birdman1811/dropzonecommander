import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

import { Faction } from '../faction';
import { UnitsService } from '../units.service';
import { Unit } from '../unit';
import { TransportsetterService } from '../transportsetter.service';
import { UnitlistComponent } from '../unitlist/unitlist.component';
import { MatDialog } from '@angular/material';


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
  factionName: string;

  constructor(
    private unitService: UnitsService,
    private transportService: TransportsetterService,
    private unitDialog: MatDialog,
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
    //this.UpdatePrevNext();
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
      this.prevUnitNumber = this.viewedUnitNumber ;
      this.prevUnit = this.definedUnits[this.prevUnitNumber]
    }
    if (this.viewedUnitNumber == 0){
      this.nextUnitNumber = 1;
      this.nextUnit = this.definedUnits[this.nextUnitNumber];
      this.prevUnitNumber = this.definedUnits.length-1; 
      this.prevUnit = this.definedUnits[this.prevUnitNumber];
    }
    
  }

  getAllUnits(){
    this.transportService.setFaction(this.faction.name);
    this.unitService.getUnits(this.faction)
    .subscribe((units) => {
      this.units = units;
      this.setunitPhotos();      
    });
    this.factionName = this.faction.name; 
  }

  setunitPhotos(){
    for (let unit of this.units){
      if (unit.Category != 'Unreleased' && unit.Category != 'Extras'){
      var newUnit = new Unit();
      newUnit.faction = this.faction.name;
      newUnit.Name = unit.Name;
      newUnit.GetPicture();
      newUnit.MinSquadSize = unit.MinSquadSize;
      newUnit.MaxSquadSize = unit.MaxSquadSize;
      newUnit.Move = unit.Move;
      newUnit.Move2 = unit.Move2;
      newUnit.AlternateMove = unit.AlternateMove;
      newUnit.Points = unit.Points;
      newUnit.Special = unit.Special;
      newUnit.TransportOptions = unit.TransportOptions;
      newUnit.Type = unit.Type;
      newUnit.SetWeapons(unit);        
      newUnit.ExtraRules = unit.ExtraRules;                 
      newUnit.Category = unit.Category;
      newUnit.DamagePoints = unit.DamagePoints;
      newUnit.CounterMeasures = unit.CounterMeasures;
      newUnit.Category = unit.Category;
      newUnit.Armour = unit.Armour;
      newUnit.alternateStats = unit.alternateStats;
      newUnit.alternateUnit = unit.alternateUnit;
      newUnit.transport1Class = unit.transport1Class;
      newUnit.transport2Class = unit.transport2Class;
      newUnit.transport1Number = unit.transport1Number; 
      newUnit.transport2Number = unit.transport2Number;
      newUnit.transport1Icon = unit.transport1Icon;
      newUnit.transport2Icon = unit.transport2Icon; 
      newUnit.BehemothStats = unit.BehemothStats;  
      newUnit.customImage = unit.customImage;
      newUnit.customImageurl = unit.customImageurl; 
      newUnit.SetTransportOptions();    
      newUnit.setTransportAmount();
      this.transportService.setTransports(newUnit);
      this.SetTransports(newUnit);    
      this.transportService.SetTransportIcons(newUnit);
      this.definedUnits.push(newUnit);          
    }
    if (unit.Name == 'Starsprite Drones'){
      var newUnit = new Unit();
      newUnit.faction = this.faction.name;
      newUnit.Name = unit.Name;
      newUnit.GetPicture();
      newUnit.MinSquadSize = unit.MinSquadSize;
      newUnit.MaxSquadSize = unit.MaxSquadSize;
      newUnit.Move = unit.Move;
      newUnit.Move2 = unit.Move2;
      newUnit.AlternateMove = unit.AlternateMove;
      newUnit.Points = unit.Points;
      newUnit.Special = unit.Special;
      newUnit.TransportOptions = unit.TransportOptions;
      newUnit.Type = unit.Type;
      newUnit.SetWeapons(unit);        
      newUnit.ExtraRules = unit.ExtraRules;                 
      newUnit.Category = unit.Category;
      newUnit.DamagePoints = unit.DamagePoints;
      newUnit.CounterMeasures = unit.CounterMeasures;
      newUnit.Category = unit.Category;
      newUnit.Armour = unit.Armour;
      newUnit.alternateStats = unit.alternateStats;
      newUnit.alternateUnit = unit.alternateUnit;
      newUnit.transport1Class = unit.transport1Class;
      newUnit.transport2Class = unit.transport2Class;
      newUnit.transport1Number = unit.transport1Number; 
      newUnit.transport2Number = unit.transport2Number;
      newUnit.transport1Icon = unit.transport1Icon;
      newUnit.transport2Icon = unit.transport2Icon; 
      newUnit.BehemothStats = unit.BehemothStats;  
      newUnit.customImage = unit.customImage;
      newUnit.customImageurl = unit.customImageurl; 
      newUnit.SetTransportOptions();    
      newUnit.setTransportAmount();
      this.transportService.setTransports(newUnit);
      this.SetTransports(newUnit);    
      this.transportService.SetTransportIcons(newUnit);
      this.definedUnits.push(newUnit);   
    }
  }
    this.viewedUnit = this.definedUnits[0]
    this.nextUnit = this.definedUnits[1];
    this.prevUnit = this.definedUnits[this.definedUnits.length-1]; 
    this.factionName = newUnit.faction;  
  }

  SetTransports(unit: Unit){      
      this.transportService.SetTransportIcons(unit);     
  }

  OpenUnitPrintout(){
    const dialogRef = this.unitDialog.open(UnitlistComponent,
      {
        hasBackdrop: true,
        data: {units: this.definedUnits, faction: this.faction.name},
        panelClass: "armysheetbox",
        backdropClass: "backdropcustom",
      })
  }

}
