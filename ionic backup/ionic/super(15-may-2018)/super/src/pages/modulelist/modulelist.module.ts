import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModulelistPage } from './modulelist';

@NgModule({
  declarations: [
    ModulelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ModulelistPage),
  ],
})
export class ModulelistPageModule {}
