export class Unit {

    Name: string;
    faction: string;
    picture: string;

    constructor(){

    }

    GetPicture(): string{
        this.picture = 'https://thetrolltrader.com/dzcbuilderbeta/assets/images/unitphotos/' + this.faction + '/' + this.Name + '.jpg';
        return this.picture;
    }
}