import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsertaskviewPage } from '../usertaskview/usertaskview';

UsertaskviewPage

/**
 * Generated class for the MytaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html',
})
export class MytaskPage {
usertasklist:any;
usertask:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
	  this.usertasklist = navParams.get('mytasklist');
	  console.log(this.usertasklist);
  }

  
 viewuserTaskDetails(event,usertask){
  this.navCtrl.push(UsertaskviewPage, {
      usertask: usertask
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MytaskPage');
	
  }

}
