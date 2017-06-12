import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VIPPage } from './vip';

@NgModule({
  declarations: [
    VIPPage,
  ],
  imports: [
    IonicPageModule.forChild(VIPPage),
  ],
  exports: [
    VIPPage
  ]
})
export class VIPModule {}
