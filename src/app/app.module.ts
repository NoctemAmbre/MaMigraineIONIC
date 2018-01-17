import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { MigraineHistoriquePage } from '../pages/migraine-historique/migraine-historique';
import { MigraineNouvellePage } from '../pages/migraine-nouvelle/migraine-nouvelle';
import { CompteLoginPage } from '../pages/compte-login/compte-login';
import { MedecinInformationPage } from '../pages/medecin-information/medecin-information';
import { MedicamentInformationPage } from '../pages/medicament-information/medicament-information';
import { FacteurInformationPage } from '../pages/facteur-information/facteur-information';
import { MigraineInformationPage } from '../pages/migraine-information/migraine-information';
import { QuestionnaireDebutMigrainePage } from '../pages/questionnaire/questionnaire-debut-migraine/questionnaire-debut-migraine';
import { QuestionnaireFinMigrainePage } from '../pages/questionnaire/questionnaire-fin-migraine/questionnaire-fin-migraine';
import { QuestionnaireIntensiteMigrainePage } from '../pages/questionnaire/questionnaire-intensite-migraine/questionnaire-intensite-migraine';
import { QuestionnaireMedicamentPage } from '../pages/questionnaire/questionnaire-medicament/questionnaire-medicament';
import { QuestionnaireFacteurPage } from '../pages/questionnaire/questionnaire-facteur/questionnaire-facteur';

import { CompteServiceProvider } from '../providers/compte/compte-service';
import { MedecinServiceProvider } from '../providers/medecin/medecin-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CompteLoginPage,
    MigraineHistoriquePage,
    MigraineNouvellePage,
    MedecinInformationPage,
    MedicamentInformationPage,
    FacteurInformationPage,
    MigraineInformationPage,
    QuestionnaireDebutMigrainePage,
    QuestionnaireFinMigrainePage,
    QuestionnaireIntensiteMigrainePage,
    QuestionnaireMedicamentPage,
    QuestionnaireFacteurPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CompteLoginPage,
    MigraineHistoriquePage,
    MigraineNouvellePage,
    MedecinInformationPage,
    MedicamentInformationPage,
    FacteurInformationPage,
    MigraineInformationPage,
    QuestionnaireDebutMigrainePage,
    QuestionnaireFinMigrainePage,
    QuestionnaireIntensiteMigrainePage,
    QuestionnaireMedicamentPage,
    QuestionnaireFacteurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompteServiceProvider,
    MedecinServiceProvider
  ]
})
export class AppModule {}
