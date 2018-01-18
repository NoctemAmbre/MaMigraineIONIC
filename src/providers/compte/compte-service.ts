import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Compte } from '../../model/compte';
//import { IonicStorageModule } from '@ionic/storage';
/*
  Generated class for the CompteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompteServiceProvider {
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private WebService = 'http://localhost:57928/Service1.svc';

  public static CleBasic : string = "j6tYtmgst2XIOIeRsPHR";
  
  private comptes = new BehaviorSubject<Compte>(new Compte());
  compte = this.comptes.asObservable();

  private incomplets = new BehaviorSubject<number>(null);
  incomplet = this.incomplets.asObservable();

  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }

  changeCompte(compte){
    //localStorage.setItem('Token', compte.Token);
    this.comptes.next(compte);
  }

  changeIncomplet(incomplet){
    this.incomplets.next(incomplet);
  }

  // public TokenPresent() : boolean
  // {
  //   let retour : boolean;
  //   this.storage.get('token').then((val) => {
  //     if (val != "") retour = true;
  //     else retour = false;
  //   });
  //   return retour;
  // }
  public Login() : Observable<{}> {
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //var body = localStorage.getItem('compte');
    var body = JSON.stringify({Identifiant : this.comptes.value.Identifiant, MotDePass : this.comptes.value.MotDePass, TelephonePortable :this.comptes.value.TelephonePortable, Token : CompteServiceProvider.CleBasic });
    console.log('ce qui est envoyé', body);
    return this.http.post<Compte>(this.WebService + "/Tel/login?Value=" + btoa(body), '', {headers : headers, observe : 'response'}).pipe(map(this.extractData));
  }

  public LoginToken() : Observable<{}> {
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //var body = localStorage.getItem('compte');
    var body = JSON.stringify({Identifiant : JSON.parse(localStorage.getItem('Compte')).Identifiant, Token : localStorage.getItem('Token') });
    console.log('ce qui est envoyé', body);
    return this.http.post<Compte>(this.WebService + "/Tel/loginToken?Value=" + btoa(body), '', {headers : headers, observe : 'response'}).pipe(map(this.extractData));
  }

  public AjouterMigraine() : Observable<{}>
  {
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    var body = JSON.stringify({IDWeb : this.comptes.value.IDWeb, Identifiant : this.comptes.value.Identifiant, MesMigraines : this.comptes.value.MesMigraines, Token : localStorage.getItem('Token') });
    
    console.log('Ajout Migraine', this.compte);
    return this.http.post<Compte>(this.WebService + "/Tel/Patient/AjoutMigraine?Value="+ btoa(body), '', {headers : headers, observe : 'response'}).pipe(map(this.extractData));
  }

  public AjouterMigraineIncomplet() : Observable<{}>
  {
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    var body = JSON.stringify({IDWeb : this.comptes.value.IDWeb, Identifiant : this.comptes.value.Identifiant, MesMigraines : this.comptes.value.MesMigraines, Token : localStorage.getItem('Token') });
    
    console.log('Ajout Migraine', this.compte);
    return this.http.post<Compte>(this.WebService + "/Tel/Patient/AjoutMigraineIncomplet?Value="+ btoa(body), '', {headers : headers, observe : 'response'}).pipe(map(this.extractData));
  }
  
    // return this.http.post(this.WebService + '/Tel/login').pipe(
    //   map(this.extractData),
    //   catchError(this.handleError)
    // );
  //}

  // getCountries(): Observable<{}> {
  //   return this.http.get(this.apiUrl).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
  
   private extractData(res: HttpResponse<Compte>) {
    console.log('le body a la reception', res.body);
    let body = res.body;
    return body || { };
  }

  public AffichageMigraineIncomplete() : void{
    let nombre : number = 0;
    console.log('avant changement : ', nombre);
    if (this.comptes.value.MesMigraines == null) this.changeIncomplet(null);
    else{
      this.comptes.value.MesMigraines.forEach(elt => {if (elt.Complet == false) nombre++;});
      if (nombre > 0)this.changeIncomplet(nombre);
      else this.changeIncomplet(null);
      console.log('avant changement  : ', nombre);
    }
  }


          // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
