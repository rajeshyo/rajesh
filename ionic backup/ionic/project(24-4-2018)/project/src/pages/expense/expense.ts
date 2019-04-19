import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Http} from '@angular/http';
import { ExpenselistPage } from '../../pages/expenselist/expenselist';


/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {
 data:any;
 userdata:any;
 private todo : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,private formBuilder: FormBuilder) {
   this.todo = this.formBuilder.group({
      user_author_info: ['', Validators.required],
      date_create: ['',Validators.required],
        note_private:['',Validators.required],
    });

   this.data = {};
        this.data.user_author_info = '';
        //this.data.user_validator_infos='';
        this.data.date_create = '';
        this.data.projet_title='';
        this.data.type_fees_libelle='';
        this.data.comments='';
        this.data.total_ttc='';
		this.data.note_private='';
      
         
         this.data.response = '';
         this.http = http;
  }

submitexpense() {
    var link = 'http://localhost:8100/api/expensereports?DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6';

var data={
  "lignes": [],
  "date_debut":  this.data.date_create ,
  "date_fin":  this.data.date_create ,
  "fk_user_validator": "1",
  "status": "2",
  "socid":"",
  "fk_statut": "2",
  "fk_c_paiement": null,
  "paid": null,
  "user_author_infos": "",
  "user_validator_infos": "SuperAdmin",
  "fk_typepayment": null,
  "num_payment": null,
  "code_paiement": null,
  "code_statut": null,
  "date_create":  this.data.date_create ,
  "fk_user_author": this.data.user_author_info,
  "date_modif":  this.data.date_create ,
  "fk_user_modif": null,
  "date_refuse": "",
  "detail_refuse": null,
  "fk_user_refuse": null,
  "date_cancel": "",
  "detail_cancel": null,
  "fk_user_cancel": null,
  "date_valid": null,
  "fk_user_valid": "1",
  "user_valid_infos": null,
  "date_approve": "",
  "fk_user_approve": null,
  "user_paid_infos": null,
  "id": "",
  "import_key": null,
  "array_options": [],
  "linkedObjectsIds": [],
  "canvas": null,
  "fk_project": null,
  "contact": null,
  "contact_id": null,
  "thirdparty": null,
  "user": null,
  "origin": null,
  "origin_id": null,
  "ref": "",
  "ref_ext": null,
  "statut": null,
  "country": null,
  "country_id": null,
  "country_code": null,
  "barcode_type": null,
  "barcode_type_code": null,
  "barcode_type_label": null,
  "barcode_type_coder": null,
  "mode_reglement_id": null,
  "cond_reglement_id": null,
  "cond_reglement": null,
  "fk_delivery_address": null,
  "shipping_method_id": null,
  "modelpdf": null,
  "fk_account": null,
  "note_public": null,
  "note_private":  this.data.note_private,
  "note": null,
  "total_ht": "2000.00000000",
  "total_tva": "0.00000000",
  "total_localtax1": null,
  "total_localtax2": null,
  "total_ttc": "2000.00000000",
  "fk_incoterms": null,
  "libelle_incoterms": null,
  "location_incoterms": null,
  "name": null,
  "lastname": null,
  "firstname": null,
  "civility_id": null,
  "modepaymentid": 0,
  "libelle_statut": null,
  "libelle_paiement": null
}
   


        
        this.http.post(link, data)
        .subscribe(data => {
            this.data.response = data;
            this.navCtrl.push(ExpenselistPage,{});
        }, error=> {
            alert(error.text());
            console.log(error.text());
        });

         
}

  ionViewDidLoad() {
   // console.log('ionViewDidLoad CreatetaskPage');
    this.http.get('http://localhost:8100/api/users?sortfield=t.rowid&sortorder=ASC&DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6 ')
  .map(res=>res.json())
  .subscribe(data=>{
  this.userdata=data;
   }, (err) => {
      console.log(err);
  });
  }

}
