import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MigraineHistoriquePage } from '../migraine-historique/migraine-historique';
import { MigraineNouvellePage } from '../migraine-nouvelle/migraine-nouvelle';
import { CompteLoginPage } from '../compte-login/compte-login';

import { CompteServiceProvider} from '../../providers/compte/compte-service';

import { Compte } from '../../model/compte';
import { Migraine } from '../../model/migraine';


/**
 * Generated class for the MenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  incomplet : number;

  nouvelleMigraineRoot = MigraineNouvellePage;
  historiqueRoot = MigraineHistoriquePage;
  connexionRoot = CompteLoginPage;


  constructor(
    public navCtrl: NavController,
    public compteServiceProvider : CompteServiceProvider) {
      this.compteServiceProvider.incomplet.subscribe(res => this.incomplet = res);
    }

}
