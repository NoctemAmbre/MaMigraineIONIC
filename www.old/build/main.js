webpackJsonp([16],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedecinInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medecin_medecin_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage';

var MedecinInformationPage = (function () {
    function MedecinInformationPage(navCtrl, navParams, medecinServiceProvider, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medecinServiceProvider = medecinServiceProvider;
        this.viewController = viewController;
        this.medecin = null;
    }
    MedecinInformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.medecin = new Medecin();
        // this.medecin.Adresse = new Adresse();
        console.log(this.navParams.get('IDWeb'));
        this.medecinServiceProvider.voirMedecin(this.navParams.get('IDWeb'))
            .subscribe(function (retour) {
            _this.medecin = retour;
            _this.medecin.Adresse = retour.Adresse;
            _this.medecin.HoraireOuverture = retour.HoraireOuverture;
            console.log(_this.medecin);
            console.log(_this.medecin.Adresse);
        });
    };
    MedecinInformationPage.prototype.Fermer = function () {
        this.viewController.dismiss();
    };
    MedecinInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medecin-information',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\medecin-information\medecin-information.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="medecin != null">{{medecin.Nom}} {{medecin.Prenom}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding classe="Medecin">\n <div *ngIf="medecin != null">\n     <ion-grid>\n      <ion-row>\n\n          <ion-list>\n            <ion-label>\n              <strong>Nom : </strong> {{medecin.Nom}}\n            </ion-label>\n            <ion-label>\n              <strong>Prenom : </strong> {{medecin.Prenom}}\n            </ion-label>\n            <ion-label>\n              <strong>Adresse : </strong>\n              <div>\n                {{medecin.Adresse.Numero}} {{medecin.Adresse.NomRue}}\n              </div>\n              <div>\n                {{medecin.Adresse.CodePostal}} {{medecin.Adresse.Ville}}\n              </div>\n            </ion-label>\n            <ion-label>\n              <strong>Horaire d\'ouverture : </strong>\n              <div *ngFor="let horaire of medecin.HoraireOuverture">\n                <div>{{horaire.Jour}} : de {{horaire.Matin}} à {{horaire.Soir}}</div>\n              </div>\n            </ion-label>\n          </ion-list>\n\n      </ion-row>\n    </ion-grid>\n    <button ion-button color="primary" (click)="Fermer()" block>Retour</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\medecin-information\medecin-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_medecin_medecin_service__["a" /* MedecinServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MedecinInformationPage);
    return MedecinInformationPage;
}());

//# sourceMappingURL=medecin-information.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicamentInformationPage = (function () {
    function MedicamentInformationPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.medicament = null;
    }
    MedicamentInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicamentInformationPage');
        console.log(this.navParams.get('Medicament'));
        this.medicament = this.navParams.get('Medicament');
    };
    MedicamentInformationPage.prototype.Fermer = function () {
        this.viewController.dismiss();
    };
    MedicamentInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicament-information',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\medicament-information\medicament-information.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title *ngIf="medicament != null">{{medicament.DenominationMedicament}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="medicament != null">\n      <ion-grid>\n        <ion-row>\n          <ion-list>\n            <ion-label>\n              <strong>Dénomination : </strong> {{medicament.DenominationMedicament}}\n            </ion-label>\n            <ion-label>\n              <strong>Forme : </strong> {{medicament.FormePharmaceutique}}\n            </ion-label>\n            <ion-label>\n              <strong>Voies d\'administration : </strong> {{medicament.VoiesAdministration}}\n            </ion-label>\n          </ion-list>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <button ion-button color="primary" (click)="Fermer()" block>Retour</button>\n</ion-content>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\medicament-information\medicament-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MedicamentInformationPage);
    return MedicamentInformationPage;
}());

//# sourceMappingURL=medicament-information.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacteurInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_facteur__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage';

var FacteurInformationPage = (function () {
    function FacteurInformationPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
    }
    FacteurInformationPage.prototype.ionViewDidLoad = function () {
        this.facteur = new __WEBPACK_IMPORTED_MODULE_2__model_facteur__["a" /* Facteur */]();
        this.facteur.TypeDeFacteur = new __WEBPACK_IMPORTED_MODULE_2__model_facteur__["b" /* TypeFacteur */]();
        this.facteur.TypeDeReponse = new __WEBPACK_IMPORTED_MODULE_2__model_facteur__["c" /* TypeReponse */]();
        this.facteur = this.navParams.get('Facteur');
        console.log('facteur a l\'arrivé', this.facteur);
    };
    FacteurInformationPage.prototype.Fermer = function () {
        this.viewController.dismiss();
    };
    FacteurInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facteur-information',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\facteur-information\facteur-information.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="facteur != null">{{facteur.Nom}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <div *ngIf="facteur != null">\n        <ion-grid>\n          <ion-row>\n            <ion-list>\n              <ion-label>\n                <strong>Nom : </strong> {{facteur.Nom}}\n              </ion-label>\n              <ion-label>\n                <strong>Question : </strong> {{facteur.Question}}\n              </ion-label>\n              <ion-label>\n                <strong>Type De Facteur : </strong> {{facteur.TypeDeFacteur.Type}}\n              </ion-label>\n              <ion-label>\n                <strong>Type De Reponse : </strong> {{facteur.TypeDeReponse.Type}}\n              </ion-label>\n              <ion-label>\n                  <strong>Information : </strong> {{facteur.TypeDeReponse.Information}}\n                </ion-label>\n            </ion-list>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <button ion-button color="primary" (click)="Fermer()" block>Retour</button>\n  </ion-content>\n  '/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\facteur-information\facteur-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], FacteurInformationPage);
    return FacteurInformationPage;
}());

//# sourceMappingURL=facteur-information.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MigraineHistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_migraine_information_migraine_information__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component, Directive } from '@angular/core';



//import { Facteur } from '../../model/facteur';

//import { MigraineHistoriqueDirective } from '../../directives/migraine-historique/migraine-historique';
var MigraineHistoriquePage = (function () {
    //MesMigraines : Migraine[] = [];
    function MigraineHistoriquePage(navCtrl, navParams, compteServiceProvider, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.ModalController = ModalController;
    }
    MigraineHistoriquePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.compteServiceProvider.compte.subscribe(function (resc) { return _this.compte = resc; });
        console.log('compte pour affichage migraine', this.compte);
        this.compte.MesMigraines;
        if (this.compte.Identifiant == null)
            this.LoginToken();
        // (this.compte as Compte).MesMigraines = [];
        // (this.compte as Compte).MesMigraines.push(new Migraine());
        console.log('mon compte', this.compte);
    };
    MigraineHistoriquePage.prototype.VoirMigraine = function (migraine) {
        console.log('Etat de MesMigraine dans Historique : ', this.compte.MesMigraines);
        var AffichageMigraine = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_migraine_information_migraine_information__["a" /* MigraineInformationPage */], { Migraine: migraine });
        AffichageMigraine.present();
    };
    MigraineHistoriquePage.prototype.LoginToken = function () {
        var _this = this;
        console.log('je vais chercher les informations sur coptes sur le webservice');
        this.compteServiceProvider.LoginToken()
            .subscribe(function (retour) {
            _this.compte = retour;
            _this.compte.MesMedicaments = retour.MesMedicaments;
            _this.compte.MesMigraines = retour.MesMigraines;
            localStorage.setItem('Token', _this.compte.Token);
            localStorage.setItem('Compte', JSON.stringify(_this.compte));
            _this.compteServiceProvider.changeCompte(_this.compte);
        }, function (error) { return console.log(error); });
    };
    MigraineHistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-migraine-historique',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-historique\migraine-historique.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Historique</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="compte" >\n    <div class="contenaire" *ngFor="let Migraine of compte.MesMigraines">\n        <button class="historiqueComplet" *ngIf="Migraine.Complet" (click)="VoirMigraine(Migraine)" style="border-color: white">\n            <!-- <div class="DateDebut">Du {{Migraine.DateDebut.day}}/{{Migraine.DateDebut.month}}/{{Migraine.DateDebut.year}} à {{Migraine.HeureDebut.hour}} heure {{Migraine.HeureDebut.minute}}</div> -->\n            <div class="DateDebut">Du {{Migraine.DebutPresentation}}</div>\n            <div class="DateFin">Au {{Migraine.FinPresentation}} </div>\n            <div class="Duree">Durée : {{Migraine.Duree}} heure</div>\n            <div class="Intensite">Intensité :\n              <ion-icon *ngIf="Migraine.Intensite > 0" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 1" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 2" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 3" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 4" name="ios-star" item-start></ion-icon>\n            </div>\n        </button>\n        <button class="historiqueIncomplet" *ngIf="Migraine.Complet == false"  (click)="VoirMigraine(Migraine)" style="border-color: red">\n            <div class="DateDebut">Du {{Migraine.DateDebut.day}}/{{Migraine.DateDebut.month}}/{{Migraine.DateDebut.year}} à {{Migraine.HeureDebut.hour}} heure {{Migraine.HeureDebut.minute}}</div>\n            <div class="DateFin">Au {{Migraine.DateFin.day}}/{{Migraine.DateFin.month}}/{{Migraine.DateFin.year}} à {{Migraine.HeureFin.hour}} heure {{Migraine.HeureFin.minute}}</div>\n            <div class="Duree">Durée : {{Migraine.Duree}} heure</div>\n            <div class="Intensite">Intensité :\n              <ion-icon *ngIf="Migraine.Intensite > 0" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 1" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 2" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 3" name="ios-star" item-start></ion-icon>\n              <ion-icon *ngIf="Migraine.Intensite > 4" name="ios-star" item-start></ion-icon>\n            </div>\n        </button>\n    </div>\n  </div>\n  <!-- <div>\n      <input type="radio" name="colors" (click)="color=\'lightgreen\'">Green\n      <input type="radio" name="colors" (click)="color=\'yellow\'">Yellow\n      <input type="radio" name="colors" (click)="color=\'cyan\'">Cyan\n    </div>\n  <p [migraine-historique]="color" defaultColor="violet">Highlight me!</p> -->\n  <!-- <button ion-grid class="historique" migraine-historique *ngFor="let Migraine of MesMigraines" (click)="VoirMigraine(Migraine)">\n    <div *ngIf="Migraine.Complet">\n    </div>\n    <div class="DateDebut">Du {{Migraine.DateDebut.day}}/{{Migraine.DateDebut.month}}/{{Migraine.DateDebut.year}} à {{Migraine.HeureDebut.hour}} : {{Migraine.HeureDebut.minute}}</div>\n    <div class="DateFin">Au {{Migraine.DateFin.day}}/{{Migraine.DateFin.month}}/{{Migraine.DateFin.year}} à {{Migraine.HeureFin.hour}} : {{Migraine.HeureFin.minute}}</div>\n    <div class="Duree">Durée : {{Migraine.Duree}} heure</div>\n    <div class="Intensite">Intensité :\n      <ion-icon *ngIf="Migraine.Intensite > 0" name="ios-star" item-start></ion-icon>\n      <ion-icon *ngIf="Migraine.Intensite > 1" name="ios-star" item-start></ion-icon>\n      <ion-icon *ngIf="Migraine.Intensite > 2" name="ios-star" item-start></ion-icon>\n      <ion-icon *ngIf="Migraine.Intensite > 3" name="ios-star" item-start></ion-icon>\n      <ion-icon *ngIf="Migraine.Intensite > 4" name="ios-star" item-start></ion-icon>\n    </div>\n  </button> -->\n</ion-content>'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-historique\migraine-historique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MigraineHistoriquePage);
    return MigraineHistoriquePage;
}());

