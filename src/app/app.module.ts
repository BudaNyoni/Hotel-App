import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ViewRoomsPage } from "../pages/view-rooms/view-rooms";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { WelcomePage } from "../pages/welcome/welcome";
import {ViewPage} from '../pages/view/view';
import { BookingPage } from "../pages/booking/booking"; 
import { RegisterPage } from '../pages/register/register';
import { ConfirmPage } from '../pages/confirm/confirm';
ConfirmPage

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    WelcomePage,
    ViewPage,
    RegisterPage,
    ViewRoomsPage,
    BookingPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    WelcomePage,
    ViewPage,
    RegisterPage,
    ViewRoomsPage,
    BookingPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
