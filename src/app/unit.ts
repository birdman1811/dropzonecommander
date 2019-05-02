export class Unit {

    Name: string;
    faction: string;
    picture: string;

    constructor(){

    }

    GetPicture(): string{
        return 'https://thetrolltrader.com/dzcbuilderbeta/assets/images/unitphotos/' + this.faction + '/' + this.Name + '.jpg'
    }
}