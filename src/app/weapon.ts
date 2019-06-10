export class  Weapon {

    Name: string;
    Energy: number;
    Shots: number;
    Accuracy: number;
    RangeFull: string;
    RangeCountered: string;
    MoveFire: number;
    Arc: string;
    Optional: boolean;
    OptionalCost: number;
    Special: string[];
    FullString: string;
    optionalTaken: boolean;

    constructor(){
        this.Special = [];
        this.optionalTaken = false;
    }

}