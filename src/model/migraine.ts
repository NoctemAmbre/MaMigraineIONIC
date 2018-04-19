import { Injectable } from '@angular/core';

import { Medicament } from './medicament';
import { Facteur } from './facteur';
import { Date, Heure } from './date_heure';

@Injectable()
export class Migraine {
    ID              : number;
    Debut               : string;
    Fin                 : string;
    DateDebut           : Date;
    DateFin             : Date;
    HeureDebut          : Heure;
    HeureFin            : Heure;
    Duree               : number;
    Moi                 : string;
    Intensite           : number;
    MedicamentsPris     : Medicament[];
    Facteurs            : Facteur[];
    Complet             : Boolean;
    DebutPresentation   : string;
    FinPresentation     : string;
}