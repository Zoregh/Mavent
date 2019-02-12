import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public service: GeneralService) { 
  }

  ngOnInit() {
  }

}
