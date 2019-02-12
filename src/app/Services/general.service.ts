import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public lng: string = 'ru';
  public sliders: any = [];
  public products: Array<any> = [];

  constructor(private http: HttpClient) { 
    this.checkLang();
  }

  checkLang(){
    const storedLang = JSON.parse(localStorage.getItem('Language'));
    if (storedLang) {
      this.lng = storedLang;
    }
    this.getSlider1();
    this.getProducts();
  }

  setLang(a){
    localStorage.setItem('Language', JSON.stringify(a));
    this.checkLang();
  }

  getSlider1(){
    this.http.get('http://alikogrd.beget.tech/api/slide/' + this.lng + '/slides').subscribe(
      (data: any) => {
        this.sliders = data.slice();
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getProducts(){
    this.http.get('http://alikogrd.beget.tech/api/product/' + this.lng + '/type-products?limit=5').subscribe(
      (data: any) => {
        this.products = [];
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
