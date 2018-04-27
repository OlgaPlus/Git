import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import {Cliente} from '../../models/cliente.model';

/**
 * Generated class for the Pag3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag3',
  templateUrl: 'pag3.html',
})
export class Pag3Page {

  listaClientes:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {

  }
  
  gotoPage (pagina) {
	  this.navCtrl.push(pagina);  
  }
  
  addCliente2()
  {
		let datoscliente:Cliente=new Cliente();
	  
		datoscliente.nombre="Pepe";
		datoscliente.apellidos="San Juan";
	  
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
			alert(datoscliente.id+ " guardado en FB");
		});
	  
  }
  
  updateCliente(id)
  {
	  let datoscliente:Cliente=new Cliente();
	  datoscliente.id=id;
	  datoscliente.nombre="Maria";
	  datoscliente.apellidos="de las mercedes";
	  
	  this.dbFirebase.guardaCliente(datoscliente);
  }
  
  ionViewDidEnter()
  {
	  this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
  }
   
  delCliente(id)
  {
	  this.dbFirebase.delCliente(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pag3Page');
  }
  
  irPagAnterior()
  {
	  this.navCtrl.pop();
  }
   
  irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }
   

}
