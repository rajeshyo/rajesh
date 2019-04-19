import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ TaskviewApiProvider} from '../../providers/taskview-api/taskview-api';
import { ExpensePage } from '../../pages/expense/expense';

/**
 * Generated class for the ExpenselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenselist',
  templateUrl: 'expenselist.html',
})
export class ExpenselistPage {
	 ExpenseData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public taskViewService:TaskviewApiProvider) {
	 
	  
taskViewService.ExpenseView()
.then(data=>{
  this.ExpenseData=data;
  console.log(this.ExpenseData);
  }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenselistPage');
  }
addExpense(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ExpensePage);
  }
}
