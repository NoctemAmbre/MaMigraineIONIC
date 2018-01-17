import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MigraineInformationPage } from './migraine-information';

@NgModule({
  declarations: [
    MigraineInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(MigraineInformationPage),
  ],
})
export class MigraineInformationPageModule {}
