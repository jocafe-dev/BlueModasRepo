import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientIdentificationComponent } from './client-identification/client-identification.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';
import { HomeComponent } from './home/home.component';
import { ShoppingDetailComponent } from './shopping-cart/shopping-details/shopping-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shopping-details', component: ShoppingDetailComponent },
  { path: 'confirmed-order', component: ConfirmedOrderComponent},
  { path: 'client-identification', component: ClientIdentificationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
