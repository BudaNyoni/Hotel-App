import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Users } from '../Class';
import { HomePage } from '../home/home';
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
  FireAuthRef;
  users = {} as Users;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public toastCtrl:ToastController) {
    this.FireAuthRef = firebase.database().ref('Users').on('value', (data: any) => {
      
    });

    var user = firebase.auth().currentUser;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  SignUp(user:Users){
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(()=>{
      const toast = this.toastCtrl.create({
              message: 'User was Registerd successfully' + user.email,
              duration: 3000
            });
            toast.present(); 
     
      this.navCtrl.push(HomePage);
     } , 
  (error)=>{
  alert(error)
  
  
    })
  }
}
