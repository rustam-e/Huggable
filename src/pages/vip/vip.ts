import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseVipPage } from '../purchase-vip/purchase-vip';
/**
 * Generated class for the VIP page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vip',
  templateUrl: 'vip.html',
})
export class VIPPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VIP');
  }
  watchAd(){}
  invite(){}
  viewPurchasePage(){
    this.navCtrl.push(PurchaseVipPage);
  }
}
