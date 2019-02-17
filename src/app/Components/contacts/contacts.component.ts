import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from '../../Services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  private langChangesSubscription: Subscription;
  public lang: string = this.service.lng;
  public titles: any = {};
  public contactsData: any = {};

  constructor(private service: GeneralService) { }

  ngOnInit() {
    this.getAllData();
    this.langChangesSubscription  = this.service.langChange.subscribe((a)=> {
      this.lang = a;
      this.getAllData();
    });
  }

  public getAllData() {
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

  ngOnDestroy() {
    this.langChangesSubscription.unsubscribe();
  }
  
}
