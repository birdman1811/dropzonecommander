import { Component, OnInit, Input, Inject } from '@angular/core';
import { Faction } from '../faction';
import { Unit } from '../unit';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  units: Unit[]
  faction: string;
}

@Component({
  selector: 'app-unitlist',
  templateUrl: './unitlist.component.html',
  styleUrls: ['./unitlist.component.css']
})
export class UnitlistComponent implements OnInit {

  
  units: Unit[];
  airstrikeUnits: Unit[];
  commandUnits: Unit[];
  exoticUnits: Unit[];
  heavyUnits: Unit[];
  scoutUnits: Unit[];
  standardUnits: Unit[];
  supportUnits: Unit[];
  transportUnits: Unit[];
  troopsUnits: Unit[];  
  behemothUnits: Unit[];
  faction: string;

  constructor(
    public dialogRef: MatDialogRef<UnitlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) 
  { 
    this.units = data.units;
    this.faction = data.faction;
    this.airstrikeUnits = [];
    this.commandUnits = [];
    this.exoticUnits = [];
    this.heavyUnits = [];
    this.scoutUnits = [];
    this.standardUnits = [];
    this.supportUnits = [];
    this.transportUnits = [];
    this.troopsUnits = [];
    this.behemothUnits =[];
  }

  ngOnInit() {
    this.sortUnits();
    console.log(this.units);
  }

  public printHTML(){ 

    var content = document.getElementById("print").innerHTML;
    var mywindow = window.open('', 'Print', 'height = 400,width = 600');
  
    mywindow.document.write('<html><title>Dropzone Army List Builder</title>');
    mywindow.document.write('<body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
  
    mywindow.onload=function(){
      mywindow.focus()
      mywindow.print();
      mywindow.close();
    };
  }
  
CopyToClipboard(){
  var content = document.getElementById("print").innerText;
  let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = content;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);  
}

sortUnits() {
  for (let unit of this.units){    
    switch (unit.Category) {
      case 'Airstrike': {
        this.transportUnits.push(unit);
        break;
      }
      case 'Command': {
        this.commandUnits.push(unit);
        break;
      }
      case 'Exotic': {
        this.exoticUnits.push(unit);
        break;
      }
      case 'Heavy': {
        this.heavyUnits.push(unit);
        break;
      }
      case 'Scout': {
        this.scoutUnits.push(unit);
        break;
      }
      case 'Standard': {
        this.standardUnits.push(unit);
        break;
      }
      case 'Support': {
        this.supportUnits.push(unit);
        break;
      }
      case 'Transport': {
        this.transportUnits.push(unit);
        break;
      }
      case 'Troops': {
        this.troopsUnits.push(unit);
        break;
      }
      case 'Gate': {
        this.transportUnits.push(unit);
        break;
      }
      case "Grasping*" : {
        this.transportUnits.push(unit);
        break;
      }
      case "Drill": {
        this.transportUnits.push(unit);
        break;
      }
      case "Auxiliary": {
        this.transportUnits.push(unit);
        break;
      }      
      case "Behemoth": {
        this.behemothUnits.push(unit);
        break;
      }
    }
    if (unit.Name == "Starsprite Drones"){
      this.supportUnits.push(unit);
    }

  }  
  
}


}
