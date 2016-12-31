import { Component } from '@angular/core';
import { IonicApp } from 'ionic-angular';
//import { Page } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  name:any;
  uname:any;
  age:number;
  pass:any;
  constructor(public app:IonicApp,public navCtrl: NavController,public alertCtrl: AlertController) {
    //this.app.getComponent('leftMenu').enable(false);
  }

  ionViewDidLoad() {
    //localStorage.setItem("regData","");
    console.log('Hello RegisterPage Page');
  }

  onPageWillLeave() {
   // this.app.getComponent('leftMenu').enable(true);
  }

  calllogin(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    let regData:any = [];
    let arr =  new Array();
    console.log("Before insert "+localStorage.getItem("regData"));
    if( (this.name == "" || this.name == null ) || (this.age == 0 || this.age == null ) ||
        (this.uname == "" || this.uname == null ) || (this.pass == "" || this.pass == null ) )
    {
      console.log("I tried to submit empty fields.");
    }
    else if(this.age < 18 || this.age > 80)
    {
      console.error("Sorry You Are Not Accessible Or Right Person To Register");
    }
    else
    {

      regData = {
        'name':this.name,
        'age':this.age,
        'uname':this.uname,
        'pass':this.pass
      };
      if(localStorage.getItem("regData") == "" || localStorage.getItem("regData") == null || localStorage.getItem("regData") == undefined){
        console.error("Yet Not Stored");//first time
        arr.push(regData);
      }else{
        arr = JSON.parse(localStorage.getItem("regData"));
        arr.push(regData);
      }
        localStorage.setItem("regData",JSON.stringify(arr));
        
        
        console.log("Here should be stored");
        
        console.warn("After reg: "+localStorage.getItem("regData"));
        
        let show = this.alertCtrl.create({
          title:'Registration Complete!',
          subTitle:'Dear '+this.name+'! Now You Can Login...',
          buttons:[{
            text:'OK',
            handler:()=>{
              this.navCtrl.push(LoginPage);
            }
          }]
        });
        show.present();
      
    }
    
  }
}
