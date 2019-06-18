import { Injectable } from '@angular/core';
import { Unit } from './unit';

@Injectable({
  providedIn: 'root'
})
export class TransportsetterService {
  
  constructor() { }
  
  transports: Unit[];
  faction: string;

  setTransportList(transportList: Unit[]){
    this.transports = transportList;
    for (let unit of this.transports){
      if (unit.transport1 != ""){
        var x = unit.transport1.charAt(0);
        unit.transport1Class = x;
        var y = unit.transport1.substring(1);
        unit.transport1Number = parseInt(y);
      }
      if (unit.transport2 != ""){
        var x = unit.transport2.charAt(0);
        unit.transport2Class = x;
        var y = unit.transport2.substring(1);
        unit.transport2Number = parseInt(y);
      }
      if (unit.transport3 != ""){
        var x = unit.transport3.charAt(0);
        unit.transport3Class = x;
        var y = unit.transport3.substring(1);
        unit.transport3Number = parseInt(y);
      }
    }
  }

  setFaction(faction: string){
    this.faction = faction;
  }

  setTransports(unit: Unit){    
    if (unit.transport1 != ""){
      var x = unit.transport1.charAt(0);
      unit.transport1Class = x;
      var y = unit.transport1.substring(1);
      unit.transport1Number = parseInt(y);
    }
    if (unit.transport2 != ""){
      var x = unit.transport2.charAt(0);
      unit.transport2Class = x;
      var y = unit.transport2.substring(1);
      unit.transport2Number = parseInt(y);
    }  
    if (unit.transport3 != ""){
      var x = unit.transport3.charAt(0);
      unit.transport3Class = x;
      var y = unit.transport3.substring(1);
      unit.transport3Number = parseInt(y);
    }    
  }

  

  SetTransportIcons(unit: Unit){   
    if (this.faction != 'Shaltari'){
      if (unit.transport1Class == 'a'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleOrange.png';       
      }
      if (unit.transport1Class == 'A'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleTransportOrange.png';       
      }
      if (unit.transport1Class == 'b'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ArtilleryYellow.png';
      }
      if (unit.transport1Class == 'B'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ArtilleryTransportYellow.png';
      }
      if (unit.transport1Class == 'c'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryGreen.png';
      }
      if (unit.transport1Class == 'C'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryTransportGreen.png';
      }
      if (unit.transport2Class == 'a'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleOrange.png';       
      }
      if (unit.transport2Class == 'A'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleTransportOrange.png';       
      }
      if (unit.transport2Class == 'b'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ArtilleryYellow.png';
      }
      if (unit.transport2Class == 'B'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ArtilleryTransportYellow.png';
      }
      if (unit.transport2Class == 'c'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryGreen.png';
      }
      if (unit.transport2Class == 'C'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryTransportGreen.png';
      }
      if (unit.transport1Class == 'v'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VampireYellow.png';
      }
      if (unit.transport1Class == 'V'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VampireTransportYellow.png';
      }
      if (unit.transport2Class == 'v'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VampireYellow.png';
      }
      if (unit.transport2Class == 'V'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VampireTransportYellow.png';
      }
    }
    if (this.faction == 'Scourge'){
      if (unit.transport1Class == 'd'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/CrabPurple.png';
      }
      if (unit.transport1Class == 'D'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/CrabTransportPurple.png';
      }
      if (unit.transport2Class == 'd'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/CrabPurple.png';
      }
      if (unit.transport2Class == 'D'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/CrabTransportPurple.png';
      }
      if (unit.transport1Class == 's'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ScreamerBlue.png';
      }
      if (unit.transport1Class == 'S'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ScreamerTransportBlue.png';
      }
      if (unit.transport2Class == 's'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ScreamerBlue.png';
      }
      if (unit.transport2Class == 'S'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/ScreamerTransportBlue.png';
      }
    }
    
    if (this.faction == 'PHR'){
      if (unit.transport1Class == 'm'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/MedusaYellow.png';
      }
      if (unit.transport1Class == 'M'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/MedusaTransportYellow.png';
      }
      if (unit.transport2Class == 'm'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/MedusaYellow.png';
      }
      if (unit.transport2Class == 'M'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/MedusaTransportYellow.png';
      }
      if (unit.transport1Class == 'a'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WalkerOrange.png';
      }
      if (unit.transport1Class == 'A'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WalkerTransportOrange.png';
      }
      if (unit.transport2Class == 'a'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WalkerOrange.png';
      }
      if (unit.transport2Class == 'A'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WalkerTransportOrange.png';
      }
      if (unit.transport1Class == 'b'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/FanBlue.png';
      }
      if (unit.transport1Class == 'B'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/FanTransportBlue.png';
      }
      if (unit.transport2Class == 'b'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/FanBlue.png';
      }
      if (unit.transport2Class == 'B'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/FanTransportBlue.png';
      }
    }
    if (this.faction == 'Shaltari'){
      if (unit.transport1Class == 'a'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleOrange.png';
      }
      if (unit.transport1Class == 'A'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleTransportOrange.png';
      }
      if (unit.transport2Class == 'a'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleOrange.png';
      }
      if (unit.transport2Class == 'A'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/VehicleTransportOrange.png';
      }
      if (unit.transport1Class == 'b'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryGreen.png';
      }
      if (unit.transport1Class == 'B'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryTransportGreen.png';
      }
      if (unit.transport2Class == 'b'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryGreen.png';
      }
      if (unit.transport2Class == 'B'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryTransportGreen.png';
      }
    }
    if (this.faction == 'Resistance'){
      if (unit.transport1Class == 's'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/DrillYellow.png';
      }
      if (unit.transport1Class == 'S'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/DrillTransportYellow.png';
      }
      if (unit.transport2Class == 's'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/DrillYellow.png';
      }
      if (unit.transport2Class == 'S'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/DrillTransportYellow.png';
      }
      if (unit.transport1Class == 'e'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsYellow.png';
      }
      if (unit.transport1Class == 'E'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsTransportYellow.png';
      }
      if (unit.transport2Class == 'e'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsYellow.png';
      }
      if (unit.transport2Class == 'E'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsTransportYellow.png';
      }
      if (unit.transport1Class == 'd'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/BusBlue.png';
      }
      if (unit.transport1Class == 'D'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/BusTransportBlue.png';
      }
      if (unit.transport2Class == 'd'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/BusBlue.png';
      }
      if (unit.transport2Class == 'D'){
        unit.transport2Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/BusTransportBlue.png';
      }
      if (unit.transport1Class == 'b'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsBlue.png';
      }
      if (unit.transport1Class == 'B'){
        unit.transport1Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/WheelsTransportBlue.png';
      }
      if (unit.transport3Class == 'c'){
        unit.transport3Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryGreen.png';
      }
      if (unit.transport3Class == 'C'){
        unit.transport3Icon = 'https://www.dropzonecommander.com/builder/assets/images/transporticons/InfantryTransportGreen.png';
      }

    }
  }

}