//# sourceMappingURL=migraine-historique.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MigraineInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_migraine__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage';



//import { Date, Heure } from './../../model/date_heure';
var MigraineInformationPage = (function () {
    function MigraineInformationPage(compteServiceProvider, navCtrl, navParams, viewController, alertController, ModalController) {
        this.compteServiceProvider = compteServiceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.alertController = alertController;
        this.ModalController = ModalController;
    }
    MigraineInformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MigraineInformationPage');
        this.compteServiceProvider.compte.subscribe(function (resc) { return _this.compte = resc; });
        console.log(this.navParams.get('Migraine'));
        this.migraine = this.navParams.get('Migraine');
    };
    MigraineInformationPage.prototype.VoirMedicament = function (medicament) {
        var alert = this.alertController.create();
        alert.setTitle(medicament.DenominationMedicament);
        alert.addInput({
            type: 'text',
            value: "Forme Pharmaceutique : " + medicament.FormePharmaceutique
        });
        alert.addInput({
            type: 'text',
            value: "Voies administration : " + medicament.VoiesAdministration
        });
        if (medicament.Titulaire) {
            alert.addInput({
                type: 'text',
                value: "Titulaire :" + medicament.Titulaire
            });
        }
        if (medicament.StatutAdministratif) {
            alert.addInput({
                type: 'text',
                value: "Statut Administratif :" + medicament.StatutAdministratif
            });
        }
        alert.addButton({
            text: 'Fermer',
        });
        alert.present();
    };
    MigraineInformationPage.prototype.VoirFacteur = function (facteur) {
        var alert = this.alertController.create();
        alert.setTitle(facteur.Nom);
        alert.readReady;
        alert.addInput({
            type: 'text',
            value: "Question : " + facteur.Question
        });
        alert.addInput({
            type: 'text',
            value: "Réponse : " + facteur.Reponse
        });
        alert.addInput({
            type: 'text',
            value: "Type De Facteur : " + facteur.TypeDeFacteur.Type
        });
        alert.addInput({
            type: 'text',
            value: "Type De Reponse :" + facteur.TypeDeReponse.Type
        });
        alert.addInput({
            type: 'text',
            value: "Information :" + facteur.TypeDeReponse.Information
        });
        alert.addButton({
            text: 'Fermer',
        });
        alert.present();
    };
    MigraineInformationPage.prototype.Fermer = function () {
        this.viewController.dismiss();
    };
    MigraineInformationPage.prototype.Modifier = function () {
        console.log('Modifier()');
        //let compte : Compte;
        //this.compteServiceProvider.compte.subscribe(res => compte = res);
        //compte.MesMigraines = [];
        //compte.MesMigraines.push(this.migraine);
        var modifMigraine = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_3__questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__["a" /* QuestionnaireDebutMigrainePage */], { Migraine: this.migraine });
        modifMigraine.present();
    };
    MigraineInformationPage.prototype.supprimer = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Suppression Migraine',
            message: 'Vous voulez supprimer la migraine ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        _this.compte.MesMigraines = [];
                        var MigrainEnvois = new __WEBPACK_IMPORTED_MODULE_4__model_migraine__["a" /* Migraine */]();
                        MigrainEnvois.ID = _this.migraine.ID;
                        _this.compte.MesMigraines = [];
                        _this.compte.MesMigraines.push(MigrainEnvois);
                        _this.compteServiceProvider.supprimerMigraine().subscribe(function (retour) {
                            _this.compte = retour;
                            _this.compte.MesMedicaments = retour.MesMedicaments;
                            _this.compte.MesMigraines = retour.MesMigraines;
                            localStorage.setItem('Token', _this.compte.Token);
                            localStorage.setItem('Compte', JSON.stringify(_this.compte));
                            _this.compteServiceProvider.changeCompte(_this.compte);
                            _this.compteServiceProvider.AffichageMigraineIncomplete();
                            _this.viewController.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MigraineInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-migraine-information',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-information\migraine-information.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menu-toggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title *ngIf="migraine != null">{{migraine.Debut}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <div *ngIf="migraine != null">\n          <ion-grid>\n           <ion-row>\n            <ion-list>\n                <ion-label>\n                    <strong>Debut : </strong>   {{migraine.DebutPresentation}}\n                </ion-label>\n                <ion-label>\n                    <strong>Fin :</strong>      {{migraine.FinPresentation}}\n                </ion-label>\n                <ion-label>\n                    <strong>Intensité :</strong> {{migraine.Intensite}} / 5\n                </ion-label>\n                <ion-label>\n                    <strong>Durée :</strong>      {{migraine.Duree}} Heures\n                </ion-label>\n                <ion-label>\n                    <strong>Médicament pris : </strong>\n                    <button ion-grid class="Medicament" *ngFor="let Medicament of migraine.MedicamentsPris" (click)="VoirMedicament(Medicament)">\n                        <div>{{ Medicament.DenominationMedicament }}</div>\n                    </button> \n                </ion-label>\n                <ion-label>   \n                    <strong>Facteurs : </strong>  \n                    <button ion-grid class="Facteur" *ngFor="let Facteur of migraine.Facteurs" (click)="VoirFacteur(Facteur)">\n                        <div> {{ Facteur.Nom }}</div>\n                    </button>\n                </ion-label>\n            </ion-list>\n           </ion-row>\n          </ion-grid>\n          <button ion-button color="primary" (click)="Fermer()" block>Retour</button>\n          <button *ngIf="migraine.Complet == false" ion-button color="primary" (click)="Modifier()" block>Modifier</button>\n          <button ion-button color="primary" (click)="supprimer()" block>Supprimer</button>\n      </div>\n      \n      \n      \n  </ion-content>\n  \n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-information\migraine-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MigraineInformationPage);
    return MigraineInformationPage;
}());

