import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  constructor(private service: GeneralService) { }

  ngOnInit() {
  }

}
