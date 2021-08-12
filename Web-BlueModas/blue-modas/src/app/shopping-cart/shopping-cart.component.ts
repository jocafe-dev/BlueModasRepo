import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  constructor(private _shoppingCartService: ShoppingCartService) {}

  shoppingCart: ProductModel[] = [];

  ngOnInit() {
    this._shoppingCartService
        .shoppingCart
        .subscribe(shoppingUpdated => {
          this.shoppingCart.push(shoppingUpdated);
          console.log(this.shoppingCart)
    });
  }
}
