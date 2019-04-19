import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CreatetaskPage } from '../pages/createtask/createtask';
import { ExpensePage } from '../pages/expense/expense';
import { ExpenselistPage } from '../pages/expenselist/expenselist';
import { TasklistPage } from '../pages/tasklist/tasklist';
import { TaskviewDetailsPage } from '../pages/taskview-details/taskview-details';
import { UpdatetaskPage } from '../pages/updatetask/updatetask';
import { DownloadDocPage } from '../pages/download-doc/download-doc';
import { MytaskPage } from '../pages/mytask/mytask';
import { UsertaskviewPage  } from '../pages/usertaskview/usertaskview';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestServiceProvider } from '../providers/rest-service/rest-service';
import { TaskviewApiProvider } from '../providers/taskview-api/taskview-api';
import { AuthService } from '../providers/auth-service/auth-service';




@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	LoginPage,
    CreatetaskPage,
    ExpensePage,
    ExpenselistPage,
	 TasklistPage,
    TaskviewDetailsPage,
    UpdatetaskPage,
	DownloadDocPage,
	MytaskPage,
	UsertaskviewPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	LoginPage,
    CreatetaskPage,
    ExpensePage,
    ExpenselistPage,
	TasklistPage,
    TaskviewDetailsPage,
    UpdatetaskPage,
	DownloadDocPage,
	MytaskPage,
	UsertaskviewPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServiceProvider,
    TaskviewApiProvider,
	 AuthService,

  ]
})
export class AppModule {}
