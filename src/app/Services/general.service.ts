import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public sliders: any = [];
  public products: Array<any> = [];

  constructor(private http: HttpClient) { 
    this.getSlider1();
    this.getProducts();
  }

  getSlider1(){
    this.http.get('http://alikogrd.beget.tech/api/slide/ru/slides').subscribe(
      (data: any) => {
        this.sliders = data.slice();
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getProducts(){
    this.http.get('http://alikogrd.beget.tech/api/product/ru/type-products?limit=5').subscribe(
      (data: any) => {
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {
          this.products = this.products.concat(data[i].products);
        }
      },
      (error) =>{
        console.log(error);
      }
      );
  }

}
