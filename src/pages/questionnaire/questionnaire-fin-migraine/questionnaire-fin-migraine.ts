import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CompteServiceProvider} from '../../../providers/compte/compte-service';

import { QuestionnaireIntensiteMigrainePage } from '../../../pages/questionnaire/questionnaire-intensite-migraine/questionnaire-intensite-migraine';
import {  MenuPage } from '../../../pages/menu/menu';

import { Compte } from '../../../model/compte';
import { Migraine } from '../../../model/migraine';

@IonicPage()
@Component({
  selector: 'page-questionnaire-fin-migraine',
  templateUrl: 'questionnaire-fin-migraine.html',
})
export class QuestionnaireFinMigrainePage {

  compte : Compte;
  nouvelleMigraine : Migraine;

  DateFin : string;
  JourFin : string;

  JourMax : number = new Date().getDate();
  HeureMax : number = new Date().getHours();
  
  JourMin : number;
  HeureMin : number;

  HeureModifie : number = new Date().getHours();
  JourModifie : number = new Date().getDate();
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public compteServiceProvider : CompteServiceProvider,
     public viewController: ViewController,
     public modalController : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireFinMigrainePage');
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    this.nouvelleMigraine = this.compte.MesMigraines[0] as Migraine;
    this.HeureMax = new Date().getHours();
    this.HeureMin = this.HeureDebutMigraine();
    this.JourMin = this.DateDebutMigraine();
    this.DateFin = this.DateActuel();
    this.JourFin = this.JoursActuel();
  }

  private DateActuel() : string
  {
    let date = new Date();
    let annee = date.getFullYear().toString();

    let moi : string = "";
    if (date.getMonth() < 9) moi = "0" + (date.getMonth() + 1).toString();
    else moi = (date.getMonth() + 1).toString();

    let jour : string = "";
    if (date.getDate() < 10) jour = "0" + (date.getDate()).toString();
    else jour = (date.getDate()).toString();

    return annee + "-" + moi + "-" + jour;
  }

  private JoursActuel() : string
  {
    let date = new Date();
    
    let heure : string = "";
    if (date.getHours() < 10) heure = "0" + date.getHours().toString();
    else heure = date.getHours().toString();

    let minute : string = "";
    if (date.getMinutes() < 10) minute = "0" + date.getMinutes().toString();
    else minute = date.getMinutes().toString();

    return heure + ":" + minute;
  }

  private heureModifie()
  {
    let date = new Date();
    
    let heure : string = "";
    //console.log('heure modifié : ', this.HeureModifie);
    //console.log('heure actuel : ', date.getHours());
    if (this.HeureModifie == date.getHours()) {
      //console.log('jourActuel ',this.JoursActuel());
      this.JourFin = this.JoursActuel();
    }
    else {
      if (this.HeureModifie < 10) heure = "0" + this.HeureModifie.toString();
      else heure =this.HeureModifie.toString();

      this.JourFin = heure + ":00";
    }
  }

  private jourModifie()
  {
    let date = new Date();
    let annee = date.getFullYear().toString();

    let moi : string = "";
    if (date.getMonth() < 9) moi = "0" + (date.getMonth() + 1).toString();
    else moi = (date.getMonth() + 1).toString();

    let jour : string = "";
    if (this.JourModifie < 10) jour = "0" + this.JourModifie.toString();
    else jour = this.JourModifie.toString();

    console.log('jour modifie', this.JourModifie);
    console.log('jour', jour);
    this.DateFin = annee + "-" + moi + "-" + jour;
  }

  private DateDebutMigraine() : number{
    let retour : number = parseInt(this.nouvelleMigraine.Debut.split("T")[0].split("-")[2]);
    console.log(retour);
    return retour;
  }

  private HeureDebutMigraine() : number{
    let retour : number = parseInt(this.nouvelleMigraine.Debut.split("T")[1].split(":")[0]);
    console.log(retour);
    return retour;
  }

  private Suivant(){
    this.compte.MesMigraines[0].Fin = this.DateFin + 'T' + this.JourFin;
    this.compteServiceProvider.changeCompte(this.compte);
    let AffichageIntensite = this.modalController.create(QuestionnaireIntensiteMigrainePage);
    AffichageIntensite.present();
  }

  private Annule()
  {
    this.viewController.dismiss();
  }

  private Fin()
  {
    //effectuer l'envois partiel de la migraine avant de revenir a la page de garde
    let AffichageHome = this.modalController.create( MenuPage);
    AffichageHome.present();
  }
}
