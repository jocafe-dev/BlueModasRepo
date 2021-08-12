import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: ProductModel[] = [];
  selectedProducts: ProductModel[] = [];

  ngOnInit() {
    this.loadProductCards();
  }

  constructor(private _productService: ProductService, private _shoppingCartService: ShoppingCartService) {
  }

  loadProductCards() {
    this._productService
      .getAll()
      .toPromise()
      .then(ret => this.products = ret);
  }

  selectedProduct(item: ProductModel) {
    this._shoppingCartService.dispatch(item);
  }
}
