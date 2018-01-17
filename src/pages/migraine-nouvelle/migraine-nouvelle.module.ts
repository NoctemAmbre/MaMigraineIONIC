import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MigraineNouvellePage } from './migraine-nouvelle';

@NgModule({
  declarations: [
    MigraineNouvellePage,
  ],
  imports: [
    IonicPageModule.forChild(MigraineNouvellePage),
  ],
})
export class MigraineNouvellePageModule {}
