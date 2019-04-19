import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DownloadDocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-doc',
  templateUrl: 'download-doc.html',
})
export class DownloadDocPage {
	data: any;
	ref:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	    this.data=navParams.get('downdata');
		this.ref=navParams.get('ref');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadDocPage');
  }

}
