import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

declare var firebase
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
itemList = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // firebase.database().ref('bookingList').on('value',(data:any)=>{

    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }
  // gotData(data){


  //   console.log(data.val());
  //   var bookingList = data.val();
  //   var keys = Object.keys(bookingList);
  //   console.log(keys);
    
  //    for (var i = 0; i < keys.length; i++){
  //      var k = keys[i];

  //     let obj = {
  //       name:bookingList[k].bookingList,
  //       checkIn:bookingList[k].bookingList,
  //       checkOut:bookingList[k].bookingList,
  //       adults:bookingList[k].bookingList,
  //       children:bookingList[k].bookingList,
  //       rooms:bookingList[k].bookingList,
  //       key:k 
  //     }
    
  //     this.itemList.push(obj);
    
  //     console.log(this.itemList);
      
      
     
  //    }
    
  //     }
  //    errData(err){
  //       console.log('error');
  //       console.log(err)
  //         }
}
