import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';

import { MedecinServiceProvider} from '../../providers/medecin/medecin-service';
import { Medecin } from '../../model/medecin';
import { Adresse } from '../../model/adresse';
import { Horaire } from '../../model/horaire';

@IonicPage()
@Component({
  selector: 'page-medecin-information',
  templateUrl: 'medecin-information.html',
})
export class MedecinInformationPage {

  medecin : Medecin = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public medecinServiceProvider : MedecinServiceProvider,
    public viewController: ViewController) {
    
  }

  ionViewDidLoad() {
    // this.medecin = new Medecin();
    // this.medecin.Adresse = new Adresse();
    console.log(this.navParams.get('IDWeb'));
    this.medecinServiceProvider.voirMedecin(this.navParams.get('IDWeb'))
    .subscribe(
      (retour) => 
      {
        this.medecin = retour as Medecin;
        this.medecin.Adresse = (retour as Medecin).Adresse as Adresse;
        this.medecin.HoraireOuverture = (retour as Medecin).HoraireOuverture as Horaire[];
        console.log(this.medecin);
        console.log(this.medecin.Adresse);
      });
      
  }
  Fermer()
  {
    this.viewController.dismiss();
  }

}
