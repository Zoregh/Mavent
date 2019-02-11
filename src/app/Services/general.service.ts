import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public products: Array<any> = [
    {
      hover_src: 'assets/images/product-hover-eye-full.png',
      img_src: 'assets/images/product-image.jpg',
      product_text: 'Крепление декоративной пазогребневой плитки под кирпич на планках',
      product_title: 'mtc-v-150'
    },
    {
      hover_src: 'assets/images/product-hover-eye-full.png',
      img_src: 'assets/images/product-image.jpg',
      product_text: 'Крепление декоративной пазогребневой плитки под кирпич на планках',
      product_title: 'mtc-v-250'
    },
    {
      hover_src: 'assets/images/product-hover-eye-full.png',
      img_src: 'assets/images/product-image.jpg',
      product_text: 'Крепление декоративной пазогребневой плитки под кирпич на планках',
      product_title: 'mtc-v-350'
    },
    {
      hover_src: 'assets/images/product-hover-eye-full.png',
      img_src: 'assets/images/product-image.jpg',
      product_text: 'Крепление декоративной пазогребневой плитки под кирпич на планках',
      product_title: 'mtc-v-450'
    },
    {
      hover_src: 'assets/images/product-hover-eye-full.png',
      img_src: 'assets/images/product-image.jpg',
      product_text: 'Крепление декоративной пазогребневой плитки под кирпич на планках',
      product_title: 'mtc-v-550'
    }
  ];

  constructor(private http: HttpClient) { 
    // this.getRandomProducts();
    // this.getRandomProducts();
  }

  // getRandomProducts(){
  //   this.http.get('http://alikogrd.beget.tech/api/product/ru/products?limit=3&random=1').subscribe(
  //     (data: any) => {
  //       // this.products.concat(data);
  //       console.log(data);
        
  //     },
  //     (error) =>{
  //       console.log(error);
  //     }
  //     );
  // }  data on this server is not correct

}
