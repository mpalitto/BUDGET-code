import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewGroupPage } from './new-group';
@NgModule({
  declarations: [NewGroupPage],
  imports: [IonicPageModule.forChild(NewGroupPage)],
  entryComponents: [NewGroupPage]
})
export class NewGroupPageModule { }

