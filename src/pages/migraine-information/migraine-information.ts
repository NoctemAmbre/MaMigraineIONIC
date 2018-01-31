import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CompteServiceProvider} from '../../providers/compte/compte-service';
import { QuestionnaireDebutMigrainePage } from '../questionnaire/questionnaire-debut-migraine/questionnaire-debut-migraine';

import { Migraine } from '../../model/migraine';
import { Compte } from '../../model/compte';
import { Medicament } from '../../model/medicament';
import { Facteur } from '../../model/facteur';
import { Date, Heure } from './../../model/date_heure';


@IonicPage()
@Component({
  selector: 'page-migraine-information',
  templateUrl: 'migraine-information.html',
})
export class MigraineInformationPage {

  compte : Compte;
  migraine : Migraine;
  constructor(
    public compteServiceProvider : CompteServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public alertController: AlertController,
    public ModalController : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MigraineInformationPage');
    this.compteServiceProvider.compte.subscribe(resc => this.compte = resc);
    console.log(this.navParams.get('Migraine'));
    this.migraine = this.navParams.get('Migraine') as Migraine;
  }

  VoirMedicament(medicament : Medicament){
        let alert = this.alertController.create();
        alert.setTitle(medicament.DenominationMedicament);
    
        alert.addInput({
          type: 'text',
          value: "Forme Pharmaceutique : " + medicament.FormePharmaceutique
        });
        alert.addInput({
          type: 'text',
          value: "Voies administration : " + medicament.VoiesAdministration
        });
        if (medicament.Titulaire){
          alert.addInput({
            type: 'text',
            value: "Titulaire :" + medicament.Titulaire
          });
        }
        if (medicament.StatutAdministratif){
          alert.addInput({
            type: 'text',
            value: "Statut Administratif :" + medicament.StatutAdministratif
          });
        }
        alert.addButton({
          text: 'Fermer',
        });
      alert.present();
  }

  VoirFacteur(facteur : Facteur){
    let alert = this.alertController.create();
    alert.setTitle(facteur.Nom);
    alert.readReady;
    alert.addInput({
      type: 'text',
      value: "Question : " + facteur.Question
    });
    alert.addInput({
      type: 'text',
      value: "Réponse : " + facteur.Reponse
    });
    alert.addInput({
      type: 'text',
      value: "Type De Facteur : " + facteur.TypeDeFacteur.Type
    });
    alert.addInput({
      type: 'text',
      value: "Type De Reponse :" + facteur.TypeDeReponse.Type
    });
    alert.addInput({
      type: 'text',
      value: "Information :" + facteur.TypeDeReponse.Information
    });
   
    alert.addButton({
      text: 'Fermer',
    });
  alert.present();
}

  Fermer(){
    this.viewController.dismiss();
  }
  Modifier(){
    console.log('Modifier()');
     //let compte : Compte;
     //this.compteServiceProvider.compte.subscribe(res => compte = res);
     //compte.MesMigraines = [];
     //compte.MesMigraines.push(this.migraine);
     let modifMigraine = this.ModalController.create(QuestionnaireDebutMigrainePage, {Migraine : this.migraine});
     modifMigraine.present();
  }
  supprimer(){
      let alert = this.alertController.create({
      title: 'Suppression Migraine',
      message: 'Vous voulez supprimer la migraine ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.compte.MesMigraines = [];

            let MigrainEnvois : Migraine = new Migraine();
            MigrainEnvois.ID = this.migraine.ID;
            this.compte.MesMigraines = [];
            this.compte.MesMigraines.push(MigrainEnvois);
            this.compteServiceProvider.supprimerMigraine().subscribe((retour) => {
              this.compte = retour as Compte;
              this.compte.MesMedicaments = (retour as Compte).MesMedicaments as Medicament[];
              this.compte.MesMigraines = (retour as Compte).MesMigraines as Migraine[];
              localStorage.setItem('Token', this.compte.Token);
              localStorage.setItem('Compte', JSON.stringify(this.compte));
              this.compteServiceProvider.changeCompte(this.compte);
              this.compteServiceProvider.AffichageMigraineIncomplete();
              this.viewController.dismiss();
            })
          }
        }
      ]
    });
    alert.present();
  }
}
