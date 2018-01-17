import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacteurInformationPage } from './facteur-information';

@NgModule({
  declarations: [
    FacteurInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(FacteurInformationPage),
  ],
})
export class FacteurInformationPageModule {}
