import { Component, ViewChild  } from '@angular/core';
import { IonicApp } from 'ionic-angular';
//import { Page } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Page1 } from '../page1/page1';
import { MyApp } from '../../app/app.component';
import { NativeStorage } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  uname:any;
  upass:any;
  constructor(public app:IonicApp,public navCtrl: NavController,public alertCtrl:AlertController,public toastCtrl:ToastController) {
     //this.app.getComponent('leftMenu').enable(false);
    //  let a = 1;
    //  if(a == 1){
    //    this.navCtrl.setRoot(Page1);
    //  }else{
    //    this.navCtrl.setRoot(LoginPage);
    //  }
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  onPageWillLeave() {
    //this.app.getComponent('leftMenu').enable(true);
  }

  callregister(){
    this.navCtrl.push(RegisterPage);
  }

  dologin(){
      //this.navCtrl.setRoot(Page1);
      // this.navCtrl.push(Page1).then(() => {
      //   // const startIndex = this.navCtrl.getActive().index - 1;
      //   // this.navCtrl.remove(startIndex, 1,RegisterPage); 
      //    const index = this.navCtrl.getActive().index;
      //   this.navCtrl.remove(0, index);
      // });;
      if( (this.uname == "" || this.uname == null  ) || (this.upass == "" || this.upass == null) ){
          this.alertCtrl.create({
            title:'Ooops!',
            subTitle:'I Make Wrong Input For Login',
            buttons:['Make']
          }).present();
      }else{
         let d;
         d = JSON.parse(localStorage.getItem("regData")); 
          console.log(" "+d.length);
          let chk:number = 0; 
          for (let i = 0; i < d.length; i++) {
            if(this.uname == d[i].uname && this.upass == d[i].pass){
              localStorage.setItem("uname",this.uname);
              localStorage.setItem("upass",this.upass);
              localStorage.setItem("age",d[i].age);
              let status:boolean = true;
              localStorage.setItem("status",JSON.stringify(status));
              let toast = this.toastCtrl.create({
                    message: 'Welcome to Ionic 2 Dear '+localStorage.getItem("uname")+'!',
                    duration: 4000,
                    position:'middle'
                  });
              toast.present();
              setTimeout(() => { 
                this.navCtrl.push(MyApp);
              }, 1000);
              chk = 0;
              break;
            }else{
              chk = 1;
            }
          }
          if(chk == 1){
            this.alertCtrl.create({
              title:'Sorry!',
              subTitle:'You Are Unauthorized User',
              buttons:['Ok']
            }).present();
          }
      }
    }

}
