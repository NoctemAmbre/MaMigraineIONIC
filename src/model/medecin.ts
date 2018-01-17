import { Injectable } from '@angular/core';
import { Adresse } from './adresse';
import { Horaire } from './horaire';
import { Migraine } from './migraine';

@Injectable()
export class Medecin {
    Sexe:boolean;
    Nom:string;
    Prenom:string;
    Adresse:Adresse;
    Telephone:string;
    AdresseMail:string;
    InfoComplementaire:string;
    HoraireOuverture:Horaire[];
}