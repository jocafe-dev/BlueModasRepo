import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  shoppingCart: ProductModel[] = [];
  clientModel: ClientModel[] = [];

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _clientService: ClientService,
    private _router: Router) { }

  ngOnInit() {
    this.getState();
    this._clientService
    .getAll()
    .toPromise()
    .then(ret => {
      this.clientModel = ret;
    })
  }

  getState() {
    this.shoppingCart = this._shoppingCartService.getState();
  }

  goToClientIdentification() {
    this._router.navigate(['/client-identification']);
  }

}
