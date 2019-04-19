import { Component,Pipe } from '@angular/core';
import { Http } from '@angular/http';
import{ RestServiceProvider} from '../../providers/rest-service/rest-service';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { TasklistPage } from '../tasklist/tasklist';
import {DownloadDocPage  } from '../download-doc/download-doc';
import { MytaskPage } from '../mytask/mytask';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[RestServiceProvider]
  
})
@Pipe({name: 'toArray'})
export class ListPage {
  icons: string[];
  data: any;
  taskdata:any;
  downdata:any;
  ddata:any;
  tId:any;
  user:any;
  uid:any;
  mytaskdata:any;
  mytasklist:any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restService:RestServiceProvider,public authService:AuthService,public http:Http) {
  // this.user = localStorage.getItem("user");
 
  // getData(){
  //this.LocalStorageData = JSON.parse(localStorage.getItem("DEMO data"));
//}
  // console.log(this.user);
  restService.load()
  .then(data=>{
  this.data=data;
  console.log(data);
  })
  
  //restService.viewTask(this.tId)
  //.then(data=>{
  //this.taskdata=data;
//console.log(this.taskdata);
  //})
    this.icons = ['clipboard'];


    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Project' + i,
        note: 'Project#' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  
ngOnInit() {
  this.user = this.authService.getUser();
  console.log(this.user);
}
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    
    });
  }
  viewTasklist(event, id){
   
   // alert(id);

   this.http.get('http://localhost:8100/api/projects/'+id+'/tasks?DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6 ')
  .map(res=>res.json())
  .subscribe(data=>{
  this.taskdata=data;
   this.navCtrl.push(TasklistPage,{
      taskdata: this.taskdata,
     id : id

    })
 // resolve(this.taskdata);
  console.log(this.taskdata);
   }, (err) => {
      console.log(err);
  });
   
  }
  
   downloadFile(event,ref){
   
   // alert(id);

   this.http.get('http://localhost:8100/api/documents/listofdoc?filepath=projet/'+ref+'&DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6')
  .map(res=>res.json())
  .subscribe(data=>{
  this.ddata=data;
  console.log(this.ddata);
   this.navCtrl.push(DownloadDocPage,{
      downdata: this.ddata,
     ref : ref

    })
 // resolve(this.taskdata);
  console.log(this.taskdata);
   }, (err) => {
      console.log(err);
  });  
  }
  viewItem(event, dataa){
  this.navCtrl.push(ItemDetailsPage, {
      dataa: dataa
  })
}
 myTask(event,id){
   this.http.get('http://localhost:8100/api/tasks/taskofuser?fk_socpeople='+id+'&DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6')
  .map(res=>res.json())
  .subscribe(data=>{
  this.mytaskdata=data;
  //console.log(this.mytaskdata);
  this.navCtrl.push(MytaskPage, {
     mytasklist:this.mytaskdata
  })
});
}
}