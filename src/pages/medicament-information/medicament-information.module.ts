import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentInformationPage } from './medicament-information';

@NgModule({
  declarations: [
    MedicamentInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicamentInformationPage),
  ],
})
export class MedicamentInformationPageModule {}