//# sourceMappingURL=migraine-information.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireFinMigrainePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_intensite_migraine_questionnaire_intensite_migraine__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionnaireFinMigrainePage = (function () {
    function QuestionnaireFinMigrainePage(navCtrl, navParams, compteServiceProvider, viewController, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.viewController = viewController;
        this.modalController = modalController;
        this.JourMax = new Date().getDate();
        this.HeureMax = new Date().getHours();
        this.HeureModifie = new Date().getHours();
        this.JourModifie = new Date().getDate();
    }
    QuestionnaireFinMigrainePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuestionnaireFinMigrainePage');
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        this.nouvelleMigraine = this.compte.MesMigraines[0];
        if (this.nouvelleMigraine.Fin == null) {
            this.JourMax = new Date().getDate();
            this.JourMin = this.DateDebutMigraine();
            this.HeureMax = new Date().getHours();
            this.HeureMin = this.HeureDebutMigraine();
            this.DateFin = this.DateActuel();
            this.JourFin = this.JoursActuel();
            console.log('jour max', this.JourMax);
            console.log('jour min', this.JourMin);
            console.log('jour modifie', this.JourModifie);
        }
        else {
            this.nouvelleMigraine.Fin = this.Nettoyage(this.nouvelleMigraine.Fin);
            this.DateFin = this.nouvelleMigraine.Fin.substring(0, 10);
            this.JourFin = this.nouvelleMigraine.Fin.substring(11, 16);
            this.HeureMax = 23;
            this.HeureMin = 0;
            this.JourMin = 1;
            this.JourMax = new Date().getDay();
            this.JourModifie = this.nouvelleMigraine.DateFin.day;
            this.HeureModifie = this.nouvelleMigraine.HeureFin.hour;
        }
    };
    QuestionnaireFinMigrainePage.prototype.DateActuel = function () {
        var date = new Date();
        var annee = date.getFullYear().toString();
        var moi = "";
        if (date.getMonth() < 9)
            moi = "0" + (date.getMonth() + 1).toString();
        else
            moi = (date.getMonth() + 1).toString();
        var jour = "";
        if (date.getDate() < 10)
            jour = "0" + (date.getDate()).toString();
        else
            jour = (date.getDate()).toString();
        return annee + "-" + moi + "-" + jour;
    };
    QuestionnaireFinMigrainePage.prototype.JoursActuel = function () {
        var date = new Date();
        var heure = "";
        if (date.getHours() < 10)
            heure = "0" + date.getHours().toString();
        else
            heure = date.getHours().toString();
        var minute = "";
        if (date.getMinutes() < 10)
            minute = "0" + date.getMinutes().toString();
        else
            minute = date.getMinutes().toString();
        return heure + ":" + minute;
    };
    QuestionnaireFinMigrainePage.prototype.Nettoyage = function (date) {
        if (date.split('T').length == 2) {
            var calendrier = date.split('T')[0];
            var anne = calendrier.split('-')[0];
            var moi = this.ajoutDuZero(calendrier.split('-')[1]);
            var jour = this.ajoutDuZero(calendrier.split('-')[2]);
            var pendule = date.split('T')[1];
            var heure = this.ajoutDuZero(pendule.split(':')[0]);
            var minute = this.ajoutDuZero(pendule.split(':')[1]);
            return anne + '-' + moi + '-' + jour + 'T' + heure + ':' + minute;
        }
    };
    QuestionnaireFinMigrainePage.prototype.ajoutDuZero = function (valeur) {
        console.log('avant modification', valeur);
        if (valeur.length == 1)
            return "0" + valeur;
        else
            return valeur;
    };
    QuestionnaireFinMigrainePage.prototype.heureModifie = function () {
        var date = new Date();
        var heure = "";
        //console.log('heure modifié : ', this.HeureModifie);
        //console.log('heure actuel : ', date.getHours());
        if (this.HeureModifie == date.getHours() && this.JourModifie == date.getDate()) {
            //console.log('jourActuel ',this.JoursActuel());
            this.JourFin = this.JoursActuel();
        }
        else {
            if (this.HeureModifie < 10)
                heure = "0" + this.HeureModifie.toString();
            else
                heure = this.HeureModifie.toString();
            this.JourFin = heure + ":00";
        }
    };
    QuestionnaireFinMigrainePage.prototype.jourModifie = function () {
        var date = new Date();
        var annee = date.getFullYear().toString();
        var moi = "";
        if (date.getMonth() < 9)
            moi = "0" + (date.getMonth() + 1).toString();
        else
            moi = (date.getMonth() + 1).toString();
        var jour = "";
        if (this.JourModifie < 10)
            jour = "0" + this.JourModifie.toString();
        else
            jour = this.JourModifie.toString();
        if (this.JourModifie < this.JourMax) {
            this.HeureMax = 23;
            if (this.JourModifie > this.JourMin) {
                this.HeureMin = 0;
            }
            else if (this.JourModifie == this.JourMin) {
                this.HeureMin = this.HeureDebutMigraine();
            }
        }
        if (this.JourModifie == this.JourMax) {
            this.HeureMax = date.getHours();
            if (this.JourModifie == this.DateDebutMigraine()) {
                this.HeureMin = this.HeureDebutMigraine();
            }
            else
                this.HeureMin = 0;
        }
        this.HeureModifie = this.HeureMax;
        console.log('jour modifie', this.JourModifie);
        console.log('jour', jour);
        this.DateFin = annee + "-" + moi + "-" + jour;
    };
    QuestionnaireFinMigrainePage.prototype.DateDebutMigraine = function () {
        var retour = parseInt(this.nouvelleMigraine.Debut.split("T")[0].split("-")[2]);
        console.log(retour);
        return retour;
    };
    QuestionnaireFinMigrainePage.prototype.HeureDebutMigraine = function () {
        var retour = parseInt(this.nouvelleMigraine.Debut.split("T")[1].split(":")[0]);
        console.log(retour);
        return retour;
    };
    QuestionnaireFinMigrainePage.prototype.JourPlusUn = function () {
        if (this.JourModifie < this.JourMax)
            this.JourModifie++;
    };
    QuestionnaireFinMigrainePage.prototype.JourMoinUn = function () {
        if (this.JourModifie > this.JourMin)
            this.JourModifie--;
    };
    QuestionnaireFinMigrainePage.prototype.HeurePlusUn = function () {
        if (this.HeureModifie < this.HeureMax)
            this.HeureModifie++;
    };
    QuestionnaireFinMigrainePage.prototype.HeureMoinUn = function () {
        if (this.HeureModifie > this.HeureMin)
            this.HeureModifie--;
    };
    QuestionnaireFinMigrainePage.prototype.Suivant = function () {
        this.compte.MesMigraines[0].Fin = this.DateFin + 'T' + this.JourFin;
        console.log('migraine fin', this.compte.MesMigraines[0]);
        this.compteServiceProvider.changeCompte(this.compte);
        var AffichageIntensite = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_intensite_migraine_questionnaire_intensite_migraine__["a" /* QuestionnaireIntensiteMigrainePage */]);
        AffichageIntensite.present();
    };
    QuestionnaireFinMigrainePage.prototype.Annule = function () {
        this.viewController.dismiss();
    };
    QuestionnaireFinMigrainePage.prototype.Fin = function () {
        var _this = this;
        this.compte.MesMigraines = [];
        this.compte.MesMigraines.push(this.nouvelleMigraine);
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AjouterMigraineIncomplet()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                console.log(retour);
                var AffichageHome = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]);
                AffichageHome.present();
            }
            else {
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                console.log("quelquechose s'est mal passé");
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireFinMigrainePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire-fin-migraine',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-fin-migraine\questionnaire-fin-migraine.html"*/'<!--\n  Generated template for the QuestionnaireFinMigrainePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fin de la migraine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="nouvelleMigraine" class="blocquestion">\n    <ion-list class="choix">\n      <div class="question">\n        <p>A quel heure c\'est terminé votre migraine ?</p>\n      </div>\n      <ion-label></ion-label>\n      <ion-item>\n        <ion-label>Date de Fin</ion-label>\n        <ion-datetime displayFormat="DDDD DD MMMM YYYY" [(ngModel)]="DateFin"></ion-datetime>\n      </ion-item>\n      <div *ngIf="JourMax - JourMin > 0">\n        <ion-item class=glissieredateFin>\n          <ion-range class="glissiereJours" min={{JourMin}} max={{JourMax}} step="1" snaps="true" pin="true" [(ngModel)]="JourModifie"\n            (ionChange)="jourModifie()" color="danger">\n            <ion-icon range-left small select name="calendar" (click)="JourMoinUn()"></ion-icon>\n            <ion-icon range-right select name="calendar" (click)="JourPlusUn()"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </div>\n      <ion-label></ion-label>\n      <ion-item>\n        <ion-label>Heure de Fin</ion-label>\n        <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm ss" [(ngModel)]="JourFin"></ion-datetime>\n      </ion-item>\n      <div *ngIf="HeureMax - HeureMin > 0">\n        <ion-item class=glissiereHeureFin>\n          <ion-range class="glissiereHeure" min={{HeureMin}} max={{HeureMax}} step="1" snaps="true" pin="true" [(ngModel)]="HeureModifie"\n            (ionChange)="heureModifie()" color="danger">\n            <ion-icon range-left small select name="time" (click)="HeureMoinUn()"></ion-icon>\n            <ion-icon range-right select name="time"(click)="HeurePlusUn()"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </div>\n      <ion-label></ion-label>\n    </ion-list>\n    <div class="troisboutons">\n      <button class="boutonprecedent" ion-button color="primary" (click)="Annule()" block>\n        <ion-icon class="flecheAvant" name="arrow-back" item-start></ion-icon>\n      </button>\n      <button class="boutonannule" ion-button color="primary" (click)="Fin()" block>\n        <span>Pas encore fini</span>\n      </button>\n      <button class="boutonsuivant" ion-button color="primary" (click)="Suivant()" block>\n        <ion-icon class="flecheApres" name="arrow-forward" item-start></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-fin-migraine\questionnaire-fin-migraine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], QuestionnaireFinMigrainePage);
    return QuestionnaireFinMigrainePage;
}());

//# sourceMappingURL=questionnaire-fin-migraine.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireIntensiteMigrainePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_medicament_questionnaire_medicament__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuestionnaireIntensiteMigrainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionnaireIntensiteMigrainePage = (function () {
    function QuestionnaireIntensiteMigrainePage(navCtrl, navParams, compteServiceProvider, viewController, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.viewController = viewController;
        this.modalController = modalController;
        this.InfoMigraine = "C'est une migraine";
        this.EtoileSelection = false;
        this.Etoile1 = "star-outline";
        this.Etoile2 = "star-outline";
        this.Etoile3 = "star-outline";
        this.Etoile4 = "star-outline";
        this.Etoile5 = "star-outline";
    }
    QuestionnaireIntensiteMigrainePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuestionnaireIntensiteMigrainePage');
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        this.nouvelleMigraine = this.compte.MesMigraines[0];
        if (this.nouvelleMigraine.Intensite > 0) {
            console.log('l\'intenisté de la migraine est de : ', this.nouvelleMigraine.Intensite);
            this.EtoileSelection = true;
            this.Intensite(this.nouvelleMigraine.Intensite);
        }
    };
    QuestionnaireIntensiteMigrainePage.prototype.Intensite = function (valeur) {
        //console.log(valeur);
        if (valeur == 1) {
            this.Etoile1 = "star";
            this.Etoile2 = "star-outline";
            this.Etoile3 = "star-outline";
            this.Etoile4 = "star-outline";
            this.Etoile5 = "star-outline";
            this.InfoMigraine = "c'est une migraine 1 étoile : At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam exoptatus suscipieris et interrogatus multa coactusque mentiri, miraberis numquam antea visus summatem virum tenuem te sic enixius observantem, ut paeniteat ob haec bona tamquam praecipua non vidisse ante decennium Romam. Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet, rei";
        }
        if (valeur == 2) {
            this.Etoile1 = "star";
            this.Etoile2 = "star";
            this.Etoile3 = "star-outline";
            this.Etoile4 = "star-outline";
            this.Etoile5 = "star-outline";
            this.InfoMigraine = "c'est une migraine 2 étoiles";
        }
        if (valeur == 3) {
            this.Etoile1 = "star";
            this.Etoile2 = "star";
            this.Etoile3 = "star";
            this.Etoile4 = "star-outline";
            this.Etoile5 = "star-outline";
            this.InfoMigraine = "c'est une migraine 3 étoiles";
        }
        if (valeur == 4) {
            this.Etoile1 = "star";
            this.Etoile2 = "star";
            this.Etoile3 = "star";
            this.Etoile4 = "star";
            this.Etoile5 = "star-outline";
            this.InfoMigraine = "c'est une migraine 4 étoiles";
        }
        if (valeur == 5) {
            this.Etoile1 = "star";
            this.Etoile2 = "star";
            this.Etoile3 = "star";
            this.Etoile4 = "star";
            this.Etoile5 = "star";
            this.InfoMigraine = "c'est une migraine 5 étoiles";
        }
    };
    QuestionnaireIntensiteMigrainePage.prototype.ValidIntensite = function (valeur) {
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
    };
    QuestionnaireIntensiteMigrainePage.prototype.Suivant = function () {
        this.compte.MesMigraines[0].Intensite = this.nouvelleMigraine.Intensite;
        console.log('migraine intensité', this.compte.MesMigraines[0]);
        this.compteServiceProvider.changeCompte(this.compte);
        var AffichageMedicament = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_medicament_questionnaire_medicament__["a" /* QuestionnaireMedicamentPage */]);
        AffichageMedicament.present();
    };
    QuestionnaireIntensiteMigrainePage.prototype.Annule = function () {
        this.viewController.dismiss();
    };
    QuestionnaireIntensiteMigrainePage.prototype.Fin = function () {
        var _this = this;
        this.compte.MesMigraines = [];
        this.compte.MesMigraines.push(this.nouvelleMigraine);
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AjouterMigraineIncomplet()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                console.log(retour);
                var AffichageHome = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]);
                AffichageHome.present();
            }
            else {
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                console.log("quelquechose s'est mal passé");
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireIntensiteMigrainePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire-intensite-migraine',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-intensite-migraine\questionnaire-intensite-migraine.html"*/'<!--\n  Generated template for the QuestionnaireIntensiteMigrainePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intensité de la migraine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="nouvelleMigraine" class="blocquestion">\n    <ion-list class="choix">\n      <div class="question">\n        <p>Quel était l\'intensité de votre migraine ?</p>\n      </div>\n      <ion-label></ion-label>\n\n      <div class="blockEtoiles" *ngIf="EtoileSelection == false">\n        <button ion-button color="primary" (click)="ValidIntensite(1)" (mouseenter)="Intensite(1)" block>\n          <ion-icon button class="stars1" range-right name={{Etoile1}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(2)" (mouseenter)="Intensite(2)" block>\n          <ion-icon button class="stars2" range-right name={{Etoile2}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(3)" (mouseenter)="Intensite(3)" block>\n          <ion-icon button class="stars3" range-right name={{Etoile3}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(4)" (mouseenter)="Intensite(4)" block>\n          <ion-icon button class="stars4" range-right name={{Etoile4}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(5)" (mouseenter)="Intensite(5)" block>\n          <ion-icon button class="stars5" range-right name={{Etoile5}}></ion-icon>\n        </button>\n      </div>\n      <div class="blockEtoiles" *ngIf="EtoileSelection">\n        <button ion-button color="primary" (click)="ValidIntensite(1)" block>\n          <ion-icon button class="stars1Select" range-right name={{Etoile1}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(2)" block>\n          <ion-icon button class="stars2Select" range-right name={{Etoile2}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(3)" block>\n          <ion-icon button class="stars3Select" range-right name={{Etoile3}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidIntensite(4)" block>\n          <ion-icon button class="stars4Select" range-right name={{Etoile4}}></ion-icon>\n        </button>\n        <button ion-button color="primary" (click)="ValidInteniste(5)" block>\n          <ion-icon button class="stars5Select" range-right name={{Etoile5}}></ion-icon>\n        </button>\n      </div>\n      <ion-label></ion-label>\n      <div class="infoMigraine">\n        <p>{{InfoMigraine}}</p>\n      </div>\n    </ion-list>\n    <div class="troisboutons">\n      <button class="boutonprecedent" ion-button color="primary" (click)="Annule()" block>\n        <ion-icon class="flecheAvant" name="arrow-back" item-start></ion-icon>\n      </button>\n      <button class="boutonannule" ion-button color="primary" (click)="Fin()" block>\n        <span>La suite plus tard</span>\n      </button>\n\n      <button class="boutonsuivant" *ngIf="EtoileSelection" ion-button color="primary" (click)="Suivant()" block>\n        <ion-icon class="flecheApres" name="arrow-forward" item-start></ion-icon>\n      </button>\n      <button class="boutonsuivant" *ngIf="EtoileSelection == false" ion-button color="primary" block></button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-intensite-migraine\questionnaire-intensite-migraine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], QuestionnaireIntensiteMigrainePage);
    return QuestionnaireIntensiteMigrainePage;
}());

