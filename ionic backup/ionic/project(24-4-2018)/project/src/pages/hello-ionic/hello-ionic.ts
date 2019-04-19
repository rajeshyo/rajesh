import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
 
  loading: any;
  isLoggedIn: boolean = false;

  constructor(public app: App, public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   
 if(localStorage.getItem("user")) {
      this.isLoggedIn = true;
    }
  }

  /* logout() {
    this.authService.logout().then((result) => {
      this.loading.dismiss();
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
	  console.log('opps');
    });
  } */
  logout(){
	 // this.authService.logout();
	  localStorage.clear
	  setTimeout(()=>this.backToLogin(),1000);
	  (err)=>{
		  this.loading.dismiss();
		  
		  this.presentToast(err);
	  };
  }
backToLogin(){
	let nav = this.app.getRootNav();
	nav.setRoot(LoginPage);
}
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
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