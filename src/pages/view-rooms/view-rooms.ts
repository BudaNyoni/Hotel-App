import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-rooms',
  templateUrl: 'view-rooms.html',
})
export class ViewRoomsPage {

  obj = this.navParams.get('obj');
  Arr:any []= this.navParams.get('jj');

  name=this.Arr[this.obj].name;
  description=this.Arr[this.obj].description;
  price=this.Arr[this.obj].price;
  pic=this.Arr[this.obj].pic;
  pic2=this.Arr[this.obj].pic2;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRoomsPage');
  }

}
