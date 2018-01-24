import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CompteServiceProvider} from '../../providers/compte/compte-service';
import { Compte } from '../../model/compte';
import { Migraine } from '../../model/migraine';
import { Medicament } from '../../model/medicament';
import { Facteur } from '../../model/facteur';
import { MigraineInformationPage } from '../../pages/migraine-information/migraine-information';

/**
 * Generated class for the MigraineHistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-migraine-historique',
  templateUrl: 'migraine-historique.html',
})
export class MigraineHistoriquePage {

  compte : Compte;

  //MesMigraines : Migraine[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider : CompteServiceProvider,
    public ModalController : ModalController) {
  }

  ionViewDidLoad() {
    this.compteServiceProvider.compte.subscribe(resc => this.compte = resc);
    console.log('compte pour affichage migraine', this.compte);
    (this.compte as Compte).MesMigraines as Migraine[];

    if (this.compte.Identifiant == null) this.LoginToken();
    // (this.compte as Compte).MesMigraines = [];
    // (this.compte as Compte).MesMigraines.push(new Migraine());
    
    console.log('mon compte', this.compte);
  }

  VoirMigraine(migraine : Migraine)
  {
    console.log('Etat de MesMigraine dans Historique : ', this.compte.MesMigraines);
    let AffichageMigraine = this.ModalController.create(MigraineInformationPage, {Migraine : migraine});
    AffichageMigraine.present();
  }

  LoginToken()
  {
    console.log('je vais chercher les informations sur coptes sur le webservice');
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
      },
      error => console.log(error));
  }
}
