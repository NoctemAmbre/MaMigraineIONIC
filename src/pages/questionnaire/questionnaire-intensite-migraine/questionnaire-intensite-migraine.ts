import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CompteServiceProvider } from '../../../providers/compte/compte-service';

import { QuestionnaireMedicamentPage } from '../../../pages/questionnaire/questionnaire-medicament/questionnaire-medicament';

import { MenuPage } from '../../../pages/menu/menu';

import { Compte } from '../../../model/compte';
import { Migraine } from '../../../model/migraine';

/**
 * Generated class for the QuestionnaireIntensiteMigrainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-intensite-migraine',
  templateUrl: 'questionnaire-intensite-migraine.html',
})
export class QuestionnaireIntensiteMigrainePage {
  compte: Compte;
  nouvelleMigraine: Migraine;
  InfoMigraine: string = "C'est une migraine";
  EtoileSelection: boolean = false;

  Etoile1: string = "star-outline";
  Etoile2: string = "star-outline";
  Etoile3: string = "star-outline";
  Etoile4: string = "star-outline";
  Etoile5: string = "star-outline";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public compteServiceProvider: CompteServiceProvider,
    public viewController: ViewController,
    public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireIntensiteMigrainePage');
    this.compteServiceProvider.compte.subscribe(res => this.compte = res);
    this.nouvelleMigraine = this.compte.MesMigraines[0] as Migraine;

    if (this.nouvelleMigraine.Intensite > 0) {
      console.log('l\'intenisté de la migraine est de : ', this.nouvelleMigraine.Intensite);
      this.EtoileSelection = true;
      this.Intensite(this.nouvelleMigraine.Intensite);
    }
  }

  Intensite(valeur: number) {
    //console.log(valeur);
    if (valeur == 1) {
    this.Etoile1 = "star"; this.Etoile2 = "star-outline"; this.Etoile3 = "star-outline"; this.Etoile4 = "star-outline"; this.Etoile5 = "star-outline";
      this.InfoMigraine = "c'est une migraine 1 étoile : At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium Romam. Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet, rei";
    }
    if (valeur == 2) {
    this.Etoile1 = "star"; this.Etoile2 = "star"; this.Etoile3 = "star-outline"; this.Etoile4 = "star-outline"; this.Etoile5 = "star-outline";
      this.InfoMigraine = "c'est une migraine 2 étoiles";
    }
    if (valeur == 3) {
    this.Etoile1 = "star"; this.Etoile2 = "star"; this.Etoile3 = "star"; this.Etoile4 = "star-outline"; this.Etoile5 = "star-outline";
      this.InfoMigraine = "c'est une migraine 3 étoiles";
    }
    if (valeur == 4) {
    this.Etoile1 = "star"; this.Etoile2 = "star"; this.Etoile3 = "star"; this.Etoile4 = "star"; this.Etoile5 = "star-outline";
      this.InfoMigraine = "c'est une migraine 4 étoiles";
    }
    if (valeur == 5) {
    this.Etoile1 = "star"; this.Etoile2 = "star"; this.Etoile3 = "star"; this.Etoile4 = "star"; this.Etoile5 = "star";
      this.InfoMigraine = "c'est une migraine 5 étoiles";
    }
  }

  ValidIntensite(valeur: number) {
    //this.EtoileSelection == false ? true : false;
    if (!this.EtoileSelection) {
      this.Intensite(valeur);
      this.nouvelleMigraine.Intensite = valeur;
      this.EtoileSelection = true;
      console.log('enregistement intensité : ', this.nouvelleMigraine.Intensite);
    }
    else {
      this.EtoileSelection = false;
      console.log('enregistement intensité : ', this.nouvelleMigraine.Intensite);
    }

  }

  private Suivant() {
    this.compte.MesMigraines[0].Intensite = this.nouvelleMigraine.Intensite;
    console.log('migraine intensité', this.compte.MesMigraines[0]);
    this.compteServiceProvider.changeCompte(this.compte);
    let AffichageMedicament = this.modalController.create(QuestionnaireMedicamentPage);
    AffichageMedicament.present();
  }

  private Annule() {
    this.viewController.dismiss();
  }

  private Fin() {
    this.compte.MesMigraines = [];
    this.compte.MesMigraines.push(this.nouvelleMigraine);
    this.compteServiceProvider.changeCompte(this.compte);
    this.compteServiceProvider.AjouterMigraineIncomplet()
      .subscribe(
      (retour) => {
        console.log('le retour du compte', retour);
        if ((retour as Compte).Erreur == null) {
          this.compte = retour as Compte;
          localStorage.setItem('Token', this.compte.Token);
          localStorage.setItem('Compte', JSON.stringify(this.compte));
          this.compteServiceProvider.changeCompte(this.compte);
          this.compteServiceProvider.AffichageMigraineIncomplete();
          console.log(retour)
          let AffichageHome = this.modalController.create(MenuPage);
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
