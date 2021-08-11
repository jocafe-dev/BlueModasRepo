import { Component, OnInit } from '@angular/core';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: ProductModel[] = [];

  ngOnInit() {
    this.loadProductCards();
  }

  constructor(private _productService: ProductService) {
  }

  loadProductCards() {
    this._productService
      .getAll()
      .toPromise()
      .then(ret => this.products = ret);
  }
}
