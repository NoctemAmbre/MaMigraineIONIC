import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { QuestionnaireFinMigrainePage } from '../../../pages/questionnaire/questionnaire-fin-migraine/questionnaire-fin-migraine';
import { MenuPage } from '../../../pages/menu/menu';

import { CompteServiceProvider} from '../../../providers/compte/compte-service';
import { Compte } from '../../../model/compte';
import { Migraine } from '../../../model/migraine';
import { Medicament } from '../../../model/medicament';

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
  
  NouvelleMigraine : Migraine;
  DateDebut : string;
  JourDebut : string;
  HeureMax : number = new Date().getHours();
  HeureMin : number = 0;
  JourMax : number = new Date().getDate();
  JourMin : number = 1;
  HeureModifie : number = new Date().getHours();
  JourModifie : number = new Date().getDate();

  NouvelleEnregistrement : Boolean = false;
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
    
    this.NouvelleMigraine = this.navParams.get('Migraine') as Migraine;
    if (this.NouvelleMigraine == null) {
      this.NouvelleMigraine = new Migraine();
      // this.HeureMax = new Date().getHours();
      // this.JourMax = new Date().getDay();
      this.DateDebut = this.DateActuel();
      this.JourDebut = this.JoursActuel();
      
      console.log(this.DateDebut);
      console.log(this.JourDebut);
      this.NouvelleEnregistrement = true;
    }
    else {
      console.log('migraine a modifier', this.NouvelleMigraine);
      this.HeureMax = 23;
      this.NouvelleMigraine.Debut = this.Nettoyage(this.NouvelleMigraine.Debut);
      this.DateDebut = this.NouvelleMigraine.Debut.substring(0, this.NouvelleMigraine.Debut.search('T'));
      this.JourDebut = this.NouvelleMigraine.Debut.substring(this.NouvelleMigraine.Debut.search('T') + 1, this.NouvelleMigraine.Debut.length);

      this.JourModifie = this.NouvelleMigraine.DateDebut.day;
      this.HeureModifie = this.NouvelleMigraine.HeureDebut.hour;

      console.log(this.DateDebut);
      console.log(this.JourDebut);
    }
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

  private Nettoyage(date : string) : string{
    if (date.split('T').length == 2){
      let calendrier : string  = date.split('T')[0];
      let anne : string = calendrier.split('-')[0];
      let moi : string = this.ajoutDuZero(calendrier.split('-')[1]);
      let jour : string = this.ajoutDuZero(calendrier.split('-')[2]);

      let pendule : string  = date.split('T')[1];
      let heure : string = this.ajoutDuZero(pendule.split(':')[0]);
      let minute : string = this.ajoutDuZero(pendule.split(':')[1]);

      return anne + '-' + moi + '-' + jour + 'T' + heure + ':' + minute;
    }
  }

  private ajoutDuZero(valeur : string){
    console.log('avant modification', valeur);
    if (valeur.length == 1) return "0" + valeur;
    else return valeur;
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
    if (this.HeureModifie == date.getHours() && this.JourModifie == date.getDate()) {
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

    if (this.JourModifie < this.JourMax){
      this.HeureMax = 23;
      if (this.JourModifie > this.JourMin){
        this.HeureMin = 0;
      }else{
        this.HeureMin = 0;
      }
    } 
    else {
      this.HeureMax = new Date().getHours();
      this.HeureMin = 0;
    }

    if (this.NouvelleEnregistrement) this.HeureModifie = this.HeureMax;
    this.DateDebut = annee + "-" + moi + "-" + jour;
  }

  JourPlusUn(){
    if (this.JourModifie < this.JourMax) this.JourModifie++;
  }
  JourMoinUn(){
    if (this.JourModifie > this.JourMin) this.JourModifie--;
  }
  HeurePlusUn(){
    if (this.HeureModifie < this.HeureMax) this.HeureModifie++;
  }
  HeureMoinUn(){
    if (this.HeureModifie > this.HeureMin) this.HeureModifie--;
  }
  //passage a la page suivant. pour l'occasion on efface la liste des migraines pour en faire une nouvelle contenant la novuelle migraine.
  //on en profite pour transformer la date pour qu'elle soit conforme a la structure d'envois 
  private Suivant(){
    
    this.NouvelleMigraine.Debut = this.DateDebut + 'T' + this.JourDebut;
    this.compte.MesMigraines = [];
    this.compte.MesMigraines.push(this.NouvelleMigraine);
    console.log('migraine debut',this.compte.MesMigraines[0]);
    this.compteServiceProvider.changeCompte(this.compte);
    let AffichageFinMigraine = this.modalController.create(QuestionnaireFinMigrainePage);
    AffichageFinMigraine.present();
  }

  
  
  private Annule()
  {
    console.log('Etat de MesMigraine a l\'annulation : ', this.compte.MesMigraines);
    if(this.compte.MesMigraines.length == 1) this.LoginToken();
    
    //let AffichageHome = this.modalController.create(MenuPage);
    //AffichageHome.present();
    this.viewController.dismiss();
  }
  LoginToken()
  {
    this.compteServiceProvider.LoginToken()
    .subscribe(
      (retour) => 
      {
        this.compte = retour as Compte;

        if (this.compte.Erreur == null){
          this.compte.MesMedicaments = (retour as Compte).MesMedicaments as Medicament[];
          this.compte.MesMigraines = (retour as Compte).MesMigraines as Migraine[];
          localStorage.setItem('Token', this.compte.Token);
          localStorage.setItem('Compte', JSON.stringify(this.compte));
          this.compteServiceProvider.changeCompte(this.compte);
          this.compteServiceProvider.AffichageMigraineIncomplete();
          console.log(retour)
        }
      },
      error => console.log(error));
  }
}