//# sourceMappingURL=questionnaire-intensite-migraine.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireMedicamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_facteur_questionnaire_facteur__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_medicament__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionnaireMedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionnaireMedicamentPage = (function () {
    function QuestionnaireMedicamentPage(navCtrl, navParams, compteServiceProvider, viewController, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.viewController = viewController;
        this.modalController = modalController;
    }
    QuestionnaireMedicamentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuestionnaireMedicamentPage');
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        this.nouvelleMigraine = this.compte.MesMigraines[0];
        if (this.nouvelleMigraine.MedicamentsPris != null) {
            this.nouvelleMigraine.MedicamentsPris.forEach(function (medicament) {
                _this.compte.MesMedicaments.forEach(function (medocOrdonance) {
                    if (medicament.DenominationMedicament == medocOrdonance.DenominationMedicament) {
                        medocOrdonance.Selection = true;
                    }
                });
            });
        }
        console.log(this.compte);
    };
    QuestionnaireMedicamentPage.prototype.Suivant = function () {
        var _this = this;
        this.nouvelleMigraine.MedicamentsPris = [];
        this.compte.MesMedicaments.forEach(function (medicament) {
            if (medicament.Selection) {
                var nouveauMedicament = new __WEBPACK_IMPORTED_MODULE_5__model_medicament__["a" /* Medicament */]();
                nouveauMedicament.ID = medicament.ID;
                nouveauMedicament.Quantite = 1;
                _this.nouvelleMigraine.MedicamentsPris.push(nouveauMedicament);
            }
        });
        this.compte.MesMigraines[0].MedicamentsPris = this.nouvelleMigraine.MedicamentsPris;
        console.log('migraine medicament', this.compte.MesMigraines[0]);
        this.compteServiceProvider.changeCompte(this.compte);
        var AffichageFacteur = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_questionnaire_questionnaire_facteur_questionnaire_facteur__["a" /* QuestionnaireFacteurPage */]);
        AffichageFacteur.present();
    };
    QuestionnaireMedicamentPage.prototype.Annule = function () {
        this.viewController.dismiss();
    };
    QuestionnaireMedicamentPage.prototype.Fin = function () {
        var _this = this;
        this.compte.MesMigraines = [];
        this.compte.MesMigraines.push(this.nouvelleMigraine);
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AjouterMigraineIncomplet()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                console.log(retour);
                var AffichageHome = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */]);
                AffichageHome.present();
            }
            else {
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                console.log("quelquechose s'est mal passé");
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireMedicamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire-medicament',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-medicament\questionnaire-medicament.html"*/'<!--\n  Generated template for the QuestionnaireMedicamentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Médicaments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="nouvelleMigraine" class="blocquestion">\n    <ion-list>\n      <div class="question">\n        <p>Quel sont les médicament que vous avez pris ?</p>\n      </div>\n      <ion-label></ion-label>\n\n      <button ion-grid class="medicament" *ngFor="let medicament of compte.MesMedicaments">\n        <ion-row>\n          <ion-checkbox [(ngModel)]="medicament.Selection" class="checkmedoc" color="primary" checked="false"></ion-checkbox>\n          <div class="textmedoc">{{medicament.DenominationMedicament}}</div>\n        </ion-row>\n      </button>\n    </ion-list>\n    <div class="troisboutons">\n      <button class="boutonprecedent" ion-button color="primary" (click)="Annule()" block>\n        <ion-icon class="flecheAvant" name="arrow-back" item-start></ion-icon>\n      </button>\n      <button class="boutonannule" ion-button color="primary" (click)="Fin()" block>\n        <span>La suite plus tard</span>\n      </button>\n      <button class="boutonsuivant" ion-button color="primary" (click)="Suivant()" block>\n        <ion-icon class="flecheApres" name="arrow-forward" item-start></ion-icon>\n      </button>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-medicament\questionnaire-medicament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], QuestionnaireMedicamentPage);
    return QuestionnaireMedicamentPage;
}());

//# sourceMappingURL=questionnaire-medicament.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireFacteurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QuestionnaireFacteurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionnaireFacteurPage = (function () {
    function QuestionnaireFacteurPage(navCtrl, navParams, compteServiceProvider, viewController, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.viewController = viewController;
        this.modalController = modalController;
        // Etoile1 : string = "star-outline";
        // Etoile2 : string = "star-outline";
        // Etoile3 : string = "star-outline";
        // Etoile4 : string = "star-outline";
        // Etoile5 : string = "star-outline";
        this.EtoileSelection = false;
    }
    QuestionnaireFacteurPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad QuestionnaireFacteurPage');
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        this.nouvelleMigraine = this.compte.MesMigraines[0];
        this.nouvelleMigraine.Facteurs;
        console.log('facteurs ', this.nouvelleMigraine.Facteurs);
        this.compte.MesFacteurs.forEach(function (mesfacteurs) {
            console.log('type de réponse');
            if (mesfacteurs.TypeDeReponse.ID == 1) {
                if (mesfacteurs.Reponse == 0) {
                    _this.EtoileSelection = false;
                }
                else
                    _this.EtoileSelection = true;
                /*this.IntensiteFacteur(mesfacteurs.Reponse);*/
                console.log('la valeur d\'intensité est : ', mesfacteurs.Reponse);
            }
            if (mesfacteurs.TypeDeReponse.ID == 2) {
                if (mesfacteurs.Selection == null)
                    mesfacteurs.Selection = false;
            }
        });
        // }
        // else{
        //   console.log('liste facteur vide');
        //   this.nouvelleMigraine.Facteurs = [];
        //   this.compte.MesFacteurs.forEach(facteur => facteur.Selection = false); //mettre toute les valeurs à fausse
        // }
        // }
        //console.log('nouvelle migraine',this.nouvelleMigraine);
    };
    QuestionnaireFacteurPage.prototype.Permut = function (facteur) {
        if (facteur.Selection)
            facteur.Reponse = 1;
        else
            facteur.Reponse = 0;
    };
    /* IntensiteFacteur(valeur : number){
       // console.log(this);
       if (valeur == 0) {this.Etoile1 = "star-outline";this.Etoile2 = "star-outline";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
       if (valeur == 1) {this.Etoile1 = "star";this.Etoile2 = "star-outline";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
       if (valeur == 2) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star-outline";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
       if (valeur == 3) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star-outline";this.Etoile5 = "star-outline";}
       if (valeur == 4) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star-outline";}
       if (valeur == 5) {this.Etoile1 = "star";this.Etoile2 = "star";this.Etoile3 = "star";this.Etoile4 = "star";this.Etoile5 = "star";}
     }*/
    QuestionnaireFacteurPage.prototype.Suivant = function () {
        var _this = this;
        this.nouvelleMigraine.Facteurs = [];
        this.compte.MesFacteurs.forEach(function (facteur) {
            var nouveauFacteur;
            nouveauFacteur = { "ID": facteur.ID, "Reponse": facteur.Reponse };
            console.log('Facteurcréé', nouveauFacteur);
            _this.nouvelleMigraine.Facteurs.push(nouveauFacteur);
            console.log('Facteurajouté', _this.nouvelleMigraine.Facteurs);
        });
        this.compte.MesMigraines[0].Facteurs = this.nouvelleMigraine.Facteurs;
        console.log('migraine facteur', this.compte.MesMigraines[0]);
        console.log('La migraine : ', this.nouvelleMigraine);
        console.log('le compte avec la migraine', this.compte);
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AjouterMigraine()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                console.log(retour);
                var AffichageHome = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__["a" /* MenuPage */]);
                AffichageHome.present();
            }
            else {
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                console.log("quelquechose s'est mal passé");
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireFacteurPage.prototype.Annule = function () {
        this.viewController.dismiss();
    };
    QuestionnaireFacteurPage.prototype.Fin = function () {
        var _this = this;
        this.compte.MesMigraines = [];
        this.compte.MesMigraines.push(this.nouvelleMigraine);
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.AjouterMigraineIncomplet()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                console.log(retour);
                var AffichageHome = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__pages_menu_menu__["a" /* MenuPage */]);
                AffichageHome.present();
            }
            else {
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                console.log("quelquechose s'est mal passé");
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireFacteurPage.prototype.changementCouleur = function (wrap_id, nbr) {
        for (var i = 0; i < nbr; i++) {
            wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star';
            console.log(wrap_id.children[i].getElementsByTagName('ion-icon')[0].className);
        }
        for (var i = nbr; i < 5; i++) {
            wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star-outline';
            console.log(wrap_id.children[i].getElementsByTagName('ion-icon')[0].className);
        }
    };
    QuestionnaireFacteurPage.prototype.changementCouleurSelect = function (wrap_id, nbr) {
        for (var i = 0; i < nbr; i++) {
            wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star';
            //console.log(wrap_id.children[i].getElementsByTagName('ion-icon')[0].className);        
        }
        for (var i = nbr; i < 5; i++) {
            wrap_id.children[i].getElementsByTagName('ion-icon')[0].className = 'ministars' + (i + 1) + ' icon icon-md ion-md-star-outline';
            //console.log(wrap_id.children[i].getElementsByTagName('ion-icon')[0].className);
        }
    };
    QuestionnaireFacteurPage.prototype.etoileEnter = function (nbr, $event) {
        if (this.EtoileSelection == false) {
            console.log(event);
            var wrap_id = document.getElementById(event['path'][1].id);
            this.changementCouleur(wrap_id, nbr);
        }
        //let wrap_id : HTMLElement = document.getElementById(event.path[1].id);
        //this.changementCouleur(wrap_id, nbr);
        //let etoileNbr = event.path[0].className;
        //wrap_id.className = 'blockEtoiles ' + etoileNbr;
        //etoileNbr = etoileNbr.split('etoile')[1];
        /*for( let i = 1; i <= etoileNbr; i++ )
        {
          let etoile = document.getElementsByClassName(event.path[2].id + ' etoile' + i );
          etoile.setAttribute('class', 'active');
          console.log(etoile);
        }*/
    };
    QuestionnaireFacteurPage.prototype.etoileLeave = function (nbr, $event) {
        if (this.EtoileSelection == false) {
            var wrap_id = document.getElementById(event['path'][0].id);
            this.changementCouleur(wrap_id, nbr);
        }
    };
    QuestionnaireFacteurPage.prototype.SelectIntensite = function (facteur, valeur, $event) {
        if (this.EtoileSelection)
            this.DeSelect();
        else {
            var wrap_id = document.getElementById(event['path'][2].id);
            //wrap_id.style.backgroundColor = "color($colors, secondary)";
            console.log('le bloc étoile selectionné', wrap_id);
            this.EtoileSelection = true;
            facteur.Reponse = valeur;
            facteur.Selection = true;
        }
    };
    QuestionnaireFacteurPage.prototype.DeSelect = function () {
        this.EtoileSelection = false;
    };
    QuestionnaireFacteurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire-facteur',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-facteur\questionnaire-facteur.html"*/'<!--\n  Generated template for the QuestionnaireFacteurPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Facteurs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="nouvelleMigraine" class="blocquestion">\n    <ion-list class="choix">\n      <div class="question">\n        <p>Quel sont les facteurs impliqué dans cette migraine ?</p>\n      </div>\n      <ion-label></ion-label>\n      <button class="facteur" *ngFor="let facteur of compte.MesFacteurs">\n        <div class="textfacteur">{{facteur.Question}}</div>\n        <div *ngIf="facteur.TypeDeReponse.ID == 2" class="permutteur">\n          <div class="affichagenon" *ngIf="facteur.Selection == false">Non</div>\n          <div class="affichagenon" *ngIf="facteur.Selection == true" ></div>\n          <ion-toggle class="checkfacteur" [(ngModel)]="facteur.Selection" checked="false" (click)="Permut(facteur)"></ion-toggle>\n          <div class="affichageoui" *ngIf="facteur.Selection">Oui</div>\n          <div class="affichageoui" *ngIf="facteur.Selection == false"></div>\n        </div>\n        <div *ngIf="facteur.TypeDeReponse.ID == 1" class="Echeles">\n          <div id="facteurid_{{facteur.ID}}" class="blockEtoiles" (mouseleave)="etoileLeave(0)">           \n            <button class="boutonetoile" color="primary" (click)="SelectIntensite(facteur, 1)" (mouseenter)="etoileEnter(1)" block>\n              <ion-icon button class="ministars1" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoile" color="primary" (click)="SelectIntensite(facteur, 2)" (mouseenter)="etoileEnter(2)" block>\n              <ion-icon button class="ministars2" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoile" color="primary" (click)="SelectIntensite(facteur, 3)" (mouseenter)="etoileEnter(3)" block>\n              <ion-icon button class="ministars3" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoile" color="primary" (click)="SelectIntensite(facteur, 4)" (mouseenter)="etoileEnter(4)" block>\n              <ion-icon button class="ministars4" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoile" color="primary" (click)="SelectIntensite(facteur, 5)" (mouseenter)="etoileEnter(5)" block>\n              <ion-icon button class="ministars5" range-right name=\'star-outline\'></ion-icon>\n            </button> \n          </div>\n          <!-- <div id="facteuridSelect_{{facteur.ID}}" class="blockEtoilesSelect" *ngIf="EtoileSelection">\n            <button class="boutonetoileSelect" color="primary" (click)="DeSelect()" block>\n              <ion-icon button class="ministars1Select" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoileSelect" color="primary" (click)="DeSelect()" block>\n              <ion-icon button class="ministars2Select" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoileSelect" color="primary" (click)="DeSelect()" block>\n              <ion-icon button class="ministars3Select" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoileSelect" color="primary" (click)="DeSelect()" block>\n              <ion-icon button class="ministars4Select" range-right name=\'star-outline\'></ion-icon>\n            </button>\n            <button class="boutonetoileSelect" color="primary" (click)="DeSelect()" block>\n              <ion-icon button class="ministars5Select" range-right name=\'star-outline\'></ion-icon>\n            </button>\n          </div> -->\n        </div>\n      </button>\n    </ion-list>\n    <div class="troisboutons">\n      <button class="boutonprecedent" ion-button color="primary" (click)="Annule()" block>\n        <ion-icon class="flecheAvant" name="arrow-back" item-start></ion-icon>\n      </button>\n      <button class="boutonannule" ion-button color="primary" (click)="Fin()" block>\n        <span>La suite plus tard</span>\n      </button>\n\n      <button class="boutonsuivant" ion-button color="primary" (click)="Suivant()" block>\n        <ion-icon class="flecheApres" name="arrow-forward" item-start></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-facteur\questionnaire-facteur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], QuestionnaireFacteurPage);
    return QuestionnaireFacteurPage;
}());

