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
  public randomProducts: Array<any> = [];
  private productSubscription: Subscription;

  constructor(public myService: GeneralService, public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeForProduct();

    this.activeRoute.params.subscribe((params) => {
      this.myService.getItemByID(params['id']);
    });
  }

  subscribeForProduct() {
    this.productSubscription = this.myService.currentProduct.subscribe(product => {
      this.currentObject = product;
      function removeTags(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
      }
      this.currentObject.long_description = removeTags(this.currentObject.long_description);
    });

    this.myService.getRandomProducts().subscribe(data => {
      this.randomProducts = [];
      this.randomProducts = this.randomProducts.concat(data);
    });

  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  public currentObject: any = {
    available_current_lng: {},
    status_current_lng: {}
  };

}
