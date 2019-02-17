import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public lang = this.service.lng;
  public feedbackData: any = {};


  constructor(private service: GeneralService) { }

  ngOnInit() {
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

}
