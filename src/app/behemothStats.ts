export class BehemothStats{
    HullPoints: number
    HullDamagePoints: number
    HullEffect: string
    LegsPoints: number
    LegsDamagePoints: number
    LegsEffect: string
    WeaponsPoints: number
    WeaponsDamagePoints: number
    WeaponsEffect: string

    constructor(){
        this.HullPoints = 0;
        this.HullDamagePoints = 0;
        this.LegsPoints = 0;
        this.LegsDamagePoints = 0;
        this.WeaponsPoints = 0;
        this.WeaponsDamagePoints = 0;
    }
}