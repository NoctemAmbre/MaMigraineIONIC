import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CompteServiceProvider} from '../../providers/compte/compte-service';
import { MedecinInformationPage } from '../medecin-information/medecin-information';
import { MedicamentInformationPage } from '../medicament-information/medicament-information';
import { FacteurInformationPage } from '../facteur-information/facteur-information';

import { Compte } from '../../model/compte';
import { Medicament } from '../../model/medicament';
import { Migraine } from '../../model/migraine';
import { Medecin } from '../../model/medecin';
import { Facteur } from '../../model/facteur';

@IonicPage()
@Component({
  selector: 'page-compte-login',
  templateUrl: 'compte-login.html',
})
export class CompteLoginPage {

  Identifiant : string;
  MotDePass : string;
  Tel : number;
  compte:Compte = new Compte();
  AffichageLogin : boolean = false;

  constructor(
     public compteServiceProvider : CompteServiceProvider,
     public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public storage : Storage,
     public ModalController : ModalController) {
  }

  ionViewDidLoad() {
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    // this.storage.remove('Token');
    // this.storage.clear();
    //localStorage.setItem('Token',"");
    
    console.log('le compte est ',this.compte);
    

    if (this.compte.Identifiant == null)
    {
      console.log('l\'identifiant est null');
      this.compte.Identifiant = "";
      this.compte.MotDePass = "";
      this.compte.TelephonePortable = "";
      let token : string = localStorage.getItem('Token');
      console.log('le token est ',token);
      if (token == "null" || token == undefined || token == ""){
      //dif (token == null){
        console.log('il faut afficher la mire');
        this.AffichageLogin = true;
      }
      else{
        console.log('aller chercher sur le webservice');
        this.AffichageLogin = false;
        //console.log('le compte est ',localStorage.getItem('Compte'));
        if (localStorage.getItem('Compte') == null)
        {
          localStorage.setItem('Token', "");
          this.AffichageLogin = true;
        }else{
          this.LoginToken();
        }
        //console.log(token);
      }
    }
  }
  Login()
  {
    //this.storage.set('Token', "c\'est mon beau Token");
    
    this.compteServiceProvider.changeCompte(this.compte);
    this.compteServiceProvider.Login()
       .subscribe(
         (retour) => 
         {
          console.log('le retour du compte', retour);
          if ((retour as Compte).Erreur == null){
            console.log('retour du compte : ', retour)
            this.compte = retour as Compte;
            localStorage.setItem('Token', this.compte.Token);
            localStorage.setItem('Compte', JSON.stringify(this.compte));
            this.compteServiceProvider.changeCompte(this.compte);
            this.compteServiceProvider.AffichageMigraineIncomplete();
            this.AffichageLogin = false;
            console.log(retour)
          }
          else {
            console.log('retour du compte avec erreur: ', retour)
            localStorage.removeItem('Token');
            localStorage.removeItem('Compte');
            this.AffichageLogin = true;
          }
         },
         error => console.log('retour du compte grosse erreur',error));

    
    //this.viewCtrl.dismiss();
  }

  LoginToken()
  {
    this.compteServiceProvider.LoginToken()
    .subscribe(
      (retour) => 
      {
        this.compte = retour as Compte;
        this.compte.MesMedicaments = (retour as Compte).MesMedicaments as Medicament[];
        this.compte.MesMigraines = (retour as Compte).MesMigraines as Migraine[];
        localStorage.setItem('Token', this.compte.Token);
        localStorage.setItem('Compte', JSON.stringify(this.compte));
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AffichageMigraineIncomplete();
        this.AffichageLogin = false;
        console.log(retour)
      },
      error => console.log(error));
  }

  Deconnexion(){
    localStorage.removeItem('Token');
    localStorage.removeItem('Compte');
    this.compteServiceProvider.changeCompte(new Compte());
    this.compteServiceProvider.AffichageMigraineIncomplete();
    this.AffichageLogin = true;
  }

  VoirMedecin(medecin : Compte) {
    let AffichageMedecin = this.ModalController.create(MedecinInformationPage, {IDWeb :medecin.IDWeb});
    AffichageMedecin.present();
  }

  VoirMedicament(medicament : Medicament){
    let AffichageMedicament = this.ModalController.create(MedicamentInformationPage, {Medicament : medicament});
    AffichageMedicament.present();
  }

  VoirFacteur(facteur : Facteur){
    console.log('facteur avant envois', facteur);
    let AffichageFacteur = this.ModalController.create(FacteurInformationPage, {Facteur : facteur});
    AffichageFacteur.present();
  }
}
