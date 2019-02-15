import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service'

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  constructor(private service: GeneralService) { }

  ngOnInit() {
  }

}
