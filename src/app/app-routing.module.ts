import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { ObjectsComponent } from './Components/objects/objects.component';
import { ObjectDetailsComponent } from './Components/object-details/object-details.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { ContactsComponent } from './Components/contacts/contacts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item/:id', component: ItemDetailsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'objects', component: ObjectsComponent},
  {path: 'object/:id', component: ObjectDetailsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'contacts', component: ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
