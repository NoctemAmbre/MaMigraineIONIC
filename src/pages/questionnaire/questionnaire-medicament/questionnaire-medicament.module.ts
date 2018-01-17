import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionnaireMedicamentPage } from './questionnaire-medicament';

@NgModule({
  declarations: [
    QuestionnaireMedicamentPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionnaireMedicamentPage),
  ],
})
export class QuestionnaireMedicamentPageModule {}
