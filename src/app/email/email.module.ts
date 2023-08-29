import { CustomLibModule } from 'custom-lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { EmailRoutingModule } from './email-routing.module';
import { EmailHomeComponent } from './email-home/email-home.component';
import { SenderProfileComponent } from './sender-profile/sender-profile.component';
import { EmailDetailedViewComponent } from './email-detailed-view/email-detailed-view.component';
import { EmailFoldersListingComponent } from './email-folders-listing/email-folders-listing.component';
import { EmailListingComponent } from './email-listing/email-listing.component';


@NgModule({
  declarations: [
    EmailHomeComponent,
    SenderProfileComponent,
    EmailDetailedViewComponent,
    EmailFoldersListingComponent,
    EmailListingComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule,
    CustomLibModule
  ]
})
export class EmailModule { }
