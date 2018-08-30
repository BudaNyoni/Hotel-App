import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import {WelcomePage} from '../welcome/welcome';
import { Users } from '../Class';
import { RegisterPage } from '../register/register';

declare var firebase
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
users = {} as Users;

splash = true;
secomndPage = SecondPage;
 



  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public toastCtrl:ToastController) {

  }



ionViewDidLoad(){
  setTimeout(()=> this.splash = false , 3000);
}

NextPage(){
  this.navCtrl.push(WelcomePage)
}


SignIn(user:Users){
firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(()=>{ ;
const alert = this.alertCtrl.create({
  title: 'Sign In!',
  subTitle: 'Succesfully Logged In',
  buttons: ['OK']
});
alert.present();
console.log(user)
// this.navCtrl.push(WelcomePage);

},
(error)=>{
  alert(error)

 })
}


SignUp(user:Users){
  firebase.auth.createUserWithEmailAndPassword(user.email,user.password).then(()=>{
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present(); 
    // this.navCtrl.push(RegisterPage);
   } , 
(error)=>{
alert(error)


  })
}
}


