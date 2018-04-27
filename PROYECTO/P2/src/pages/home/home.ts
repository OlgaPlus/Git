import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dbFirebase:FirebaseDbProvider) {}

	gotoPage(pagina) {
	  this.navCtrl.push(pagina);
	}
	
	irPaginaSiguiente() {
	  this.navCtrl.push('Pag1Page');
	}
	
	showPrompt() {
		let prompt = this.alertCtrl.create({
		  title: 'Restaurar Contraseña',
		  message: "Introduzca el correo asociado a su cuenta donde recibirá un mensaje para poder reestablecer la contraseña.",
		  inputs: [
			{
			  name: 'correo',
			  placeholder: 'correo@dominio.ext'
			},
		  ],
		  buttons: [
			{
			  text: 'Cancelar',
			  handler: data => {
				console.log('Cancel clicked');
			  }
			},
			{
			  text: 'Enviar',
			  handler: data => {
				console.log('Saved clicked');
				let alert = this.alertCtrl.create({
					title: '¡Mensaje enviado!',
					buttons: ['OK']
				});
				alert.present();
			  }
			}
		  ]
		});
		prompt.present();
	}	
	
		listaClientes:any;
			
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
}
