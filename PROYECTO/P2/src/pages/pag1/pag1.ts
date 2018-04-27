import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-pag1',
  templateUrl: 'pag1.html'
})
export class Pag1Page {
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pag1Page');
  }
  
    irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }

}
