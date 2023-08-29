import { inboxMessagesThreadList } from './../email-data-config';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-listing',
  templateUrl: './email-listing.component.html',
  styleUrls: ['./email-listing.component.scss'],
})
export class EmailListingComponent implements OnInit {
  emailListArr: any;
  constructor() {}
  ngOnInit() {
    this.emailListArr = inboxMessagesThreadList
  }
}
