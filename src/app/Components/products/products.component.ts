import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public service: GeneralService) { }

  ngOnInit() {
  }

}
