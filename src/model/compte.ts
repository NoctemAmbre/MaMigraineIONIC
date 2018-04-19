import { Adresse } from './adresse';
import { Migraine } from './migraine';
import { Medicament } from './medicament';
import { Facteur } from './facteur';

import { Injectable } from '@angular/core';
@Injectable()
export class Compte {
    IDWeb:number;
    Identifiant:string;
    MotDePass:string;
    Sexe:boolean;
    Nom:string;
    Prenom:string;
    DateCreation:string;
    DerniereModif:string;
    DateNaissance:string;
    MesMedecin:Compte[];
    MesMigraines:Migraine[];
    MesMedicaments:Medicament[];
    MesFacteurs:Facteur[];
    Adresse:Adresse[];
    Telephone:string;
    TelephonePortable:string;
    AdresseMail:string;
    Token:string;
    Erreur:string;
}