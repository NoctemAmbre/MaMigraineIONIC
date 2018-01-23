import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { CompteServiceProvider} from '../../../providers/compte/compte-service';

import {  MenuPage } from '../../../pages/menu/menu';

import { Compte } from '../../../model/compte';
import { Medicament } from '../../../model/medicament';
import { Migraine } from '../../../model/migraine';
import { Date, Heure } from './../../../model/date_heure';
import { Facteur, TypeFacteur, TypeReponse } from '../../../model/facteur';
/**
 * Generated class for the QuestionnaireFacteurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-facteur',
  templateUrl: 'questionnaire-facteur.html',
})
export class QuestionnaireFacteurPage {

  compte : Compte;
  nouvelleMigraine : Migraine;

  Etoile1 : string = "star-outline";
  Etoile2 : string = "star-outline";
  Etoile3 : string = "star-outline";
  Etoile4 : string = "star-outline";
  Etoile5 : string = "star-outline";
  EtoileSelection : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider : CompteServiceProvider,
    public viewController: ViewController,
    public modalController : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireFacteurPage');
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    this.nouvelleMigraine = this.compte.MesMigraines[0] as Migraine;

    console.log('facteurs ',this.nouvelleMigraine.Facteurs);
    if (this.nouvelleMigraine.Facteurs != null){
      if (this.nouvelleMigraine.Facteurs.length > 0){
        this.nouvelleMigraine.Facteurs.forEach(facteur => {
          this.compte.MesFacteurs.forEach(mesfacteurs => {
            if (facteur.ID = mesfacteurs.ID){
              console.log('type de réponse');
              if (facteur.TypeDeReponse.ID == 2){
                mesfacteurs.Selection = true;
                console.log('la sélection est : ',mesfacteurs.Selection);
              }
              if (facteur.TypeDeReponse.ID == 1){
                mesfacteurs.Reponse = facteur.Reponse;
                this.IntensiteFacteur(facteur.Reponse);
                console.log('la valeur d\'intensité est : ',mesfacteurs.Reponse);
              }
            } 
          });
        });
      }
      else{
        console.log('liste facteur vide');
        this.nouvelleMigraine.Facteurs = [];
        this.compte.MesFacteurs.forEach(facteur => facteur.Selection = false); //mettre toute les valeurs à fausse
      }
    }
    //console.log('nouvelle migraine',this.nouvelleMigraine);
  }

  Permut(facteur : Facteur){
    if (facteur.Selection) facteur.Reponse = 1;
    else facteur.Reponse = 0;
  }

  IntensiteFacteur(valeur : number){
    //console.log(valeur);
    if (valeur == 1) {this.Etoile1 = "star";this.Etoile2 = "star-outline";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 2) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 3) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 4) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star-outline";}
    if (valeur == 5) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star";}
  }

  ValidIntensiteFacteur(facteur : Facteur, valeur : number){
    if (this.EtoileSelection) this.IntensiteFacteur(valeur);
    //this.EtoileSelection == false ? true : false;
    if (this.EtoileSelection) this.EtoileSelection = false;
    else this.EtoileSelection = true;
    console.log(this.EtoileSelection);
    facteur.Reponse = valeur;
    facteur.Selection = true;
  }


  private Suivant(){
    this.nouvelleMigraine.Facteurs = [];
    this.compte.MesFacteurs.forEach(facteur => 
      {
        if (facteur.Selection)
        {
          let nouveauFacteur : Facteur = new Facteur();
          nouveauFacteur.TypeDeFacteur = facteur.TypeDeFacteur;
          nouveauFacteur.TypeDeReponse = facteur.TypeDeReponse;
          nouveauFacteur.ID = facteur.ID;
          nouveauFacteur.Reponse = facteur.Reponse;
          console.log(nouveauFacteur);
          this.nouvelleMigraine.Facteurs.push(nouveauFacteur);
        }
      });
    let MigrainEnvois : Migraine = new Migraine();
    MigrainEnvois.ID = this.nouvelleMigraine.ID;
    MigrainEnvois.Complet = true;
    MigrainEnvois.Debut = this.nouvelleMigraine.Debut;
    MigrainEnvois.Fin = this.nouvelleMigraine.Fin;

    MigrainEnvois.DateDebut as Date;
    MigrainEnvois.DateFin as Date;
    MigrainEnvois.HeureDebut as Heure;
    MigrainEnvois.HeureFin as Heure;

    MigrainEnvois.DateDebut = this.nouvelleMigraine.DateDebut;
    MigrainEnvois.DateFin = this.nouvelleMigraine.DateFin;
    MigrainEnvois.HeureDebut = this.nouvelleMigraine.HeureDebut;
    MigrainEnvois.HeureFin = this.nouvelleMigraine.HeureFin;

    MigrainEnvois.Intensite = this.nouvelleMigraine.Intensite;
    MigrainEnvois.MedicamentsPris = this.nouvelleMigraine.MedicamentsPris;
    MigrainEnvois.Facteurs = this.nouvelleMigraine.Facteurs;
      
    //this.compte.MesMigraines = [];
    //this.compte.MesMigraines.push(MigrainEnvois);
    this.compteServiceProvider.AjouterMigraine(MigrainEnvois)
      .subscribe(
        (retour) => 
        {
         console.log('le retour du compte', retour);
         if ((retour as Compte).Erreur == null){
           this.compte = retour as Compte;
           localStorage.setItem('Token', this.compte.Token);
           localStorage.setItem('Compte', JSON.stringify(this.compte));
           this.compteServiceProvider.changeCompte(this.compte);
           this.compteServiceProvider.AffichageMigraineIncomplete();
           console.log(retour)
           let AffichageHome = this.modalController.create( MenuPage );
           AffichageHome.present();
         }
         else {
           localStorage.removeItem('Token');
           localStorage.removeItem('Compte');
           console.log("quelquechose s'est mal passé");
         }
        },
        error => console.log(error));
  }

  private Annule()
  {
    this.viewController.dismiss();
  }

  private Fin(){
    this.compte.MesMigraines = [];
    this.compte.MesMigraines.push(this.nouvelleMigraine);
    this.compteServiceProvider.changeCompte(this.compte);
    this.compteServiceProvider.AjouterMigraineIncomplet()
      .subscribe(
        (retour) => 
        {
         console.log('le retour du compte', retour);
         if ((retour as Compte).Erreur == null){
           this.compte = retour as Compte;
           localStorage.setItem('Token', this.compte.Token);
           localStorage.setItem('Compte', JSON.stringify(this.compte));
           this.compteServiceProvider.changeCompte(this.compte);
           console.log(retour)
           let AffichageHome = this.modalController.create( MenuPage );
           AffichageHome.present();
         }
         else {
           localStorage.removeItem('Token');
           localStorage.removeItem('Compte');
           console.log("quelquechose s'est mal passé");
         }
        },
        error => console.log(error));
  }

  // private Fin()
  // {
  //   //effectuer l'envois partiel de la migraine avant de revenir a la page de garde
  //   let AffichageHome = this.modalController.create( MenuPage );
  //   AffichageHome.present();
  // }
}
