import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingDetailComponent } from '../shopping-cart/shopping-details/shopping-details.component';
import { ClientService } from '../services/client.service';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'client-identification',
  templateUrl: './client-identification.component.html',
  styleUrls: ['./client-identification.component.scss']
})
export class ClientIdentificationComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  shoppingCart: ProductModel[] = [];
  clientIdentificationForm: FormGroup;
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
    this.clientIdentificationForm = new FormGroup({
      // name: new FormControl(this.clientModel[0].name, [
      //   Validators.required,
      //   Validators.minLength(2),
      // ]),
      // email: new FormControl(this.clientModel[0].email, [
      //   Validators.required,
      //   Validators.minLength(6),
      // ]),
      // phone: new FormControl(this.clientModel[0].phone, [
      //   Validators.required,
      //   Validators.minLength(8),
      // ]),
    });
  }

  getState() {
    this.shoppingCart = this._shoppingCartService.getState();
  }

  goToConfirmedOrder() {
    this._router.navigate(['/confirmed-order']);
  }

}
