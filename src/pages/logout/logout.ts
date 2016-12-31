import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class Logout {

  constructor(public alertCtrl:AlertController,public navCtrl: NavController) {
    this.navCtrl.push(LoginPage);
    let show = this.alertCtrl.create({
          title:'Logout Done!',
          subTitle:'You Logout Successfully',
          buttons:[{
            text:'OK',
            handler:()=>{
              //this.navCtrl.push(LoginPage);
              let status:boolean = false;
              localStorage.setItem("status",JSON.stringify(status));
            }
          }]
        });
        show.present();
  }

  ionViewDidLoad() {
    console.log('Hello logout Page');
  }

}
