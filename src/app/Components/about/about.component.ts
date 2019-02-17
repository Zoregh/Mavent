import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from '../../Services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(public service: GeneralService) { }
  private langChangesSubscription: Subscription;
  public lang: string = this.service.lng;
  public aboutText: any = {};


  ngOnInit() {
    this.getData();
    this.langChangesSubscription  = this.service.langChange.subscribe((a)=> {
      this.lang = a;
      this.getData();
    });
  }

  public getData() {
    this.service.getAllTextData().subscribe(data => {
      this.allData = data;
      this.aboutText = this.allData.home.about[this.lang];
      function removeTags(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
      }
      this.aboutText.description = removeTags( this.aboutText.description );
    });
  }

  public allData: any = {
    home: {
      about: {}
    }
  };

  ngOnDestroy() {
    this.langChangesSubscription.unsubscribe();
  }

}
