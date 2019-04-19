import { Component } from '@angular/core';
import { IonicPage, ModalController,App, NavController ,NavParams} from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
   module:any;
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,public app: App,public navParams: NavParams) {
    this.currentItems = this.items.query();
    this.module = navParams.get('data');
    console.log(this.module);
       }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
    logout(){
   // this.authService.logout();
    localStorage.clear
    setTimeout(()=>this.backToLogin(),1000);
    (err)=>{
           // reject("Failed");
           console.log(err);
      // alert(err);
    };
  }
backToLogin(){
  let nav = this.app.getRootNav();
  nav.setRoot(LoginPage);
}
  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
