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

  // Etoile1 : string = "star-outline";
  // Etoile2 : string = "star-outline";
  // Etoile3 : string = "star-outline";
  // Etoile4 : string = "star-outline";
  // Etoile5 : string = "star-outline";
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
    this.nouvelleMigraine.Facteurs as Facteur[];
    console.log('facteurs ',this.nouvelleMigraine.Facteurs);
          this.compte.MesFacteurs.forEach(mesfacteurs => {
              console.log('type de réponse');
              if (mesfacteurs.TypeDeReponse.ID == 1){
                if (mesfacteurs.Reponse == 0){
                  this.EtoileSelection = false;
                }else this.EtoileSelection = true;
                /*this.IntensiteFacteur(mesfacteurs.Reponse);*/
                console.log('la valeur d\'intensité est : ',mesfacteurs.Reponse);
              }
              if (mesfacteurs.TypeDeReponse.ID == 2){
                if (mesfacteurs.Selection == null) mesfacteurs.Selection = false;
              }
            });
        
      // }
      // else{
      //   console.log('liste facteur vide');
      //   this.nouvelleMigraine.Facteurs = [];
      //   this.compte.MesFacteurs.forEach(facteur => facteur.Selection = false); //mettre toute les valeurs à fausse
      // }
    // }
    //console.log('nouvelle migraine',this.nouvelleMigraine);
  }

  Permut(facteur : Facteur){
    if (facteur.Selection) facteur.Reponse = 1;
    else facteur.Reponse = 0;
  }

 /* IntensiteFacteur(valeur : number){
    // console.log(this);
    if (valeur == 0) {this.Etoile1 = "star-outline";this.Etoile2 = "star-outline";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 1) {this.Etoile1 = "star";this.Etoile2 = "star-outline";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 2) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 3) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
    if (valeur == 4) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star-outline";}
    if (valeur == 5) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star";}
  }*/
  




  private Suivant(){
    this.nouvelleMigraine.Facteurs = [];
    this.compte.MesFacteurs.forEach(facteur => 
      {
          let nouveauFacteur : Facteur;
          nouveauFacteur = {"ID":facteur.ID, "Reponse":facteur.Reponse} as Facteur;
          console.log('Facteurcréé' , nouveauFacteur);
          this.nouvelleMigraine.Facteurs.push(nouveauFacteur);
          console.log('Facteurajouté' , this.nouvelleMigraine.Facteurs);
      });
   
    this.compte.MesMigraines[0].Facteurs = this.nouvelleMigraine.Facteurs;
    console.log('migraine facteur',this.compte.MesMigraines[0]);
    console.log('La migraine : ', this.nouvelleMigraine);
    console.log('le compte avec la migraine', this.compte);
    this.compteServiceProvider.changeCompte(this.compte);
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

  changementCouleur(wrap_id : HTMLElement, nbr : number)
  {   
    for( let i = 0; i < nbr; i++ )
    {
      wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star';
    }
    for ( let i = nbr; i < 5; i++ ){
      wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star-outline';
    }
  }
  changementCouleurSelect(wrap_id : HTMLElement, nbr : number)
  {   
    console.log('le nom : ', wrap_id.children[0].getElementsByTagName('ion-icon')[0].className);
    for( let i = 0; i < nbr; i++ )
    {
      wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star';
    }
  }

  etoileEnter(nbr : number, $event : MouseEvent)
  {
    //console.log(event);
    let wrap_id : HTMLElement = document.getElementById(event.path[1].id);
    this.changementCouleur(wrap_id, nbr);

    //let etoileNbr = event.path[0].className;

    //wrap_id.className = 'blockEtoiles ' + etoileNbr;

    //etoileNbr = etoileNbr.split('etoile')[1];

    /*for( let i = 1; i <= etoileNbr; i++ )
    {
      let etoile = document.getElementsByClassName(event.path[2].id + ' etoile' + i );
      etoile.setAttribute('class', 'active');
      console.log(etoile);
    }*/
    
  }
  etoileLeave(nbr : number, $event : MouseEvent)
  {
    let wrap_id : HTMLElement = document.getElementById(event.path[0].id);
    this.changementCouleur(wrap_id, nbr);
  }

  ValidIntensiteFacteur(facteur : Facteur, valeur : number, $event : MouseEvent){
    //console.log(event);
    let wrap_id : HTMLElement = document.getElementById(event.path[2].id);
    console.log('l\'étoile c\'est', wrap_id);
    console.log(this.EtoileSelection);


    if (this.EtoileSelection){
      /*this.IntensiteFacteur(valeur);*/
      this.changementCouleurSelect(wrap_id, valeur);
      this.EtoileSelection = false;
    } 
    else this.EtoileSelection = true;


    
    console.log(this.EtoileSelection);
    facteur.Reponse = valeur;
    facteur.Selection = true;
  }

  // private Fin()
  // {
  //   //effectuer l'envois partiel de la migraine avant de revenir a la page de garde
  //   let AffichageHome = this.modalController.create( MenuPage );
  //   AffichageHome.present();
  // }
}
