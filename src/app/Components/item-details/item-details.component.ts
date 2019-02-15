import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../Services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  public currentObject: any = {
    available_current_lng: {},
    status_current_lng: {}
  };
  productSubscription: Subscription;

  constructor(public myService: GeneralService, public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeForProduct();

    this.activeRoute.params.subscribe((params) => {
      this.myService.getProductByID(params['id']);
    });
  }

  subscribeForProduct() {
    this.productSubscription = this.myService.currentProduct.subscribe(product => {
      this.currentObject = product;
    });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}