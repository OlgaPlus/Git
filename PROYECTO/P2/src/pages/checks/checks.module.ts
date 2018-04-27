import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChecksPage } from './checks';

@NgModule({
  declarations: [
    ChecksPage,
  ],
  imports: [
    IonicPageModule.forChild(ChecksPage),
  ],
})
export class ChecksPageModule {}
