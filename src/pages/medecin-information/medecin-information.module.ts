import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedecinInformationPage } from './medecin-information';

@NgModule({
  declarations: [
    MedecinInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(MedecinInformationPage),
  ],
})
export class MedecinInformationPageModule {}
