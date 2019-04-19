//import {OnInit, Component} from "@angular/core";
import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { ListPage } from '../list/list';
/**
 * Generated class for the CreatetaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtask',
  templateUrl: 'createtask.html'
    
  
})
export class CreatetaskPage {
	private todo : FormGroup;
 data:any;
 data1: any;
 projectid:any;
  //myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, private formBuilder: FormBuilder) {
	  this.todo = this.formBuilder.group({
      label: ['', Validators.required],
      description: ['',Validators.required],
	  date_start:[''],
	  date_end:[''],
	  planned_workload:[''],
	  progress:[''],
	  note_public:['']
    });
      this.projectid = navParams.get('pid');
      console.log(this.projectid);
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
		this.data.id='';
         
         this.data.response = '';
         this.http = http;
  }


submit() {
	//http://magento2solution.com/testing/api/index.php/
    var link = 'http://localhost:8100/api/tasks?DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6 ';

	
    var data={"fk_task_parent": "0",
    "label": this.data.label,
    "description":this.data.description,
    "duration_effective": "0",
    "planned_workload": this.data.planned_workload,
    "date_c": "",
    "date_start": this.data.date_start,
    "date_end":  this.data.date_end,
    "progress": this.data.progress,
    "fk_statut": "0",
    "priority": "0",
    "fk_user_creat": "1",
    "fk_user_valid": null,
    "rang": "0",
    "timespent_min_date": null,
    "timespent_max_date": null,
    "timespent_total_duration": null,
    "timespent_total_amount": null,
    "timespent_nblinesnull": null,
    "timespent_nblines": null,
    "id": this.data.id,
    "import_key": null,
    "array_options": {},
    "linkedObjectsIds": null,
    "context": [],
    "canvas": null,
    "fk_project": this.projectid,
    "contact": null,
    "contact_id": null,
    "thirdparty": null,
    "user": null,
    "origin": null,
    "origin_id": null,
    "ref": this.data.ref,
    "ref_ext": null,
    "statut": null,
    "modelpdf": null,
    "note_public": this.data.note_public,
    "note_private": null,
    "lines": null
  }
        
        this.http.post(link, data)
        .subscribe(data => {
            this.data.response = data.json();

         this.navCtrl.push(ListPage,{});
        }, error => {
            //Failed to Login.
            alert(error.text());
            console.log(error.text());
        });


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatetaskPage');
  }
     
}
