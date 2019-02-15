import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public lng: string = 'ru';
  public sliders: any = [];
  public products: Array<any> = [];
  public allProducts: Array<any> = [];
  public randomProducts: Array<any> = [];
  public itemDetails: any;
  public id: number;
  public borderedTitles: Array<any> = [];
  public sliderText: any = {};
  public navbarText: any = {};
  public homeProduct: any = {};
  public wellcomeText: any = {};
  public aboutText: any = {};

  public currentProduct: Subject<{}> = new Subject;

  constructor(private http: HttpClient) { 
    this.checkLang();
  }

  checkLang(){
    const storedLang = JSON.parse(localStorage.getItem('Language'));
    if (storedLang) {
      this.lng = storedLang;
    }
    this.getSlider1();
    this.getText();
    this.getProducts();
    this.getRandomProducts();
    this.getItemDetails();
    this.getProductByID(this.id);
    this.getAllProducts();
  }

  setLang(a){
    localStorage.setItem('Language', JSON.stringify(a));
    this.checkLang();
  }

  getSlider1(){
    this.http.get(`http://alikogrd.beget.tech/api/slide/${this.lng}/slides`).subscribe(
      (data: any) => {
        this.sliders = data.slice();
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getText(){
    this.http.get('http://alikogrd.beget.tech/api/elements/elements').subscribe(
      (data: any) => {
        this.sliderText = data.home.slider[this.lng];
        this.navbarText = data.navbar_menu.navbar[this.lng];
        this.homeProduct = data.home.product[this.lng];
        this.wellcomeText = data.object_page.object[this.lng].description;
        this.aboutText = data.home.about[this.lng];
        function removeTags(text) {
          return text ? String(text).replace(/<[^>]+>/gm, '') : '';
        }
        this.aboutText.description = removeTags( this.aboutText.description );
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getProducts(){
    this.http.get(`http://alikogrd.beget.tech/api/product/${this.lng}/type-products?limit=5`).subscribe(
      (data: any) => {
        this.products = [];
        this.borderedTitles = [];
        for (let i = 0; i < data.length; i++) {
          this.products = this.products.concat(data[i].products);
          this.borderedTitles.push(data[i].title);
        }
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getRandomProducts(){
    this.http.get(`http://alikogrd.beget.tech/api/product/${this.lng}/products?limit=3&random=1`).subscribe(
      (data: any) => {
        this.randomProducts = [];
        this.randomProducts = this.randomProducts.concat(data);
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getItemDetails(){
    this.http.get('http://alikogrd.beget.tech/api/elements/elements?sub_alias=single_product_page').subscribe(
      (data: any) => {
        this.itemDetails = data.single_product_page.product[this.lng];
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getProductByID(id){
    this.id = id;
    this.http.get(`http://alikogrd.beget.tech/api/product/${this.lng}/product?id=${id}`).subscribe(res => {
      this.currentProduct.next(res);
    })
  }

  getAllProducts(){
    this.http.get('http://alikogrd.beget.tech/api/product/' + this.lng + '/type-products').subscribe(
      (data: any) => {
        this.allProducts = [];
        for (let i = 0; i < data.length; i++) {
          this.allProducts = this.allProducts.concat(data[i].products);
        }
      },
      (error) =>{
        console.log(error);
      }
      );
  }
}
