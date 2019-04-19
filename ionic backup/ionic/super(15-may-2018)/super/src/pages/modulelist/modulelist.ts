import { Component } from '@angular/core';
import { IonicPage, ModalController,App, NavController ,NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ModulelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modulelist',
  templateUrl: 'modulelist.html',
})
export class ModulelistPage {
//module:any;
//module: Array<any> = [];
public module: any = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
    this.module = navParams.get('data');
    console.log(this.module.id);
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ModulelistPage');
  }
 logout(){
   // this.authService.logout();
    localStorage.clear
    setTimeout(()=>this.backToLogin(),1000);
    (err)=>{
           // reject("Failed");
           console.log(err);
      // alert(err);
    };
  }
  backToLogin(){
  let nav = this.app.getRootNav();
  nav.setRoot(LoginPage);
}
}