//# sourceMappingURL=questionnaire-facteur.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MigraineNouvellePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';




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
var MigraineNouvellePage = (function () {
    function MigraineNouvellePage(navCtrl, navParams, compteServiceProvider, storage, ModalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.storage = storage;
        this.ModalController = ModalController;
    }
    MigraineNouvellePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MigraineNouvellePage');
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
    };
    MigraineNouvellePage.prototype.NouvelleMigraine = function () {
        if (localStorage.getItem('Token') == "null") {
            //envoyer sur page de connexion
            console.log("envoyer sur page de connexion car la token est null");
        }
        if (localStorage.getItem('Compte') == null) {
            //envoyer un message
            localStorage.setItem('Token', "");
        }
        else {
            console.log('DAns quel état est le compte', this.compte);
            if (this.compte.Identifiant == null)
                this.LoginToken();
            else {
                var AffichageQuestionnaire = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_4__questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__["a" /* QuestionnaireDebutMigrainePage */]);
                AffichageQuestionnaire.present();
            }
        }
    };
    MigraineNouvellePage.prototype.LoginToken = function () {
        var _this = this;
        console.log('je vais chercher les informations sur coptes sur le webservice');
        this.compteServiceProvider.LoginToken()
            .subscribe(function (retour) {
            _this.compte = retour;
            _this.compte.MesMedicaments = retour.MesMedicaments;
            _this.compte.MesMigraines = retour.MesMigraines;
            localStorage.setItem('Token', _this.compte.Token);
            localStorage.setItem('Compte', JSON.stringify(_this.compte));
            _this.compteServiceProvider.changeCompte(_this.compte);
            console.log(retour);
            var AffichageQuestionnaire = _this.ModalController.create(__WEBPACK_IMPORTED_MODULE_4__questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__["a" /* QuestionnaireDebutMigrainePage */]);
            AffichageQuestionnaire.present();
        }, function (error) { return console.log(error); });
    };
    MigraineNouvellePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-migraine-nouvelle',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-nouvelle\migraine-nouvelle.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nouvelle Migraine</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="nouvelle">\n  <button ion-button color="primary" (click)="NouvelleMigraine()" block>Nouvelle Migraine</button>\n<!-- <page-questionnaire-debut-migraine></page-questionnaire-debut-migraine> -->\n</ion-content>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\migraine-nouvelle\migraine-nouvelle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MigraineNouvellePage);
    return MigraineNouvellePage;
}());

