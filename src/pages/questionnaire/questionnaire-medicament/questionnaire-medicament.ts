import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { CompteServiceProvider} from '../../../providers/compte/compte-service';

import { QuestionnaireFacteurPage } from '../../../pages/questionnaire/questionnaire-facteur/questionnaire-facteur';
import {  MenuPage } from '../../../pages/menu/menu';

import { Compte } from '../../../model/compte';
import { Medicament } from '../../../model/medicament';
import { Migraine } from '../../../model/migraine';

/**
 * Generated class for the QuestionnaireMedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-medicament',
  templateUrl: 'questionnaire-medicament.html',
})
export class QuestionnaireMedicamentPage {

  compte : Compte;
  nouvelleMigraine : Migraine;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider : CompteServiceProvider,
    public viewController: ViewController,
    public modalController : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireMedicamentPage');
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    this.nouvelleMigraine = this.compte.MesMigraines[0] as Migraine;
    if (this.nouvelleMigraine.MedicamentsPris != null)   {
      this.nouvelleMigraine.MedicamentsPris.forEach(medicament =>       {
        this.compte.MesMedicaments.forEach(medocOrdonance =>   {
            if (medicament.DenominationMedicament == medocOrdonance.DenominationMedicament) {
              medocOrdonance.Selection = true;
            }
        });
      });
    }
    
  
    console.log(this.compte);
  }

  private Suivant(){

    this.nouvelleMigraine.MedicamentsPris = [];
    this.compte.MesMedicaments.forEach(medicament => 
    {
      if (medicament.Selection)
      {
        let nouveauMedicament : Medicament = new Medicament();
        nouveauMedicament.ID = medicament.ID;
        nouveauMedicament.Quantite = 1;
        this.nouvelleMigraine.MedicamentsPris.push(nouveauMedicament);
      }
    });
    this.compte.MesMigraines[0] = this.nouvelleMigraine;
    this.compteServiceProvider.changeCompte(this.compte);
    let AffichageFacteur = this.modalController.create( QuestionnaireFacteurPage );
    AffichageFacteur.present();
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


  // private Fin()
  // {
  //   //effectuer l'envois partiel de la migraine avant de revenir a la page de garde
  //   let AffichageHome = this.modalController.create( MenuPage );
  //   AffichageHome.present();
  // }

}
