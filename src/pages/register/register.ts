import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Users } from '../Class';
declare var firebase
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  users = {} as Users;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  SignUp(user:Users){
    firebase.auth.createUserWithEmailAndPassword(user.email,user.password).then(()=>{
    
      // this.navCtrl.push(RegisterPage);
     } , 
  (error)=>{
  alert(error)
  
  
    })
  }
}
