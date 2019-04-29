export class Unit {

    name: string;
    faction: string;
    picture: string;

    constructor(){

    }

    GetPicture(): string{
        return 'https://thetrolltrader.com/dzcbuilderbeta/assets/images/unitphotos/' + this.faction + '/' + this.name + '.jpg'
    }
}