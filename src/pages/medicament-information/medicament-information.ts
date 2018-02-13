import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { Medicament } from '../../model/medicament';

@IonicPage()
@Component({
  selector: 'page-medicament-information',
  templateUrl: 'medicament-information.html',
})
export class MedicamentInformationPage {

  medicament : Medicament = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentInformationPage');
    console.log(this.navParams.get('Medicament'));
    this.medicament = this.navParams.get('Medicament') as Medicament;
  }
  Fermer()
  {
    this.viewController.dismiss();
  }

}
