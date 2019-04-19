import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  pDetails: any;
  sDate:any;
  startDate:any;
  eDate:any;
  endDate:any;
  status:any;
  assign:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
   this.pDetails = navParams.get('dataa');
   
   if (this.pDetails.statut =='2')
   {
   this.status = "Close";
   console.log(this.status);
   }
   else
   {
   this.status="Open";
    console.log(this.status);
   }
   if (this.pDetails.user_author_id =='1')
   {
   this.assign = "Super Admin";
   }
   else if(this.pDetails.user_author_id =='2')
   {
   this.assign="Rahul Patel";
   }
   else(this.pDetails.user_author_id =='3')
   {
   this.assign="Planaswamy Raj";
   }
  this.sDate = new Date(this.pDetails.date_start*1000);
  this.startDate = this.sDate.toGMTString();
  this.eDate = new Date(this.pDetails.date_end*1000);
  this.endDate = this.eDate.toGMTString();
  

  }
   
}
