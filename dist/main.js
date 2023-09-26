"use strict";
var TypeVehicule;
(function (TypeVehicule) {
    TypeVehicule["BUS"] = "Bus";
    TypeVehicule["VOITURE"] = "Voiture";
})(TypeVehicule || (TypeVehicule = {}));
class Vehicule {
    constructor(_immatriculation, _type) {
        this._immatriculation = _immatriculation;
        this._type = _type;
    }
    get immatriculation() {
        return this._immatriculation;
    }
    get type() {
        return this._type;
    }
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
    get liste() {
        return this._liste;
    }
    ajouterVehicule(vehicule) {
        this._liste.push(vehicule);
    }
    retirerVehicule() {
        if (this._liste.length > 0) {
            this._liste.pop();
        }
    }
}
class ParAuto {
    constructor() {
        this._voitures = new ListeVehicules();
        this._bus = new ListeVehicules();
    }
    get voitures() {
        return this._voitures;
    }
    get bus() {
        return this._bus;
    }
    ajouterVehicule(vehicule) {
        if (vehicule.type === TypeVehicule.VOITURE) {
            this._voitures.ajouterVehicule(vehicule);
        }
        else if (vehicule.type === TypeVehicule.BUS) {
            this._bus.ajouterVehicule(vehicule);
        }
    }
    louerVehicule(type) {
        if (type === TypeVehicule.BUS) {
            this._bus.retirerVehicule();
        }
        else if (type === TypeVehicule.VOITURE) {
            this._voitures.retirerVehicule();
        }
    }
    afficherParc() {
        console.log("Liste des voitures :");
        for (let v of this._voitures.liste) {
            console.log("Immatriculation : " + v.immatriculation);
        }
        console.log("Liste des Bus :");
        for (let b of this._bus.liste) {
            console.log("Immatriculation : " + b.immatriculation);
        }
    }
    getVehicules() {
        let tab = [];
        tab.push(...this._bus.liste, ...this._voitures.liste);
        return tab;
    }
}
let parcMGA = new ParAuto();
parcMGA.ajouterVehicule(new Bus("XX1111XX"));
parcMGA.ajouterVehicule(new Bus("YY2222YY"));
parcMGA.ajouterVehicule(new Voiture("AB1111CD"));
parcMGA.ajouterVehicule(new Voiture("EF2222GH"));
console.log(parcMGA.getVehicules());
const creerListeVehiculeSelect = () => {
    let txt = "";
    for (let v of parcMGA.getVehicules()) {
        txt += `<option value="${v.immatriculation}">${v.type} : ${v.immatriculation}</option>`;
    }
    return txt;
};
const selectListe = document.querySelector("#listeVehicule");
selectListe.innerHTML = creerListeVehiculeSelect();
