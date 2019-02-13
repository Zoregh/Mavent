import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  public id: number;
  public currentObject: any; 

  constructor(public myService: GeneralService, public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.currentObject = this.myService.getProductByID(this.id);
    });
  }

}
