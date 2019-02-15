import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-objects-info',
  templateUrl: './objects-info.component.html',
  styleUrls: ['./objects-info.component.css']
})
export class ObjectsInfoComponent implements OnInit {

  constructor(private service: GeneralService) { }

  ngOnInit() {
  }

}
