import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { CompteServiceProvider} from '../../providers/compte/compte-service';
import { Compte } from '../../model/compte';
import { Migraine } from '../../model/migraine';
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

  MesMigraines : Migraine[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider : CompteServiceProvider,
    public ModalController : ModalController) {
  }

  ionViewDidLoad() {
    this.compteServiceProvider.compte.subscribe(resc => this.compte = resc);
    console.log('compte pour affichage migraine', this.compte);
    this.MesMigraines = (this.compte as Compte).MesMigraines as Migraine[];
    
    console.log('migraine', this.compte.MesMigraines);
  }

  VoirMigraine(migraine : Migraine)
  {
    let AffichageMigraine = this.ModalController.create(MigraineInformationPage, {Migraine : migraine});
    AffichageMigraine.present();
  }
}
