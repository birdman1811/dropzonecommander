import { Weapon } from './weapon';
import { BehemothStats } from './behemothStats';


export class Unit {

    Name: string;
    faction: string;
    picture: string;
    Category: string;
    Armour: number;
    Move: number;
    Move2: number;
    AlternateMove: boolean;
    CounterMeasures: string[];
    DamagePoints: number;
    Points: number;
    Type: string;       
    MinSquadSize: number;
    MaxSquadSize: number;   
    TransportOptions: string[];
    ExtraRules: string[];
    Special: string[];
    Weapons: Weapon[];
    Faction: string;
    amountTaken: number;    
    totalCost: number;
    alternateStats: boolean;
    alternateUnit: Unit;
    transport1: string;
    transport1Class: string;
    transport1Number: number;
    transport1Amount: number;
    transport1Icon: string;
    transport2: string;
    transport2Class: string;
    transport2Number: number;
    transport2Amount: number;
    transport2Icon: string;
    hasOptionalWeapon: boolean;
    optionalTaken: boolean;
    transports: Unit[];
    BehemothStats: BehemothStats;
    customImage: boolean;
    customImageurl: string;


    constructor(){
        this.CounterMeasures = [];        
        this.TransportOptions = [];
        this.ExtraRules = [];
        this.Special = [];
        this.Weapons = [];
        this.alternateStats = false; 
        this.hasOptionalWeapon = false;   
        this.AlternateMove = false;  
        this.transports = [];
        this.BehemothStats = new BehemothStats(); 
        this.customImage = false;   
        this.optionalTaken = false; 
    }

    CalcCost(){
        this.totalCost = 0;
        this.totalCost = this.amountTaken * this.Points; 
        this.setTransportAmount();      
    }

    ModifyUnitAmount(amount){
        this.amountTaken = amount;
        this.CalcCost();
        this.setTransportAmount();
    }

    
    SetTransportOptions(){
        var numberOfOptions = this.TransportOptions.length;       
        if (numberOfOptions == 0){
            this.transport1 = "";
            this.transport2 = "";
        }
        if (numberOfOptions == 1){
            this.transport1 = this.TransportOptions[0];
            this.transport2 = "";
        }
        if (numberOfOptions == 2){
            this.transport1 = this.TransportOptions[0];
            this.transport2 = this.TransportOptions[1];
        }
    }

    SetHasOptionalWeapon(){
        for (let weapon of this.Weapons){
            if (weapon.Optional == true){
                this.hasOptionalWeapon = true;
            }
        }
    }

    AddOptionalWeapon(weapon: Weapon){
        this.Points = this.Points + weapon.OptionalCost;
        this.Name = this.Name + " with " + weapon.Name;
        for (let w of this.Weapons){
            if (weapon.Name == w.Name ){
                w.optionalTaken = true;
            }
        }        
    }

    getFullMoveString():string{
        if(this.AlternateMove == true){
            return this.Move + '"' + '-' + this.Move2 + '"';
        }
        else {
            return this.Move + '"';
        }
    }

    getImage():string{
        if (this.customImage == false){
            return 'https://thetrolltrader.com/dzcbuilderbeta/assets/images/unitphotos/' + this.Faction + '/' + this.Name + '.jpg'
        }
        else {
            return this.customImageurl;
        }
    }

    setCustomImage(customImageAddress: string){
        this.customImageurl = customImageAddress;
        this.customImage = true;
    }

    removeCustomImage(){
        this.customImageurl = undefined;
        this.customImage = false;
    }

    getTransport1Icon(){
        return this.transport1Icon;
    }

    getTransport2Icon(){
        return this.transport2Icon;
    }

    addTransport(transport: Unit){
        this.transports.push(transport);
    }

    setTransportAmount(){
        this.transport2Amount = this.transport2Number * this.amountTaken;
        this.transport1Amount = this.transport1Number * this.amountTaken;
    }

    SetWeapons(unit: Unit){
        for (let weapon of unit.Weapons){
            var newWeapon = new Weapon();
            newWeapon.Name = weapon.Name;
            newWeapon.Energy = weapon.Energy;
            newWeapon.Shots= weapon.Shots;
            newWeapon.Accuracy = weapon.Accuracy;
            newWeapon.RangeFull = weapon.RangeFull;
            newWeapon.RangeCountered = weapon.RangeCountered;
            newWeapon.MoveFire = weapon.MoveFire;
            newWeapon.Arc = weapon.Arc;
            newWeapon.Optional = weapon.Optional;
            newWeapon.OptionalCost = weapon.OptionalCost;
            newWeapon.Special = weapon.Special;
            newWeapon.FullString = weapon.FullString;
            newWeapon.optionalTaken = weapon.optionalTaken;
            this.Weapons.push(newWeapon);
        }
    }

    

    GetPicture(): string{
        this.picture = 'https://thetrolltrader.com/dzcbuilderbeta/assets/images/unitphotos/' + this.faction + '/' + this.Name + '.jpg';
        return this.picture;
    }
}