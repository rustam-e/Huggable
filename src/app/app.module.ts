import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SwingModule } from 'angular2-swing';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';

// import services
import {AuthProvider} from '../providers/auth-provider';
import {UserService} from '../services/user-service';
import {ChatService} from '../services/chat-service';
import {PostService} from '../services/post-service';
import {DateService} from '../services/date-service';
import {NotificationService} from '../services/notification-service';
// end import services

// import pages
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {WelcomePage} from '../pages/welcome/welcome';
import {MatchPage} from '../pages/match/match';
import {MessagesPage} from '../pages/messages/messages';
import {MeetPage} from '../pages/meet/meet';
import {FilterPage} from '../pages/filter/filter';
import {NotificationsPage} from '../pages/notifications/notifications';
import {UserDetailPage} from '../pages/user-detail/user-detail';
import {ChatDetailPage} from '../pages/chat-detail/chat-detail';
import {DatePage} from '../pages/date/date';
import {SettingPage} from '../pages/setting/setting';
// end import pages

class CameraMock extends Camera {
  getPicture(options){
    return new Promise( (resolve, reject) => {
      resolve(`TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=`);
    });
  }
}

@NgModule({
  declarations: [
    MyApp,
    MainTabsPage,
    WelcomePage,
    MatchPage,
    MessagesPage,
    MeetPage,
    FilterPage,
    NotificationsPage,
    UserDetailPage,
    ChatDetailPage,
    DatePage,
    SettingPage,
    /* import pages */
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp, {
        platforms: {
          android: {
            tabsPlacement: 'top',
            tabsLayout: 'title-hide',
            color: 'primary'
          },
          windows: {
            tabsLayout: 'title-hide'
          }
        }
      }
    ),
    BrowserModule, 
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainTabsPage,
    WelcomePage,
    MatchPage,
    MessagesPage,
    MeetPage,
    FilterPage,
    NotificationsPage,
    UserDetailPage,
    ChatDetailPage,
    DatePage,
    SettingPage,
    /* import pages */
  ],
  providers: [
    UserService,
    ChatService,
    PostService,
    DateService,
    NotificationService,
    Camera,
    AuthProvider,
    Facebook
    /* import services */
  ]
})
export class AppModule {}
