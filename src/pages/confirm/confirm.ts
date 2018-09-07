import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { Observable } from 'rxjs/Observable';
import { Users } from '../Class';



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
itemList = [];
user = {} as Users;
// obj = this.navParams.get('obj');
// itemList:any []= this.navParams.get('jj');

// name=this.itemList[this.obj].name;
// checkIn=this.itemList[this.obj].checkIn;
// checkOut=this.itemList[this.obj].checkOut;
// adults=this.itemList[this.obj].adults;
// children=this.itemList[this.obj].children;
// rooms=this.itemList[this.obj].rooms;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var users = firebase.auth().currentUser;
    firebase.database().ref('bookingList/' + users.uid ).on('value',(data:any)=>{
      var name = data.val();
      var checkIn = data.val();
      var checkOut = data.val();
      var adults = data.val();
      var children = data.val();
      var rooms = data.val();
      // var email = data.val();
   
     var keys = Object.keys(name);
    //  var keys = Object.keys(checkIn);
    //  var keys = Object.keys(checkOut);
    //  var keys = Object.keys(adults);
    //  var keys = Object.keys(children);
    //  var keys = Object.keys(rooms);
    //  var key = Object.keys(email)
   
     for(var i = 0; i < keys.length; i++){
          var k = keys[i];
   
          let obj = {
            item1:name[k].name,
            item2:checkIn[k].checkIn,
            item3:checkOut[k].checkOut,
            item4:adults[k].adults,
            item5:children[k].children,
            item6:rooms[k].rooms,
            // item7:email[k].email,
            key:k
          }
   
   this.itemList.push(obj);
   console.log(this.itemList)
     }
    })
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
