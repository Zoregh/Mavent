import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public itemsArr: Array<any> = [];

  constructor(public service: GeneralService) { 
    this.itemsArr = this.service.products.slice();
  }

  ngOnInit() {
  }

}
