import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from '../../Services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  public lang = this.service.lng;
  public feedbackData: any = {};
  private langChangeSubscription: Subscription;


  constructor(private service: GeneralService) { }

  ngOnInit() {
    this.getData();
    this.langChangeSubscription = this.service.langChange.subscribe((a)=> {
      this.lang = a;
      this.getData();
    });
  }

  public getData(){
    this.service.getAllTextData().subscribe(data => {
      this.allData = data;
      this.feedbackData = this.allData.home.feedback[this.lang];
    });
  }

  public allData: any = {
    home: {
      feedback: {}
    }
  };

  ngOnDestroy() {
    this.langChangeSubscription.unsubscribe();
  }

}
