import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public lang: string = this.service.lng;

  public titles: any = {};
  public contactsData: any = {};

  constructor(private service: GeneralService) { }

  ngOnInit() {
    this.service.getAllTextData().subscribe(data => {
      this.allData = data;
      this.contactsData = this.allData.home.contacts;
      this.titles = this.allData.home.contacts[this.lang];
    });
  }

  public allData: any = {
    home: {
      contacts: {}
    }
};
  
}
