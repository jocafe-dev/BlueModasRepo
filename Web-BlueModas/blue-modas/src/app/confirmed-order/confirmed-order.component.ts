import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {
  shoppingCart: ProductModel[] = [];
  clientInputed: ClientModel;
  orderNumber: string = "ORN-XW7000001QJC"

  constructor(
    private _clientService: ClientService,
    private _shoppingCartService: ShoppingCartService,
    private _router: Router) { }

  ngOnInit() {
    this.getState();
    this.getStateClient();
  }

  getState() {
    this.shoppingCart = this._shoppingCartService.getState();
  }

  getStateClient() {
    this.clientInputed = this._clientService.getState();
  }

  goToHomeComponent() {
    this._router.navigate(['']);
  }
}
