import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public lang: string = this.service.lng;
  public allData: any = {
      home: {
        contacts: {}
      }
  };
  public titles: any = {};
  public contactsData: any = {};

  constructor(private service: GeneralService) { 
    this.service.getAllTextData().subscribe(data => {
      this.allData = data;
      this.contactsData = this.allData.home.contacts;
      this.titles = this.allData.home.contacts[this.lang];
    });
  }

  ngOnInit() {
  }
  
}
