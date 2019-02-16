import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './Components/items/items.component';
import { ItemComponent } from './Components/item/item.component';
import { ObjectComponent } from './Components/object/object.component';
import { ObjectsComponent } from './Components/objects/objects.component';
import { NewsComponent } from './Components/news/news.component';
import { AllnewsComponent } from './Components/allnews/allnews.component';
import { HomeComponent } from './Components/home/home.component';
import { Slider1Component } from './Components/slider1/slider1.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { ObjectsInfoComponent } from './Components/objects-info/objects-info.component';
import { Slider2Component } from './Components/slider2/slider2.component';
import { ObjectDetailsComponent } from './Components/object-details/object-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    ObjectComponent,
    ObjectsComponent,
    NewsComponent,
    AllnewsComponent,
    HomeComponent,
    Slider1Component,
    ItemDetailsComponent,
    ProductsComponent,
    AboutComponent,
    ObjectsInfoComponent,
    Slider2Component,
    ObjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
