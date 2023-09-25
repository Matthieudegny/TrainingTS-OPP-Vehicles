enum TypeVehicule {BUS="Bus",VOITURE="Voiture"};

abstract class Vehicule{
    constructor(private _immatriculation:string, private _type:string){};
    get immatriculation(){return this._immatriculation;}
    get type(){return this._type;}
}

class Voiture extends Vehicule{
    constructor(immatriculation:string){
        super(immatriculation,TypeVehicule.VOITURE);
    }
}
class Bus extends Vehicule{
    constructor(immatriculation:string){
        super(immatriculation,TypeVehicule.BUS);
    }
}

class ListeVehicules<T>{
    private _liste:Array<T> = [];

    get liste(){return this._liste};
    
    ajouterVehicule(vehicule:T){
        this._liste.push(vehicule);
    }
    retirerVehicule(){
        if(this._liste.length > 0){
            this._liste.pop();
        }
    }
}

let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222YY");
let v1 = new Voiture("AB1111CD");
let v2 = new Voiture("EF2222GH");

let listeVoitures = new ListeVehicules<Voiture>();
listeVoitures.ajouterVehicule(v1);
listeVoitures.ajouterVehicule(v2);
listeVoitures.retirerVehicule();

let listeBus = new ListeVehicules<Bus>();
listeBus.ajouterVehicule(bus1);
listeBus.ajouterVehicule(bus2);

console.log(listeVoitures.liste);
console.log(listeBus.liste);