//# sourceMappingURL=migraine-nouvelle.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/compte-login/compte-login.module": [
		422,
		15
	],
	"../pages/connexion/connexion.module": [
		423,
		2
	],
	"../pages/facteur-information/facteur-information.module": [
		424,
		14
	],
	"../pages/medecin-information/medecin-information.module": [
		425,
		13
	],
	"../pages/medicament-information/medicament-information.module": [
		426,
		12
	],
	"../pages/menu/menu.module": [
		427,
		11
	],
	"../pages/migraine-historique/migraine-historique.module": [
		428,
		10
	],
	"../pages/migraine-information/migraine-information.module": [
		429,
		9
	],
	"../pages/migraine-nouvelle/migraine-nouvelle.module": [
		430,
		8
	],
	"../pages/questionnaire/question/question.module": [
		431,
		1
	],
	"../pages/questionnaire/questionnaire-debut-migraine/questionnaire-debut-migraine.module": [
		432,
		7
	],
	"../pages/questionnaire/questionnaire-facteur/questionnaire-facteur.module": [
		433,
		6
	],
	"../pages/questionnaire/questionnaire-fin-migraine/questionnaire-fin-migraine.module": [
		434,
		5
	],
	"../pages/questionnaire/questionnaire-intensite-migraine/questionnaire-intensite-migraine.module": [
		435,
		4
	],
	"../pages/questionnaire/questionnaire-medicament/questionnaire-medicament.module": [
		436,
		3
	],
	"../pages/questionnaire/reponse/reponse.module": [
		437,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_compte__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { map, catchError } from 'rxjs/operators';



var CompteServiceProvider = (function () {
    function CompteServiceProvider(http) {
        this.http = http;
        //private apiUrl = 'https://restcountries.eu/rest/v2/all';
        //private WebService = 'http://localhost:57928/Service1.svc';
        this.WebService = 'http://91.160.28.49:50000/Service1.svc';
        this.comptes = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__model_compte__["a" /* Compte */]());
        this.compte = this.comptes.asObservable();
        this.incomplets = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.incomplet = this.incomplets.asObservable();
        //console.log('Hello RestProvider Provider');
    }
    CompteServiceProvider_1 = CompteServiceProvider;
    CompteServiceProvider.prototype.changeCompte = function (compte) {
        //localStorage.setItem('Token', compte.Token);
        this.comptes.next(compte);
    };
    CompteServiceProvider.prototype.changeIncomplet = function (incomplet) {
        this.incomplets.next(incomplet);
    };
    // public TokenPresent() : boolean
    // {
    //   let retour : boolean;
    //   this.storage.get('token').then((val) => {
    //     if (val != "") retour = true;
    //     else retour = false;
    //   });
    //   return retour;
    // }
    CompteServiceProvider.prototype.Login = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded');
        //var body = localStorage.getItem('compte');
        var body = JSON.stringify({ Identifiant: this.comptes.value.Identifiant, MotDePass: this.comptes.value.MotDePass, TelephonePortable: this.comptes.value.TelephonePortable, Token: CompteServiceProvider_1.CleBasic });
        console.log('ce qui est envoyé', body);
        return this.http.post(this.WebService + "/Tel/login?Value=" + btoa(body), '', { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    CompteServiceProvider.prototype.LoginToken = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded');
        //var body = localStorage.getItem('compte');
        var body = JSON.stringify({ Identifiant: JSON.parse(localStorage.getItem('Compte')).Identifiant, Token: localStorage.getItem('Token') });
        console.log('ce qui est envoyé', body);
        return this.http.post(this.WebService + "/Tel/loginToken?Value=" + btoa(body), '', { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    CompteServiceProvider.prototype.AjouterMigraine = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        var body = JSON.stringify({ IDWeb: this.comptes.value.IDWeb, Identifiant: this.comptes.value.Identifiant, MesMigraines: this.comptes.value.MesMigraines, Token: localStorage.getItem('Token') });
        console.log('le compte', this.comptes.value);
        console.log('le body envoyé', body);
        return this.http.post(this.WebService + "/Tel/Patient/AjoutMigraine?Value=" + btoa(body), '', { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    CompteServiceProvider.prototype.AjouterMigraineIncomplet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        var body = JSON.stringify({ IDWeb: this.comptes.value.IDWeb, Identifiant: this.comptes.value.Identifiant, MesMigraines: this.comptes.value.MesMigraines, Token: localStorage.getItem('Token') });
        console.log('Ajout Migraine', body);
        return this.http.post(this.WebService + "/Tel/Patient/AjoutMigraineIncomplet?Value=" + btoa(body), '', { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    CompteServiceProvider.prototype.supprimerMigraine = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        var body = JSON.stringify({ IDWeb: this.comptes.value.IDWeb, Identifiant: this.comptes.value.Identifiant, MesMigraines: [{ "ID": this.comptes.value.MesMigraines[0].ID }], Token: localStorage.getItem('Token') });
        console.log('le compte', this.comptes.value);
        console.log('le body envoyé', body);
        return this.http.post(this.WebService + "/Tel/Patient/SupprMigraine?Value=" + btoa(body), '', { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    // return this.http.post(this.WebService + '/Tel/login').pipe(
    //   map(this.extractData),
    //   catchError(this.handleError)
    // );
    //}
    // getCountries(): Observable<{}> {
    //   return this.http.get(this.apiUrl).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError)
    //   );
    // }
    CompteServiceProvider.prototype.extractData = function (res) {
        console.log('le body a la reception', res.body);
        var body = res.body;
        return body || {};
    };
    CompteServiceProvider.prototype.AffichageMigraineIncomplete = function () {
        var nombre = 0;
        console.log('avant changement : ', nombre);
        if (this.comptes.value.MesMigraines == null)
            this.changeIncomplet(null);
        else {
            this.comptes.value.MesMigraines.forEach(function (elt) { if (elt.Complet == false)
                nombre++; });
            if (nombre > 0)
                this.changeIncomplet(nombre);
            else
                this.changeIncomplet(null);
            console.log('avant changement  : ', nombre);
        }
    };
    //private WebService = 'http://192.168.1.11:3000/Service1.svc';
    //private WebService = 'http://192.168.1.11:57928/Service1.svc';
    CompteServiceProvider.CleBasic = "j6tYtmgst2XIOIeRsPHR";
    CompteServiceProvider = CompteServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CompteServiceProvider);
    return CompteServiceProvider;
    var CompteServiceProvider_1;
}());

//# sourceMappingURL=compte-service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Compte = (function () {
    function Compte() {
    }
    Compte = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Compte);
    return Compte;
}());

//# sourceMappingURL=compte.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedecinServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the MedecinServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MedecinServiceProvider = (function () {
    function MedecinServiceProvider(http) {
        this.http = http;
        //private WebService = 'http://localhost:57928/Service1.svc';
        //private WebService = 'http://192.168.1.11:3000/Service1.svc';
        this.WebService = 'http://91.160.28.49:50000/Service1.svc';
        //console.log('Hello MedecinServiceProvider Provider');
    }
    MedecinServiceProvider.prototype.voirMedecin = function (idMedecin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded');
        var body = JSON.stringify({ Identifiant: JSON.parse(localStorage.getItem('Compte')).Identifiant, Token: localStorage.getItem('Token'), MesMedecin: [{ IDWeb: idMedecin }] });
        console.log('ce qui est envoyé pour la demande de médecin', body);
        return this.http.get(this.WebService + "/tel/Medecin/Voir?Value=" + btoa(body), { headers: headers, observe: 'response' }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    MedecinServiceProvider.prototype.extractData = function (res) {
        var body = res.body;
        return body || {};
    };
    MedecinServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MedecinServiceProvider);
    return MedecinServiceProvider;
}());

//# sourceMappingURL=medecin-service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Migraine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Migraine = (function () {
    function Migraine() {
    }
    Migraine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Migraine);
    return Migraine;
}());

//# sourceMappingURL=migraine.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_migraine_historique_migraine_historique__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_migraine_nouvelle_migraine_nouvelle__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_compte_login_compte_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_medecin_information_medecin_information__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_medicament_information_medicament_information__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_facteur_information_facteur_information__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_migraine_information_migraine_information__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_questionnaire_questionnaire_fin_migraine_questionnaire_fin_migraine__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_questionnaire_questionnaire_intensite_migraine_questionnaire_intensite_migraine__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_questionnaire_questionnaire_medicament_questionnaire_medicament__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_questionnaire_questionnaire_facteur_questionnaire_facteur__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_medecin_medecin_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_migraine_historique_migraine_historique__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { Sim } from '@ionic-native/sim';


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compte_login_compte_login__["a" /* CompteLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_migraine_historique_migraine_historique__["a" /* MigraineHistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_migraine_nouvelle_migraine_nouvelle__["a" /* MigraineNouvellePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_medecin_information_medecin_information__["a" /* MedecinInformationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_medicament_information_medicament_information__["a" /* MedicamentInformationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_facteur_information_facteur_information__["a" /* FacteurInformationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_migraine_information_migraine_information__["a" /* MigraineInformationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__["a" /* QuestionnaireDebutMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_questionnaire_questionnaire_fin_migraine_questionnaire_fin_migraine__["a" /* QuestionnaireFinMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_questionnaire_questionnaire_intensite_migraine_questionnaire_intensite_migraine__["a" /* QuestionnaireIntensiteMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_questionnaire_questionnaire_medicament_questionnaire_medicament__["a" /* QuestionnaireMedicamentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_questionnaire_questionnaire_facteur_questionnaire_facteur__["a" /* QuestionnaireFacteurPage */],
                __WEBPACK_IMPORTED_MODULE_24__directives_migraine_historique_migraine_historique__["a" /* MigraineHistoriqueDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    monthNames: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
                    monthShortNames: ['jan', 'fev', 'mar', 'avr', 'mai', 'jun', 'jul', 'aou', 'sep', 'oct', 'nov', 'dec'],
                    dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                    dayShortNames: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
                }, {
                    links: [
                        { loadChildren: '../pages/compte-login/compte-login.module#CompteLoginPageModule', name: 'CompteLoginPage', segment: 'compte-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facteur-information/facteur-information.module#FacteurInformationPageModule', name: 'FacteurInformationPage', segment: 'facteur-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medecin-information/medecin-information.module#MedecinInformationPageModule', name: 'MedecinInformationPage', segment: 'medecin-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicament-information/medicament-information.module#MedicamentInformationPageModule', name: 'MedicamentInformationPage', segment: 'medicament-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/migraine-historique/migraine-historique.module#MigraineHistoriquePageModule', name: 'MigraineHistoriquePage', segment: 'migraine-historique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/migraine-information/migraine-information.module#MigraineInformationPageModule', name: 'MigraineInformationPage', segment: 'migraine-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/migraine-nouvelle/migraine-nouvelle.module#MigraineNouvellePageModule', name: 'MigraineNouvellePage', segment: 'migraine-nouvelle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire-debut-migraine/questionnaire-debut-migraine.module#QuestionnaireDebutMigrainePageModule', name: 'QuestionnaireDebutMigrainePage', segment: 'questionnaire-debut-migraine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire-facteur/questionnaire-facteur.module#QuestionnaireFacteurPageModule', name: 'QuestionnaireFacteurPage', segment: 'questionnaire-facteur', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire-fin-migraine/questionnaire-fin-migraine.module#QuestionnaireFinMigrainePageModule', name: 'QuestionnaireFinMigrainePage', segment: 'questionnaire-fin-migraine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire-intensite-migraine/questionnaire-intensite-migraine.module#QuestionnaireIntensiteMigrainePageModule', name: 'QuestionnaireIntensiteMigrainePage', segment: 'questionnaire-intensite-migraine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/questionnaire-medicament/questionnaire-medicament.module#QuestionnaireMedicamentPageModule', name: 'QuestionnaireMedicamentPage', segment: 'questionnaire-medicament', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionnaire/reponse/reponse.module#ReponsePageModule', name: 'ReponsePage', segment: 'reponse', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compte_login_compte_login__["a" /* CompteLoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_migraine_historique_migraine_historique__["a" /* MigraineHistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_migraine_nouvelle_migraine_nouvelle__["a" /* MigraineNouvellePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_medecin_information_medecin_information__["a" /* MedecinInformationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_medicament_information_medicament_information__["a" /* MedicamentInformationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_facteur_information_facteur_information__["a" /* FacteurInformationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_migraine_information_migraine_information__["a" /* MigraineInformationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_questionnaire_questionnaire_debut_migraine_questionnaire_debut_migraine__["a" /* QuestionnaireDebutMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_questionnaire_questionnaire_fin_migraine_questionnaire_fin_migraine__["a" /* QuestionnaireFinMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_questionnaire_questionnaire_intensite_migraine_questionnaire_intensite_migraine__["a" /* QuestionnaireIntensiteMigrainePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_questionnaire_questionnaire_medicament_questionnaire_medicament__["a" /* QuestionnaireMedicamentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_questionnaire_questionnaire_facteur_questionnaire_facteur__["a" /* QuestionnaireFacteurPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_compte_compte_service__["a" /* CompteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_medecin_medecin_service__["a" /* MedecinServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facteur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypeFacteur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TypeReponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Facteur = (function () {
    function Facteur() {
        this.Selection = false;
    }
    Facteur = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Facteur);
    return Facteur;
}());

var TypeFacteur = (function () {
    function TypeFacteur() {
    }
    TypeFacteur = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TypeFacteur);
    return TypeFacteur;
}());

var TypeReponse = (function () {
    function TypeReponse() {
    }
    TypeReponse = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TypeReponse);
    return TypeReponse;
}());

//# sourceMappingURL=facteur.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Medicament; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Medicament = (function () {
    function Medicament() {
    }
    ;
    Medicament = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Medicament);
    return Medicament;
}());

//# sourceMappingURL=medicament.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpClient } from '@angular/common/http';
//import { NavController } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    //constructor(private compteServiceProvider : CompteServiceProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //(window as any).StatusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__migraine_historique_migraine_historique__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__migraine_nouvelle_migraine_nouvelle__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compte_login_compte_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_compte_compte_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Compte } from '../../model/compte';
//import { Migraine } from '../../model/migraine';
/**
 * Generated class for the MenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, compteServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.compteServiceProvider = compteServiceProvider;
        this.nouvelleMigraineRoot = __WEBPACK_IMPORTED_MODULE_3__migraine_nouvelle_migraine_nouvelle__["a" /* MigraineNouvellePage */];
        this.historiqueRoot = __WEBPACK_IMPORTED_MODULE_2__migraine_historique_migraine_historique__["a" /* MigraineHistoriquePage */];
        this.connexionRoot = __WEBPACK_IMPORTED_MODULE_4__compte_login_compte_login__["a" /* CompteLoginPage */];
        this.compteServiceProvider.incomplet.subscribe(function (res) { return _this.incomplet = res; });
    }
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\menu\menu.html"*/'<ion-tabs>\n    <ion-tab [root]="nouvelleMigraineRoot" tabTitle="Nouvelle migraine" tabIcon="thunderstorm"></ion-tab>\n    <ion-tab [root]="historiqueRoot" tabTitle="Historique" tabIcon="stats" tabBadge={{incomplet}} tabBadgeStyle="danger"></ion-tab>\n    <ion-tab [root]="connexionRoot" tabTitle="Connexion" tabIcon="link"></ion-tab>\n</ion-tabs>\n<!-- <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab> -->'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_compte_compte_service__["a" /* CompteServiceProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compte_login_compte_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_compte_compte_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';
//import { Subscriber } from 'rxjs/Subscriber';
//import { Subscription } from 'rxjs/Subscription';
//import { HttpClient } from '@angular/common/http';

//import { Platform } from 'ionic-angular';


// import { CompteLoginComponent } from '../../components/compte-login/compte-login';
// import { QuestionReponseComponent } from '../../components/question-reponse/question-reponse';
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, compteServiceprovider, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.compteServiceprovider = compteServiceprovider;
        this.storage = storage;
    }
    HomePage.prototype.lecturepage = function () {
        var _this = this;
        this.storage.remove('Token');
        //console.log('test');
        this.storage.get('Token').then(function (val) {
            if (val == null) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__compte_login_compte_login__["a" /* CompteLoginPage */]);
                modal.present();
            }
            else {
                console.log(val);
            }
        }).catch(function (val) { return console.log('erreur', val); });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.getCountries();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      MaMigraine\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-img src="assets/imgs/LogoMigraine.png"></ion-img>\n  <button ion-button (click)="lecturepage()">click sur moi</button>\n</ion-content>\n    \n\n\n\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MigraineHistoriqueDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MigraineHistoriqueDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var MigraineHistoriqueDirective = (function () {
    function MigraineHistoriqueDirective(el, renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';
        this.el = el;
        this.renderer = renderer;
        // console.log('Directive : ', el.nativeElement);
        // this.Color = 'danger';
        // let puchlineEl = this.el.nativeElement.querySelector('button.historiqueComplet');
        // let puchlineEl1 = this.el.nativeElement.querySelector('.DateDebut');
        // console.log('puchlineE : ', puchlineEl);
        // console.log('puchlineEl : ', puchlineEl1);
        //this.renderer.setElementStyle(puchlineEl, 'border-color', 'danger');
        //window.alert('coucou je suis la directive');
        //var child = this.renderer.invokeElementMethod(this.el.nativeElement, 'querySelector', ['div']);
        console.log(this.el.nativeElement.value);
    }
    MigraineHistoriqueDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    };
    MigraineHistoriqueDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    MigraineHistoriqueDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
        //this.el.nativeElement.DateDebut.style.backgroundColor = color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MigraineHistoriqueDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MigraineHistoriqueDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('migraine-historique'),
        __metadata("design:type", String)
    ], MigraineHistoriqueDirective.prototype, "highlightColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MigraineHistoriqueDirective.prototype, "defaultColor", void 0);
    MigraineHistoriqueDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[Questionnaire-Facteur]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], MigraineHistoriqueDirective);
    return MigraineHistoriqueDirective;
}());

