"use strict";
var TypeVehicule;
(function (TypeVehicule) {
    TypeVehicule["BUS"] = "Bus";
    TypeVehicule["VOITURE"] = "Voiture";
})(TypeVehicule || (TypeVehicule = {}));
;
class Vehicule {
    constructor(_immatriculation, _type) {
        this._immatriculation = _immatriculation;
        this._type = _type;
    }
    ;
    get immatriculation() { return this._immatriculation; }
    get type() { return this._type; }
}
class Voiture extends Vehicule {
    constructor(immatriculation) {
        super(immatriculation, TypeVehicule.VOITURE);
    }
}
class Bus extends Vehicule {
    constructor(immatriculation) {
        super(immatriculation, TypeVehicule.BUS);
    }
}
class ListeVehicules {
    constructor() {
        this._liste = [];
    }
    get liste() { return this._liste; }
    ;
    ajouterVehicule(vehicule) {
        this._liste.push(vehicule);
    }
    retirerVehicule() {
        if (this._liste.length > 0) {
            this._liste.pop();
        }
    }
}
let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222YY");
let v1 = new Voiture("AB1111CD");
let v2 = new Voiture("EF2222GH");
let listeVoitures = new ListeVehicules();
listeVoitures.ajouterVehicule(v1);
listeVoitures.ajouterVehicule(v2);
listeVoitures.retirerVehicule();
let listeBus = new ListeVehicules();
listeBus.ajouterVehicule(bus1);
listeBus.ajouterVehicule(bus2);
console.log(listeVoitures.liste);
console.log(listeBus.liste);
