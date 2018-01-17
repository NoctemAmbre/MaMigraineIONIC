import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
//import { Platform } from 'ionic-angular';
import { CompteLoginPage } from '../compte-login/compte-login';
import { CompteServiceProvider} from '../../providers/compte/compte-service';

// import { CompteLoginComponent } from '../../components/compte-login/compte-login';
// import { QuestionReponseComponent } from '../../components/question-reponse/question-reponse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  isAndroid: boolean = false;

//   countries: any;
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public compteServiceprovider : CompteServiceProvider,
    public storage: Storage) {
  }

  lecturepage()
  {
    this.storage.remove('Token');
    //console.log('test');
    this.storage.get('Token').then((val) => {
      if (val == null){
        let modal = this.modalCtrl.create(CompteLoginPage);
        modal.present();
      }
      else  {
        console.log(val);
      }
    }).catch((val)=> console.log('erreur', val));


  }
  ionViewDidLoad() {
    //this.getCountries();
  }

  // getCountries() {
  //   this.compteServiceprovider.getCountries()
  //      .subscribe(
  //        countries => this.countries = countries,
  //        error =>  this.errorMessage = <any>error);
  // }
}