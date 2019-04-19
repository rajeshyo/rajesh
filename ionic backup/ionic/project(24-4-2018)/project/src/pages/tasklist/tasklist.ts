import { Component } from '@angular/core';
import{ TaskviewApiProvider} from '../../providers/taskview-api/taskview-api';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskviewDetailsPage } from '../taskview-details/taskview-details';
import{ RestServiceProvider} from '../../providers/rest-service/rest-service';
import {CreatetaskPage}from '../createtask/createtask';

/**
 * Generated class for the TasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html',
  providers:[TaskviewApiProvider]
})
export class TasklistPage {
data: any;
taskdata:any;
tId:any;
tdata:any;
ldata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public taskView:TaskviewApiProvider,public restService:RestServiceProvider) {
  this.tId=navParams.get('id');
  this.tdata=navParams.get('taskdata');
   this.ldata=navParams.get('data');
  console.log(this.tId);
   console.log(this.tdata);
   console.log(this.ldata);
 // restService.viewTask(this.tId)
//.then(data=>{
 // this.taskdata=data;
 // console.log(this.taskdata);
  //}) 
  }
 addTask(){
    this.navCtrl.push(CreatetaskPage,{
    pid:this.tId
    });

  }
  viewTaskDetails(event, dataa){
  this.navCtrl.push(TaskviewDetailsPage, {
      dataa: dataa
  })
}
}
