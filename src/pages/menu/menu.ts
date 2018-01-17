import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MigraineHistoriquePage } from '../migraine-historique/migraine-historique';
import { MigraineNouvellePage } from '../migraine-nouvelle/migraine-nouvelle';
import { CompteLoginPage } from '../compte-login/compte-login';

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

  nouvelleMigraineRoot = MigraineNouvellePage;
  historiqueRoot = MigraineHistoriquePage;
  connexionRoot = CompteLoginPage;


  constructor(public navCtrl: NavController) {}

}