//# sourceMappingURL=migraine-historique.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompteLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medecin_information_medecin_information__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__medicament_information_medicament_information__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facteur_information_facteur_information__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_compte__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Sim } from '@ionic-native/sim';






var CompteLoginPage = (function () {
    function CompteLoginPage(compteServiceProvider, navCtrl, navParams, viewCtrl, storage, ModalController
        //public sim: Sim
    ) {
        this.compteServiceProvider = compteServiceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.ModalController = ModalController;
        this.compte = new __WEBPACK_IMPORTED_MODULE_7__model_compte__["a" /* Compte */]();
        this.AffichageLogin = false;
    }
    CompteLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        // this.sim.getSimInfo().then(
        //   (info) => console.log('Sim info: ', info),
        //   (err) => console.log('Unable to get sim info: ', err)
        // );
        // this.sim.hasReadPermission().then(
        //   (info) => console.log('Has permission: ', info)
        // );
        // this.sim.requestReadPermission().then(
        //   () => console.log('Permission granted'),
        //   () => console.log('Permission denied')
        // );
        // this.storage.remove('Token');
        // this.storage.clear();
        //localStorage.setItem('Token',"");
        console.log('le compte est ', this.compte);
        if (this.compte.Identifiant == null) {
            console.log('l\'identifiant est null');
            this.compte.Identifiant = "";
            this.compte.MotDePass = "";
            this.compte.TelephonePortable = "";
            var token = localStorage.getItem('Token');
            console.log('le token est ', token);
            if (token == "null" || token == undefined || token == "") {
                //dif (token == null){
                console.log('il faut afficher la mire');
                this.AffichageLogin = true;
            }
            else {
                console.log('aller chercher sur le webservice');
                this.AffichageLogin = false;
                //console.log('le compte est ',localStorage.getItem('Compte'));
                if (localStorage.getItem('Compte') == null) {
                    localStorage.setItem('Token', "");
                    this.AffichageLogin = true;
                }
                else {
                    this.LoginToken();
                }
                //console.log(token);
            }
        }
    };
    CompteLoginPage.prototype.Login = function () {
        //this.storage.set('Token', "c\'est mon beau Token");
        var _this = this;
        this.compteServiceProvider.changeCompte(this.compte);
        this.compteServiceProvider.Login()
            .subscribe(function (retour) {
            console.log('le retour du compte', retour);
            if (retour.Erreur == null) {
                console.log('retour du compte : ', retour);
                _this.compte = retour;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                _this.AffichageLogin = false;
                console.log(retour);
            }
            else {
                console.log('retour du compte avec erreur: ', retour);
                localStorage.removeItem('Token');
                localStorage.removeItem('Compte');
                _this.AffichageLogin = true;
            }
        }, function (error) { return console.log('retour du compte grosse erreur', error); });
        //this.viewCtrl.dismiss();
    };
    CompteLoginPage.prototype.LoginToken = function () {
        var _this = this;
        this.compteServiceProvider.LoginToken()
            .subscribe(function (retour) {
            _this.compte = retour;
            if (_this.compte.Erreur == null) {
                _this.compte.MesMedicaments = retour.MesMedicaments;
                _this.compte.MesMigraines = retour.MesMigraines;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                _this.AffichageLogin = false;
                console.log(retour);
            }
            else {
                _this.Deconnexion();
            }
        }, function (error) { return console.log(error); });
    };
    CompteLoginPage.prototype.Deconnexion = function () {
        localStorage.removeItem('Token');
        localStorage.removeItem('Compte');
        this.compteServiceProvider.changeCompte(new __WEBPACK_IMPORTED_MODULE_7__model_compte__["a" /* Compte */]());
        this.compteServiceProvider.AffichageMigraineIncomplete();
        this.AffichageLogin = true;
    };
    CompteLoginPage.prototype.VoirMedecin = function (medecin) {
        var AffichageMedecin = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_4__medecin_information_medecin_information__["a" /* MedecinInformationPage */], { IDWeb: medecin.IDWeb });
        AffichageMedecin.present();
    };
    CompteLoginPage.prototype.VoirMedicament = function (medicament) {
        var AffichageMedicament = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_5__medicament_information_medicament_information__["a" /* MedicamentInformationPage */], { Medicament: medicament });
        AffichageMedicament.present();
    };
    CompteLoginPage.prototype.VoirFacteur = function (facteur) {
        console.log('facteur avant envois', facteur);
        var AffichageFacteur = this.ModalController.create(__WEBPACK_IMPORTED_MODULE_6__facteur_information_facteur_information__["a" /* FacteurInformationPage */], { Facteur: facteur });
        AffichageFacteur.present();
    };
    CompteLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compte-login',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\compte-login\compte-login.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Connexion\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding class="connexion">\n    <div *ngIf="AffichageLogin">\n      <ion-grid>\n          <ion-row>\n            <ion-col width-100>\n              <ion-list>\n                <ion-item>\n                   <ion-input type="text" placeholder="Login" [(ngModel)]="compte.Identifiant"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="password" placeholder="MotDePass" [(ngModel)]="compte.MotDePass"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="number" placeholder="Numero de téléphone" [(ngModel)]="compte.TelephonePortable"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      <div padding>\n          <button ion-button color="primary" (click)="Login()" block>Connexion</button>\n      </div>\n    </div>\n    <div *ngIf="AffichageLogin == false">\n      <ion-grid>\n        <ion-row>\n          <ion-list>\n            <ion-label>\n              <strong>Nom : </strong> {{compte.Nom}}\n            </ion-label>\n            <ion-label>\n              <strong>Prenom : </strong> {{compte.Prenom}}\n            </ion-label>\n            <ion-label>\n                <strong>Adresse Mail : </strong> {{compte.AdresseMail}}\n            </ion-label>\n            <ion-label>\n                <strong>Identifiant : </strong> {{compte.Identifiant}}\n            </ion-label>\n            <ion-label>\n                <strong>Telephone Portable : </strong> {{compte.TelephonePortable}}\n            </ion-label>\n            <ion-label>\n              <strong>Mes médecins : </strong>\n              <button ion-grid class="Medecin" *ngFor="let compte of compte.MesMedecin" (click)="VoirMedecin(compte)">\n                  <div>{{ compte.Nom }} {{ compte.Prenom }}</div>\n              </button> \n            </ion-label>\n            <ion-label>\n                <strong>Mon ordonnance : </strong>\n                <button ion-grid class="Medicament" *ngFor="let Medicament of compte.MesMedicaments" (click)="VoirMedicament(Medicament)">\n                  <div> {{ Medicament.DenominationMedicament }}</div>\n                </button> \n            </ion-label>\n            <ion-label>\n                <strong>Mes Facteurs : </strong>\n                <button ion-grid class="Facteur" *ngFor="let Facteur of compte.MesFacteurs" (click)="VoirFacteur(Facteur)">\n                  <div> {{ Facteur.Nom }}</div>\n                </button> \n            </ion-label>\n          </ion-list>\n        </ion-row>\n      </ion-grid>\n      <button ion-button color="primary" (click)="Deconnexion()" block>Deconnexion</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\compte-login\compte-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]
            //public sim: Sim
        ])
    ], CompteLoginPage);
    return CompteLoginPage;
}());

//# sourceMappingURL=compte-login.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireDebutMigrainePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_questionnaire_questionnaire_fin_migraine_questionnaire_fin_migraine__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_migraine__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MenuPage } from '../../../pages/menu/menu';


