import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  //loginData:any;
  loginData = { login:'', password:'' };
  data: any;
  user:any;

  constructor(public http: Http,public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
	  
	   /* this.loginData = {};
        this.loginData.login = '';
        this.loginData.password ='';
		this.loginData.response = '';
         this.http = http; */
    
  }

  /* doLogin() {
	  
	  // var data={"login":this.loginData.login,"password":this.loginData.password,"entity": 0,"reset": 0}
	   var data={"login":this.loginData.login,"password":this.loginData.password,"entity": 0,"reset": 0}
    this.showLoader();
    this.authService.login(this.data).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.token);
      this.navCtrl.setRoot(HelloIonicPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  } */
  
   doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
    //  this.navCtrl.push(TasklistPage,{
     // data:this.data
     // });
      //localStorage.setItem('user', this.data);
      //console.log(this.data);
      this.navCtrl.setRoot(HelloIonicPage,{
      data:this.data
      }
      );
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }
  
ngOnInit() {
  this.user = this.authService.getUser();
  console.log(this.user);
}
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}