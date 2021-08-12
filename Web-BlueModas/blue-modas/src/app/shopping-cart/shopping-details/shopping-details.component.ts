import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  constructor(private _shoppingCartService: ShoppingCartService,
    private _router: Router) {}

  shoppingCart: ProductModel[] = [];

  ngOnInit() {
    this.getState();
  }

  getState(){
    this.shoppingCart = this._shoppingCartService.getState();
  }

  goToHomeComponent() {
    this._router.navigate(['']);
  }
}
