import { Injectable } from '@angular/core';

@Injectable()
export class Date {
    day : number;
    month : number;
    year : number;
}

@Injectable()
export class Heure {
    hour : number;
    minute : number;
    second : number;
}