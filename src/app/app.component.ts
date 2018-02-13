import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HttpClient } from '@angular/common/http';
//import { NavController } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = MenuPage;
   

  //constructor(private compteServiceProvider : CompteServiceProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //(window as any).StatusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

