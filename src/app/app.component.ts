import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Logout } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;// = LoginPage;

  pages: Array<{icon:string, title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    let status:any = false;
    console.info(localStorage.getItem("status"));
    let statusstr:string = JSON.parse(localStorage.getItem("status")); 
    if(statusstr == status){
      this.rootPage = LoginPage;
    }
    else{
      this.rootPage = Page1;
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home' , title: 'Page Login', component: LoginPage },
      { icon: 'star' , title: 'Page Register', component: RegisterPage },
      { icon: 'home' , title: 'Page One', component: Page1 },
      { icon: 'star' , title: 'Page Two', component: Page2 },
      { icon: 'star' , title: 'Logout', component: Logout}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      document.addEventListener("pause", this.onPause, false);
    });
  }
  onPause(){
    //alert('Your application is paused');
    let status:boolean = false;
    localStorage.setItem("status",JSON.stringify(status));
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
