import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { CompteServiceProvider} from '../../../providers/compte/compte-service';

import {  MenuPage } from '../../../pages/menu/menu';

import { Compte } from '../../../model/compte';
import { Medicament } from '../../../model/medicament';
import { Migraine } from '../../../model/migraine';
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
    this.nouvelleMigraine.Facteurs = [];
    this.compte.MesFacteurs.forEach(facteur => facteur.Selection = false); //mettre toute les valeurs à fausse
    
    
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
          // nouveauFacteur.TypeDeFacteur = new TypeFacteur();
          // nouveauFacteur.TypeDeReponse = new TypeReponse();
          nouveauFacteur.ID = facteur.ID;
          nouveauFacteur.Reponse = facteur.Reponse;
          console.log(nouveauFacteur);
          this.nouvelleMigraine.Facteurs.push(nouveauFacteur);
        }
      });
    this.compte.MesMigraines[0] = this.nouvelleMigraine;
    this.compteServiceProvider.AjouterMigraine()
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

  private Annule()
  {
    this.viewController.dismiss();
  }

  private Fin()
  {
    //effectuer l'envois partiel de la migraine avant de revenir a la page de garde
    let AffichageHome = this.modalController.create( MenuPage );
    AffichageHome.present();
  }
}
