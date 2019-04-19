import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UpdatetaskPage}from '../updatetask/updatetask';

/**
 * Generated class for the TaskviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskview-details',
  templateUrl: 'taskview-details.html',
})
export class TaskviewDetailsPage {
  tDetails: any;
  sDate:any;
  startDate:any;
  eDate:any;
  endDate:any;
  timeSec:any;
  hours:any;
  a:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   this.tDetails = navParams.get('dataa');
  

  this.sDate = new Date(this.tDetails.date_start*1000);
  this.startDate = this.sDate.toGMTString();
  this.eDate = new Date(this.tDetails.date_end*1000);
  this.endDate = this.eDate.toGMTString();



    this.timeSec= this.tDetails.planned_workload;// Json output
    this.hours =this.timeSec/ 3600;
    






   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskviewDetailsPage');

  }
   //updateTask(){
   // this.navCtrl.push(UpdatetaskPage);
  //}
   updateTask(event,pid,id){
  this.navCtrl.push(UpdatetaskPage, {
      pid : pid,
      id : id
  })
}

}
