import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ProductsComponent } from './Components/products/products.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item/:id', component: ItemDetailsComponent},
  {path: 'products', component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
