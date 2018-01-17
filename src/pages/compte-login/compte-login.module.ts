import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteLoginPage } from './compte-login';

@NgModule({
  declarations: [
    CompteLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(CompteLoginPage),
  ],
})
export class CompteLoginPageModule {}
