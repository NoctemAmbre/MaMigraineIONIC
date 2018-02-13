import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CompteServiceProvider} from '../../providers/compte/compte-service';
import { Compte } from '../../model/compte';

import { QuestionnaireDebutMigrainePage } from '../questionnaire/questionnaire-debut-migraine/questionnaire-debut-migraine';
import { Medicament } from '../../model/medicament';
import { Migraine } from '../../model/migraine';

/*séquence : 
1) Nouvelle migraine (bouton)
2) Quand a commencé votre migraine ? 
  {
    Time picker avec bouton aujourd'hui
    Date picker avec bouton maintenent
    réglette avec curseur "Il y a x heures"
  }
3) Quand c'est terminé votre migraine ? 
{
    Bouton "migraine toujours en cour"
    Time picker avec bouton aujourd'hui
    Date picker avec bouton maintenent
    réglette avec curseur "Il y a x heures"
  }
4) De quel force était cette migraine (De 1 à 5 Etoiles)
5) Avez vous pris des médicaments ? (oui/non)
6) quel sont les médicaments que vous avez pris ?
{
    Coche binaire médicament 1
}
7) Question facteur 1 type de réponse en rapport au facteur.


*/

@IonicPage()
@Component({
  selector: 'page-migraine-nouvelle',
  templateUrl: 'migraine-nouvelle.html',
})
export class MigraineNouvellePage {
  compte : Compte;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider : CompteServiceProvider,
    public storage : Storage,
    public ModalController : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MigraineNouvellePage');
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
  }
  NouvelleMigraine(){
    if (localStorage.getItem('Token') == "null")
    {
      //envoyer sur page de connexion
      console.log("envoyer sur page de connexion car la token est null");
    }
    if (localStorage.getItem('Compte') == null)
    {
      //envoyer un message
      localStorage.setItem('Token', "");
      
    }else{
      console.log('DAns quel état est le compte', this.compte);
      if (this.compte.Identifiant == null) this.LoginToken();
      else {
        let AffichageQuestionnaire = this.ModalController.create(QuestionnaireDebutMigrainePage);
        AffichageQuestionnaire.present();
      }
    }
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
        console.log(retour);
        let AffichageQuestionnaire = this.ModalController.create(QuestionnaireDebutMigrainePage);
        AffichageQuestionnaire.present();
      },
      error => console.log(error));
  }
}
