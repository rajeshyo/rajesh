import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsertaskviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usertaskview',
  templateUrl: 'usertaskview.html',
})
export class UsertaskviewPage {
	  usertaskview:any;
	  sDate:any;
	  startDate:any;
	  eDate:any;
	  endDate:any;
	  timeSec:any;
	  hours:any;
	  a:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.usertaskview =navParams.get('usertask');
	  this.sDate = new Date(this.usertaskview.date_start*1000);
	  this.startDate = this.sDate.toGMTString();
	  this.eDate = new Date(this.usertaskview.date_end*1000);
	  this.endDate = this.eDate.toGMTString();



    this.timeSec= this.usertaskview.planned_workload;// Json output
    this.hours =this.timeSec/ 3600;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsertaskviewPage');
  }

}
