import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { HomePage } from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  Arr = [
    new Hotel('Montego bay Jamaica','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2000','../../assets/ee9ee05e4471beac86a1d07d545419de.jpg'),
    new Hotel('African Safari','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2000','../../assets/98bd6c9bbcddd1b6d3050b3b5a7f52bf.jpg'),
    new Hotel('Port Elizebeth couple suite','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2000','../../assets/8e529976583ca4e173b4154380418c59.jpg'),
  //   new Hotel('Port Elizebeth couple suite','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2000','../../assets/8e529976583ca4e173b4154380418c59.jpg'),
  //   new Hotel('Port Elizebeth couple suite','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2000','../../assets/8e529976583ca4e173b4154380418c59.jpg')
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  View(){
    // this.navCtrl.push(ViewPage , {obj:i});
    this.navCtrl.push(ViewPage);
  }
  
Back(){
  this.navCtrl.push(HomePage)
}
}

export class Hotel{
  name;
  descriptiopn;
  price;
  pic;


  constructor(name,description,pic,price){
    this.name = name;
    this.descriptiopn = description;
    this.pic = pic;
    this.price = price
  }
}
