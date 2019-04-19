import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Http,RequestOptions,Headers } from '@angular/http';
import { ListPage } from '../list/list';

/**
 * Generated class for the UpdatetaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatetask',
  templateUrl: 'updatetask.html',
})
export class UpdatetaskPage {
	private todo : FormGroup;
data:any;
 data1: any;
 Tid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,private formBuilder: FormBuilder) {
	   this.todo = this.formBuilder.group({
      progress: ['', Validators.required],
      note_public: ['',Validators.required]
	 
    });
    this.Tid = navParams.get('id');
  this.data = {};
        this.data.ref = '';
        this.data.fk_task_parent='';
        this.data.label = '';
        this.data.description='';
		this.data.options_cf_remarks='';
        this.data.duration_effective='';
        this.data.planned_workload='';
        this.data.date_c='';
        this.data.date_start='';
        this.data.date_end='';
        this.data.progress='';
        this.data.fk_statut='';
        this.data.priority='';
        this.data.fk_user_creat='';        
        this.data.fk_user_valid='';
        this.data.rang='';
        this.data.timespent_min_date='';
        this.data.timespent_max_date='';
        this.data.timespent_total_duration='';
        this.data.timespent_total_amount='';
        this.data.timespent_nblinesnull='';
        this.data.timespent_nblines='';
        this.data.id='';
        this.data.import_key='';
        this.data.linkedObjectsIds='';
        this.data.context='';
        this.data.canvas='';
        this.data.fk_project='';
        this.data.contact='';
        this.data.contact_id='';
        this.data.thirdparty='';
        this.data.user='';
        this.data.origin='';
        this.data.origin_id='';
        this.data.ref='';
        this.data.ref_ext='';
        this.data.statut='';
        this.data.modelpdf='';
        this.data.note_public='';
        this.data.note_private='';
        this.data.lines='';
         
         this.data.response = '';
         this.http = http;
  }


submit(){
    var data={
   //"label": this.data.label,
   // "planned_workload": this.data.planned_workload,
   // "date_start": this.data.date_start,
   // "date_end":  this.data.date_end,
   // "description":this.data.description,
    "progress": this.data.progress,
	 //"array_options": {"options_remarks":this.data.options_remarks},
    "note_public":  this.data.note_public,
  }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return new Promise(resolve => {
      this.http.put('http://localhost:8100/api/tasks/'+this.Tid+'?DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6 ',data, options)
        .subscribe(
          response => {
            console.log(response);

         this.navCtrl.push(ListPage,{});
          },
          error => {
            //Failed to Login.
            alert(error.text());
            console.log(error.text());
          });
     });
 }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatetaskPage');
  }

}
