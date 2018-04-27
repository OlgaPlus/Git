import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { Pag1PageModule } from '../pages/pag1/pag1.module';
import { Pag2PageModule } from '../pages/pag2/pag2.module';
import { Pag3PageModule } from '../pages/pag3/pag3.module';
import { Pag4PageModule } from '../pages/pag4/pag4.module';
import { Pag5PageModule } from '../pages/pag5/pag5.module';
//import { Pag6PageModule } from '../pages/pag6/pag6.module';

export const fireBaseConfig={
	apiKey: "AIzaSyDuZH454-a8v05TUaRa5wG8N911-0DwuGE",
    authDomain: "dsi-ionic.firebaseapp.com",
    databaseURL: "https://dsi-ionic.firebaseio.com",
    projectId: "dsi-ionic",
    storageBucket: "dsi-ionic.appspot.com",
	messagingSenderId: "652473996242"};

	
@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ListPage
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(fireBaseConfig),AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}
