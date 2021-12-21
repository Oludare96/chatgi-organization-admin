import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public ordersService: PolicyService) { }

  ngOnInit() { this.getChatgiEntries(); }

  chatgiEntries;
  getChatgiEntries = () =>
    this.ordersService
      .getChatgiEntries()
      .subscribe(res => (this.chatgiEntries = res));

  headElements = ['Saint First Name', 'Saint Last Name', 'Chatgi Name',
     'Gender', 'Phone Number', 'State', 'City', 'Strategy', 'Event Name', 'Chatgi Catigory'];
}
