import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public lang: string = this.service.lng;
  public allData: any = {};
  public homeProducts: Array<any> = [];
  public borderedTitles: Array<any> = [];
  public homeProductsText: any = {};
  public randomProducts: Array<any> = [];


  constructor(public service: GeneralService) { 
  }

  ngOnInit() {
    this.getData();
    this.service.langChange.subscribe((a)=> {
      this.lang = a;
      this.getData();
    });
  }

  public getData(){
    this.service.getAllTextData().subscribe(data => {
      this.allData = data;
      this.homeProductsText = this.allData.home.product[this.lang];
    });

    this.service.getHomeProducts().subscribe(data => {
      this.allData = data;
      this.homeProducts = [];
      this.borderedTitles = [];
      for (let i = 0; i < this.allData.length; i++) {
        this.homeProducts = this.homeProducts.concat(data[i].products);
        this.borderedTitles.push(data[i].title);
      }
    });

    this.service.getRandomProducts().subscribe(data => {
      this.randomProducts = [];
      this.randomProducts = this.randomProducts.concat(data);
    });

  }

}
