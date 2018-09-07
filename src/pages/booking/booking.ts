import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {Details} from '../BookingList';
import { ConfirmPage } from '../confirm/confirm';
import { Observable } from 'rxjs/Observable';

declare var firebase
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  itemList = []
bookingList;
itemref$:any;
item:Observable< any[]>;
name;
checkIn;
checkOut;
adults;
children;
rooms
 constructor(public navCtrl: NavController, public navParams: NavParams) {

var users = firebase.auth().currentUser;
     firebase.database().ref('bookingList' ).on('value',(data:any)=>{
 
   var name = data.val();
   var checkIn = data.val();
   var checkOut = data.val();
   var adults = data.val();
   var children = data.val();
   var rooms = data.val();

  var keys = Object.keys(name);
  var keys = Object.keys(checkIn);
  var keys = Object.keys(checkOut);
  var keys = Object.keys(adults);
  var keys = Object.keys(children);
  var keys = Object.keys(rooms);

  for(var i = 0; i < keys.length; i++){
       var k = keys[i];

       let obj = {
         item1:name[k].name,
         item2:checkIn[k].checkIn,
         item3:checkOut[k].checkOut,
         item4:adults[k].adults,
         item5:children[k].children,
         item6:rooms[k].rooms,
         key:k
       }

this.itemList.push(obj);
console.log(this.itemList)
  }
});
  }


  gotData(data){


    console.log(data.val());
    var bookingList = data.val();
    var keys = Object.keys(bookingList);
    console.log(keys);
    
     for (var i = 0; i < keys.length; i++){
       var k = keys[i];

      let obj = {
        name:bookingList[k].bookingList,
        checkIn:bookingList[k].bookingList,
        checkOut:bookingList[k].bookingList,
        adults:bookingList[k].bookingList,
        children:bookingList[k].bookingList,
        rooms:bookingList[k].bookingList,
        key:k 
      }
    
      this.itemList.push(obj);
    
      console.log(this.itemList);
      
      
     
     }
    
      }
     errData(err){
        console.log('error');
        console.log(err)
          }
Addbookings(name,checkIn,checkOut,adults,children,rooms){
  // var users = firebase.auth().currentUser;
  this.itemref$ = firebase.database().ref('bookingList' ).push({
    name:name,
    checkIn:checkIn,
    checkOut:checkOut,
    adults:adults,
    children:children,
    rooms:rooms
  });
}

    Add(i){
  

    this.itemList = []
    this.Addbookings(this.name,this.checkIn,this.checkOut,this.adults,this.children,this.rooms)
    // this.itemList.push(this.itemref$);
    
      // this.navCtrl.push(ConfirmPage, {obj:i , jj:this.itemList});
    
    this.navCtrl.push(ConfirmPage);
    // this.itemList.pop();
    console.log(this.itemList);
  }
}
