import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public lang: string = this.service.lng;
  public allData: any = {};
  public titles: any = {};

  constructor(private service: GeneralService) { 
    this.service.getAllTextData().subscribe(data => {
      this.allData = data.home.contacts;
      this.titles = data.home.contacts[this.lang]
      console.log(this.allData);
    });
  }

  ngOnInit() {
  }
  
}
