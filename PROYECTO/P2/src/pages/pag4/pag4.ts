import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-pag4',
  templateUrl: 'pag4.html'
})
export class Pag4Page {
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
   gotoPage(pagina) {
	  this.navCtrl.push(pagina);
	}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pag4Page');
  }
  
  irPagSiguiente()
  {
	this.navCtrl.push('Pag2Page');
  }
  
  irHome()
  {
	this.navCtrl.setRoot(HomePage);
  }
  
}
