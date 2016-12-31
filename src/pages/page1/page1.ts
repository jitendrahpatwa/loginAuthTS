import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
declare var google;
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  username:any;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController) {
    this.username = localStorage.getItem("uname");
  }
  ionViewLoaded(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(19.018044, 72.843620);
      let uluru = {lat: 19.018044, lng: 72.843620};
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
      let marker = new google.maps.Marker({
        position: uluru,
        map: this.map,
        icon:'http://www.enterprisingfairs.in/images/map-icon.png',
         animation: google.maps.Animation.DROP,
        title: 'Uluru (Ayers Rock)'
      });
      marker.addListener('click', function() {
        //infowindow.open(map, marker);
    });
  }

  something(){
    let toast = this.toastCtrl.create({
       message: 'Welcome to Ionic 2',
       duration: 3000,
       cssClass:'mytoast',
       position:'middle'
     });
     toast.present();
    console.log("something called");
  }
}
