import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingDetailComponent } from './shopping-cart/shopping-details/shopping-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shopping-details', component: ShoppingDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
