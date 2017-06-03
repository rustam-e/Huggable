import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController} from 'ionic-angular';
import { MainTabsPage } from "../main-tabs/main-tabs";
import { AuthProvider } from "../../providers/auth-provider";
import { UtilProvider } from "../../providers/util-provider";
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public nav: NavController, 
    public menu: MenuController, 
    public loadingCtrl: LoadingController,
    public utilProvider: UtilProvider,
    public authProvider: AuthProvider) {
    // disable menu
      this.menu.swipeEnable(false);
      //console.log('inside welcome page');
    }
  // go to home page
  goToHome() {
    this.nav.setRoot(MainTabsPage);
  }
  facebookLogin(): void {
    this.authProvider.facebookLogin()
      .then( authData => {
        loading.dismiss().then( () => {
          this.goToHome();
      });
    }, error => {
      loading.dismiss().then( () => {
        this.utilProvider.doAlert(error.message, {
          text: "Ok",
          role: 'cancel'
        });
      });
    });
    let loading = this.loadingCtrl.create();
    loading.present();
  }
}
