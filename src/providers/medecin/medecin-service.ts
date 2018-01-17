import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Medecin } from '../../model/medecin';

/*
  Generated class for the MedecinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedecinServiceProvider {

  private WebService = 'http://localhost:57928/Service1.svc';

  constructor(public http: HttpClient) {
    //console.log('Hello MedecinServiceProvider Provider');
  }

  public voirMedecin(idMedecin : number) : Observable<{}> {
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    var body = JSON.stringify({Identifiant : JSON.parse(localStorage.getItem('Compte')).Identifiant, Token : localStorage.getItem('Token'), MesMedecin : [{IDWeb : idMedecin}]  });
    console.log('ce qui est envoyé pour la demande de médecin', body);
    return this.http.get<Medecin>(this.WebService + "/tel/Medecin/Voir?Value=" + btoa(body), {headers : headers, observe : 'response'}).pipe(map(this.extractData));
  }

  private extractData(res: HttpResponse<Medecin>) {
    let body = res.body;
    return body || { };
  }

}
