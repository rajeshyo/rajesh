import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskviewDetailsPage } from './taskview-details';

@NgModule({
  declarations: [
    TaskviewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskviewDetailsPage),
  ],
})
export class TaskviewDetailsPageModule {}
