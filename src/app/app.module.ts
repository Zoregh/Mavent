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
    Slider1Component
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
