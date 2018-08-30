import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { HomePage } from '../home/home';
import { ViewRoomsPage } from '../view-rooms/view-rooms';


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
    new Hotel('Montego bay Hotel','Relax and enjoy the beautiful white sandy beaches of Montego Bay, Jamaica. Plan your trip by discovering one-of-a-kind things to do, fantastic hotels, and more.','2000 for 4 Nights',
    "../../assets/ee9ee05e4471beac86a1d07d545419de.jpg","../../assets/8e529976583ca4e173b4154380418c59.jpg"),
    new Hotel('African Safari','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','1850 for 3 nights',
    "../../assets/98bd6c9bbcddd1b6d3050b3b5a7f52bf.jpg","../../assets/Top30PlacesInSouthAfrica_016.jpg"),
    new Hotel('Table Bay Hotel','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','3470 for 5 nights',
    "../../assets/eceadacfdabeeacfb03fa5d51294784d.jpg","../../assets/5720dbbb53f25ea6098122b77f7b43c1.jpg"),
    new Hotel('The Palace of the Lost City Hotel','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','2345 for 5 nights',
    "../../assets/dfaacab1f4e22e5ff8f30ba6b520d7c5.jpg", "../../assets/610bd682955ccff530a644b9755260c3.jpg"),
    new Hotel('Cape Grace Hotel','Imagine discovering luxury beachfront accommodation in Port Elizabeth that is as friendly and welcoming as the city that it calls home','4000 for 6 nights',
    "../../assets/af6c09ead5a7d3789bc1f1ed29903122.jpg","../../assets/e750e1004fd32744f0363735026e04de.jpg")
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  View(i){
    
    // this.navCtrl.push(ViewPage , {obj:this.Arr[i]});
    this.navCtrl.push(ViewPage , {obj:i , jj:this.Arr});
    console.log(this.Arr[i]);
    
  }

  Rooms(i){
    this.navCtrl.push(ViewRoomsPage, {obj:i , jj:this.Arr})
  }
  // Sports(i){
 
  //   this.navCtrl.push(ViewsportsPage , {obj:i});
  // }
  
Back(){
  this.navCtrl.push(HomePage);
}
}

export class Hotel{
  name;
  description;
  price;
  pic;
  pic2;


  constructor(name,description,price,pic,pic2){
    this.name = name;
    this.description = description;
    this.price = price
    this.pic = pic;
    this.pic2 = pic2;
  }
}
