import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender-profile',
  templateUrl: './sender-profile.component.html',
  styleUrls: ['./sender-profile.component.scss'],
})
export class SenderProfileComponent implements OnInit {
  @Input() thread: any;
  ngOnInit() {
    this.thread;
  }
}
