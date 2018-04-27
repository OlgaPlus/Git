import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { Pag1Page } from '../pages/pag1/pag1';
import { Pag2Page } from '../pages/pag2/pag2';
import { Pag3Page } from '../pages/pag3/pag3';
import { Pag4Page } from '../pages/pag4/pag4';
import { Pag5Page } from '../pages/pag5/pag5';
//import { Pag6Page } from '../pages/pag6/pag6';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'PaginaPrincipalP', component: Pag1Page },
      { title: 'PaginaAsignaturaP', component: Pag2Page },
      { title: 'PaginaVideoP', component: Pag3Page },
	  { title: 'PaginaPrincipalA', component: Pag4Page },
	  { title: 'PaginaAsignaturaA', component: Pag5Page },
	  //{ title: 'PaginaVideoA', component: Pag6Page }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  

}




