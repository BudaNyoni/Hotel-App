import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';



/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage implements OnInit{

  obj = this.navParams.get('obj');
  Arr:any []= this.navParams.get('jj');

  name=this.Arr[this.obj].name;
  description=this.Arr[this.obj].description;
  price=this.Arr[this.obj].price;
  pic=this.Arr[this.obj].pic;
  pic2=this.Arr[this.obj].pic2;
  
 
  // indx  =this.navParams.get("obj");
  // obj;

// obj = this.navParams.get('obj');

// Arr:any []= this.navParams.get('obj');


// name=this.Arr[this.obj].name;
// desctiption=this.Arr[this.obj].desctiption;
// price = this.Arr[this.obj].price;
// pic=this.Arr[this.obj].pic;
// pic2=this.Arr[this.obj].pic2;
  // object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
  // this.object = this.navParams.get('obj');
  // console.log(this.object);
  }
  
}
