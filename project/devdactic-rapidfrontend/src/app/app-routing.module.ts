import { Routes, RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppSettings } from 'app-settings.service';
import {TodoService} from 'todo-service.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [IonicApp],
  providers: [TodoService, AppSettings, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

})
export class AppRoutingModule { }
