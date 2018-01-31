import { Injectable } from '@angular/core';

import { Medicament } from './medicament';
import { Facteur } from './facteur';
import { Date, Heure } from './date_heure';

@Injectable()
export class Migraine {
    ID          : number;
    Debut       : string;
    Fin         : string;
    DateDebut   : Date;
    DateFin     : Date;
    HeureDebut  : Heure;
    HeureFin    : Heure;
    Duree       : number;
    Moi         : string;
    Intensite   : number;
    MedicamentsPris : Medicament[];
    Facteurs    : Facteur[];
    Complet     : Boolean;
    DebutPresentation   : string;
    FinPresentation     : string;

    // private DateDebutAuPropre() : string{

    //     let date : string[] = this.Debut.split('T')[0].split('-');
    //     let jour : string[] = this.Debut.split('T')[1].split(':');
    //     return this.AjoutDuZero(date[2]) + "/" + this.AjoutDuZero(date[1]) +  "/" + date[0] + " à " + this.Debut.split('T')[1];

    //     // return this.AjoutDuZero(this.DateDebut.day) + "/"
    //     //  + this.AjoutDuZero(this.DateDebut.month) + "/" 
    //     //  + this.AjoutDuZero(this.DateDebut.year) + 
    //     //  " à " +  this.AjoutDuZero(this.HeureDebut.hour) + this.AjoutDuZero(this.HeureDebut.minute);
    // }
    // private DateFinAuPropre() : string{
    //     let date : string[] = this.Fin.split('T')[0].split('-');
    //     let jour : string[] = this.Fin.split('T')[1].split(':');
    //     return this.AjoutDuZero(date[2]) + "/" + this.AjoutDuZero(date[1]) +  "/" + date[0] + " à " + this.Debut.split('T')[1];

    //     //  return this.AjoutDuZero(this.DateFin.day) + "/"
    //     //   + this.AjoutDuZero(this.DateFin.month) + "/" 
    //     //   + this.AjoutDuZero(this.DateFin.year) + 
    //     //   " à " +  this.AjoutDuZero(this.HeureFin.hour) + this.AjoutDuZero(this.HeureFin.minute);
    //  }
    // private AjoutDuZero(valeur : string) : string{
    //     if (valeur.length == 1) return "0" + valeur;
    //     else return valeur;q
    // }
    // private MinuteNule(minute : number) : string{
    //     if (minute > 0) return ":" + this.AjoutDuZero(minute);
    //     else return null;
    // }
}