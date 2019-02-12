import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service'


@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {

  constructor(private service: GeneralService) { }

  ngOnInit() {
  }


}
