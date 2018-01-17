import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { QuestionnaireFinMigrainePage } from '../../../pages/questionnaire/questionnaire-fin-migraine/questionnaire-fin-migraine';
import { CompteServiceProvider} from '../../../providers/compte/compte-service';
import { Compte } from '../../../model/compte';
import { Migraine } from '../../../model/migraine';

/**
 * Generated class for the QuestionnaireDebutMigrainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-debut-migraine',
  templateUrl: 'questionnaire-debut-migraine.html',
})
export class QuestionnaireDebutMigrainePage {

  compte : Compte;
  

  DateDebut : string;
  JourDebut : string;
  HeureMax : number = new Date().getHours();
  JourMax : number = new Date().getDate();
  HeureModifie : number = new Date().getHours();
  JourModifie : number = new Date().getDate();
  //month: string = '2018-01-10';

  // public event = {
  //   month: '2018-01-10',
  //   timeStarts: '07:43',
  //   timeEnds: '1990-02-20'}

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public compteServiceProvider : CompteServiceProvider,
     public viewController: ViewController,
     public modalController : ModalController) {
  }

  ionViewDidLoad() {
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    this.HeureMax = new Date().getHours();
    this.DateDebut = this.DateActuel();
    this.JourDebut = this.JoursActuel();
    console.log(this.DateDebut);
    console.log(this.JourDebut);
  }

  //retourReglette()
  //{
    //this.nouvelleMigraine.JourStringDebut = this.JoursActuelMoinsHeure();
    //console.log('le texte en retour est : ',this.JoursActuelMoinsHeure());
  //}

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
      this.JourDebut = this.JoursActuel();
    }
    else {
      if (this.HeureModifie < 10) heure = "0" + this.HeureModifie.toString();
      else heure =this.HeureModifie.toString();

      this.JourDebut = heure + ":00";
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
    this.DateDebut = annee + "-" + moi + "-" + jour;
  }

  //passage a la page suivant. pour l'occasion on efface la liste des migraines pour en faire une nouvelle contenant la novuelle migraine.
  //on en profite pour transformer la date pour qu'elle soit conforme a la structure d'envois 
  private Suivant(){
    let nouvelleMigraine : Migraine = new Migraine();
    nouvelleMigraine.Debut = this.DateDebut + 'T' + this.JourDebut;
    this.compte.MesMigraines = [];
    this.compte.MesMigraines.push(nouvelleMigraine);
    this.compteServiceProvider.changeCompte(this.compte);
    let AffichageFinMigraine = this.modalController.create(QuestionnaireFinMigrainePage);
    AffichageFinMigraine.present();
  }
  private Annule()
  {
    this.viewController.dismiss();
  }
}