/**
 * Generated class for the QuestionnaireDebutMigrainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionnaireDebutMigrainePage = (function () {
    //month: string = '2018-01-10';
    // public event = {
    //   month: '2018-01-10',
    //   timeStarts: '07:43',
    //   timeEnds: '1990-02-20'}
    function QuestionnaireDebutMigrainePage(navCtrl, navParams, compteServiceProvider, viewController, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteServiceProvider = compteServiceProvider;
        this.viewController = viewController;
        this.modalController = modalController;
        this.HeureMax = new Date().getHours();
        this.HeureMin = 0;
        this.JourMax = new Date().getDate();
        this.JourMin = 1;
        this.HeureModifie = new Date().getHours();
        this.JourModifie = new Date().getDate();
        this.NouvelleEnregistrement = false;
    }
    QuestionnaireDebutMigrainePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.compteServiceProvider.compte.subscribe(function (res) { return _this.compte = res; });
        this.NouvelleMigraine = this.navParams.get('Migraine');
        if (this.NouvelleMigraine == null) {
            this.NouvelleMigraine = new __WEBPACK_IMPORTED_MODULE_4__model_migraine__["a" /* Migraine */]();
            // this.HeureMax = new Date().getHours();
            // this.JourMax = new Date().getDay();
            this.DateDebut = this.DateActuel();
            this.JourDebut = this.JoursActuel();
            console.log(this.DateDebut);
            console.log(this.JourDebut);
            this.NouvelleEnregistrement = true;
        }
        else {
            console.log('migraine a modifier', this.NouvelleMigraine);
            this.HeureMax = 23;
            this.NouvelleMigraine.Debut = this.Nettoyage(this.NouvelleMigraine.Debut);
            this.DateDebut = this.NouvelleMigraine.Debut.substring(0, this.NouvelleMigraine.Debut.search('T'));
            this.JourDebut = this.NouvelleMigraine.Debut.substring(this.NouvelleMigraine.Debut.search('T') + 1, this.NouvelleMigraine.Debut.length);
            this.JourModifie = this.NouvelleMigraine.DateDebut.day;
            this.HeureModifie = this.NouvelleMigraine.HeureDebut.hour;
            console.log(this.DateDebut);
            console.log(this.JourDebut);
        }
    };
    //retourReglette()
    //{
    //this.nouvelleMigraine.JourStringDebut = this.JoursActuelMoinsHeure();
    //console.log('le texte en retour est : ',this.JoursActuelMoinsHeure());
    //}
    QuestionnaireDebutMigrainePage.prototype.DateActuel = function () {
        var date = new Date();
        var annee = date.getFullYear().toString();
        var moi = "";
        if (date.getMonth() < 9)
            moi = "0" + (date.getMonth() + 1).toString();
        else
            moi = (date.getMonth() + 1).toString();
        var jour = "";
        if (date.getDate() < 10)
            jour = "0" + (date.getDate()).toString();
        else
            jour = (date.getDate()).toString();
        return annee + "-" + moi + "-" + jour;
    };
    QuestionnaireDebutMigrainePage.prototype.Nettoyage = function (date) {
        if (date.split('T').length == 2) {
            var calendrier = date.split('T')[0];
            var anne = calendrier.split('-')[0];
            var moi = this.ajoutDuZero(calendrier.split('-')[1]);
            var jour = this.ajoutDuZero(calendrier.split('-')[2]);
            var pendule = date.split('T')[1];
            var heure = this.ajoutDuZero(pendule.split(':')[0]);
            var minute = this.ajoutDuZero(pendule.split(':')[1]);
            return anne + '-' + moi + '-' + jour + 'T' + heure + ':' + minute;
        }
    };
    QuestionnaireDebutMigrainePage.prototype.ajoutDuZero = function (valeur) {
        console.log('avant modification', valeur);
        if (valeur.length == 1)
            return "0" + valeur;
        else
            return valeur;
    };
    QuestionnaireDebutMigrainePage.prototype.JoursActuel = function () {
        var date = new Date();
        var heure = "";
        if (date.getHours() < 10)
            heure = "0" + date.getHours().toString();
        else
            heure = date.getHours().toString();
        var minute = "";
        if (date.getMinutes() < 10)
            minute = "0" + date.getMinutes().toString();
        else
            minute = date.getMinutes().toString();
        return heure + ":" + minute;
    };
    QuestionnaireDebutMigrainePage.prototype.heureModifie = function () {
        var date = new Date();
        var heure = "";
        //console.log('heure modifié : ', this.HeureModifie);
        //console.log('heure actuel : ', date.getHours());
        if (this.HeureModifie == date.getHours() && this.JourModifie == date.getDate()) {
            //console.log('jourActuel ',this.JoursActuel());
            this.JourDebut = this.JoursActuel();
        }
        else {
            if (this.HeureModifie < 10)
                heure = "0" + this.HeureModifie.toString();
            else
                heure = this.HeureModifie.toString();
            this.JourDebut = heure + ":00";
        }
    };
    QuestionnaireDebutMigrainePage.prototype.jourModifie = function () {
        var date = new Date();
        var annee = date.getFullYear().toString();
        var moi = "";
        if (date.getMonth() < 9)
            moi = "0" + (date.getMonth() + 1).toString();
        else
            moi = (date.getMonth() + 1).toString();
        var jour = "";
        if (this.JourModifie < 10)
            jour = "0" + this.JourModifie.toString();
        else
            jour = this.JourModifie.toString();
        if (this.JourModifie < this.JourMax) {
            this.HeureMax = 23;
            if (this.JourModifie > this.JourMin) {
                this.HeureMin = 0;
            }
            else {
                this.HeureMin = 0;
            }
        }
        else {
            this.HeureMax = new Date().getHours();
            this.HeureMin = 0;
        }
        if (this.NouvelleEnregistrement)
            this.HeureModifie = this.HeureMax;
        this.DateDebut = annee + "-" + moi + "-" + jour;
    };
    QuestionnaireDebutMigrainePage.prototype.JourPlusUn = function () {
        if (this.JourModifie < this.JourMax)
            this.JourModifie++;
    };
    QuestionnaireDebutMigrainePage.prototype.JourMoinUn = function () {
        if (this.JourModifie > this.JourMin)
            this.JourModifie--;
    };
    QuestionnaireDebutMigrainePage.prototype.HeurePlusUn = function () {
        if (this.HeureModifie < this.HeureMax)
            this.HeureModifie++;
    };
    QuestionnaireDebutMigrainePage.prototype.HeureMoinUn = function () {
        if (this.HeureModifie > this.HeureMin)
            this.HeureModifie--;
    };
    //passage a la page suivant. pour l'occasion on efface la liste des migraines pour en faire une nouvelle contenant la novuelle migraine.
    //on en profite pour transformer la date pour qu'elle soit conforme a la structure d'envois 
    QuestionnaireDebutMigrainePage.prototype.Suivant = function () {
        this.NouvelleMigraine.Debut = this.DateDebut + 'T' + this.JourDebut;
        this.compte.MesMigraines = [];
        this.compte.MesMigraines.push(this.NouvelleMigraine);
        console.log('migraine debut', this.compte.MesMigraines[0]);
        this.compteServiceProvider.changeCompte(this.compte);
        var AffichageFinMigraine = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__pages_questionnaire_questionnaire_fin_migraine_questionnaire_fin_migraine__["a" /* QuestionnaireFinMigrainePage */]);
        AffichageFinMigraine.present();
    };
    QuestionnaireDebutMigrainePage.prototype.Annule = function () {
        console.log('Etat de MesMigraine a l\'annulation : ', this.compte.MesMigraines);
        if (this.compte.MesMigraines.length == 1)
            this.LoginToken();
        //let AffichageHome = this.modalController.create(MenuPage);
        //AffichageHome.present();
        this.viewController.dismiss();
    };
    QuestionnaireDebutMigrainePage.prototype.LoginToken = function () {
        var _this = this;
        this.compteServiceProvider.LoginToken()
            .subscribe(function (retour) {
            _this.compte = retour;
            if (_this.compte.Erreur == null) {
                _this.compte.MesMedicaments = retour.MesMedicaments;
                _this.compte.MesMigraines = retour.MesMigraines;
                localStorage.setItem('Token', _this.compte.Token);
                localStorage.setItem('Compte', JSON.stringify(_this.compte));
                _this.compteServiceProvider.changeCompte(_this.compte);
                _this.compteServiceProvider.AffichageMigraineIncomplete();
                console.log(retour);
            }
        }, function (error) { return console.log(error); });
    };
    QuestionnaireDebutMigrainePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire-debut-migraine',template:/*ion-inline-start:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-debut-migraine\questionnaire-debut-migraine.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Début de la migraine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="blocquestion">\n    <ion-list class="choix">\n        <div class = "question">\n          <p>A quel heure a commencé votre migraine ?</p>\n        </div>\n      <ion-label></ion-label>\n      <ion-item>\n          <ion-label>Date de Début</ion-label>\n          <ion-datetime displayFormat="DDDD DD MMMM YYYY" [(ngModel)]="DateDebut"\n>\n        </ion-datetime>\n      </ion-item>\n      <ion-item class=glissieredateDebut>\n        <ion-range class="glissiereJours" min={{JourMin}} max={{JourMax}} step="1" snaps="true" pin="true" [(ngModel)]="JourModifie" (ionChange)="jourModifie()" color="danger">\n          <ion-icon range-left big name="calendar" (click)="JourMoinUn()"></ion-icon>\n          <ion-icon range-right small name="calendar" (click)="JourPlusUn()"></ion-icon>\n        </ion-range>\n      </ion-item>\n      <ion-label></ion-label>\n      <ion-item>\n          <ion-label>Heure de Début</ion-label>\n          <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm ss" [(ngModel)]="JourDebut"></ion-datetime>\n      </ion-item>\n      <ion-item class=glissiereHeureDebut>\n        <ion-range class="glissiereHeure" min={{HeureMin}} max={{HeureMax}} step="1" snaps="true" pin="true" [(ngModel)]="HeureModifie" (ionChange)="heureModifie()" color="danger">\n          <ion-icon range-left big name="time" (click)="HeureMoinUn()"></ion-icon>\n          <ion-icon range-right small name="time" (click)="HeurePlusUn()"></ion-icon>\n        </ion-range>\n      </ion-item>\n      <ion-label></ion-label>\n    </ion-list>\n    <div class="troisboutons">\n      <button class="boutonprecedent" ion-button color="primary" (click)="Retour()" block> \n          <ion-icon class="flecheAvant" name="arrow-back" item-start></ion-icon>\n      </button>\n      <button class="boutonannule" ion-button color="primary" (click)="Annule()" block> \n          <span>Annule</span>\n      </button>\n      \n      <button class="boutonsuivant" ion-button color="primary" (click)="Suivant()" block> \n          <ion-icon class="flecheApres" name="arrow-forward" item-start></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\travail\projet\MigraineIONIC3Tel\src\pages\questionnaire\questionnaire-debut-migraine\questionnaire-debut-migraine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_compte_compte_service__["a" /* CompteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], QuestionnaireDebutMigrainePage);
    return QuestionnaireDebutMigrainePage;
}());

//# sourceMappingURL=questionnaire-debut-migraine.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map