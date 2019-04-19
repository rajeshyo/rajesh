import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
//import { ListMasterPage } from '../list-master/list-master';
import { ModulelistPage } from '../modulelist/modulelist';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
   loginData = {_operation:'loginAndFetchModules', username:'', password:'' };

  public data: any = [];
  user:any;


  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public AuthServicesProvider:AuthServicesProvider,
   // public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
    // Attempt to login in through our User service


  
     doLogin() {
     this.AuthServicesProvider.login(this.loginData).then((result) => {
      this.data = result;
     this.navCtrl.push(ModulelistPage,{
      data:this.data.result.modules
      });
      //localStorage.setItem('user', this.data);
      console.log(this.data);
      //this.navCtrl.setRoot(ListMasterPage,{
      //data:this.data
      //}
      //);
    },(err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
