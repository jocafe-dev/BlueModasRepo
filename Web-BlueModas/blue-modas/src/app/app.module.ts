import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductService } from './services/product.service';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    HttpClientModule,
    HomeModule,
    TooltipModule,
    ModalModule
  ],
  providers: [
    ProductService,
  ],
  exports: [RouterModule, BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
