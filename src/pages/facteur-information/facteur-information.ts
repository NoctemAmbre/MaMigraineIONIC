import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { Facteur, TypeFacteur, TypeReponse } from '../../model/facteur';


@IonicPage()
@Component({
  selector: 'page-facteur-information',
  templateUrl: 'facteur-information.html',
})
export class FacteurInformationPage {
  facteur : Facteur;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    this.facteur = new Facteur();
    this.facteur.TypeDeFacteur = new TypeFacteur();
    this.facteur.TypeDeReponse = new TypeReponse();
    
    this.facteur = this.navParams.get('Facteur') as Facteur;
    console.log('facteur a l\'arrivé', this.facteur);
  }

  Fermer()
  {
    this.viewController.dismiss();
  }
}
