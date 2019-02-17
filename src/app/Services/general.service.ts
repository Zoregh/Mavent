import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public lng: string = 'ru';
  public langChange: Subject<string>;
  public products: Array<any> = [];
  public allProducts: Array<any> = [];
  public randomProducts: Array<any> = [];
  public itemDetails: any;
  public id: number;
  public borderedTitles: Array<any> = [];
  public navbarText: any = {};
  public homeProduct: any = {};
  public wellcomeText: any = {};
  public aboutText: any = {};
  public objectsText: any = {};
  public slider2: Array<any> = [];
  public singleObjectText: any = {};
  public allObjects: Array<any> = [];
  public randomObjects: Array<any> = [];
  
  public currentProduct: Subject<{}> = new Subject;
  
  constructor(private http: HttpClient) { 
    this.langChange = new Subject;
    this.setLang(this.lng);
    // this.checkLang();
  }

  setLang(a){
    localStorage.setItem('Language', JSON.stringify(a));
    this.langChange.next(a); 
    this.checkLang();
  }

  getAllTextData(){
    return this.http.get('http://alikogrd.beget.tech/api/elements/elements');
  }

  getSlider1(){
    return this.http.get(`http://alikogrd.beget.tech/api/slide/${this.lng}/slides`);
  }
  
  checkLang(){
    const storedLang = JSON.parse(localStorage.getItem('Language'));
    if (storedLang) {
      this.lng = storedLang;
    }
    this.getText();
    this.getProducts();
    this.getRandomProducts();
    this.getItemDetails();
    this.getItemByID(this.id);
    this.getAllProducts();
    this.getSlider2();
    this.getAllObjects();
    this.getRandomObjects();
  }



  getSlider2(){
    this.http.get(`http://alikogrd.beget.tech/api/object/${this.lng}/object`).subscribe(
      (data: any) => {
        this.slider2 = data.images.slice();
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getText(){
    this.http.get('http://alikogrd.beget.tech/api/elements/elements').subscribe(
      (data: any) => {
        this.navbarText = data.navbar_menu.navbar[this.lng];
        this.homeProduct = data.home.product[this.lng];
        this.wellcomeText = data.object_page.object[this.lng].description;
        this.aboutText = data.home.about[this.lng];
        function removeTags(text) {
          return text ? String(text).replace(/<[^>]+>/gm, '') : '';
        }
        this.aboutText.description = removeTags( this.aboutText.description );
        this.objectsText = data.home.object[this.lng];
        this.singleObjectText = data.single_object_page.object[this.lng];
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

  getItemByID(id){
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

  
  getAllObjects(){
    this.http.get(`http://alikogrd.beget.tech/api/object/${this.lng}/objects`).subscribe(
      (data: any) => {
        this.allObjects = [];
        for (let i = 0; i < data.length; i++) {
          this.allObjects = this.allObjects.concat(data[i]);
        }
      },
      (error) =>{
        console.log(error);
      }
      );
  }

  getRandomObjects(){
    this.http.get(`http://alikogrd.beget.tech/api/object/${this.lng}/objects?limit=3&random=1`).subscribe(
      (data: any) => {
        this.randomObjects = data;
      },
      (error) =>{
        console.log(error);
      }
      );
  }

}
