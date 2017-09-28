import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitationsPage } from './invitations';
@NgModule({
  declarations: [InvitationsPage],
  imports: [IonicPageModule.forChild(InvitationsPage)],
  entryComponents: [InvitationsPage]
})
export class InvitationsPageModule { }

