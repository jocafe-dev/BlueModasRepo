import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  // selectedProducts: ProductModel[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loadProductCards();
  }

  constructor(private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService,
    private _toast: ToastrService) {
  }

  loadProductCards() {
    this.loading = true;
    this._productService
      .getAll()
      .toPromise()
      .then(ret => {
        this.products = ret;
        this.loading = false;
      }).catch(err => {
        this.loading = false
      })
  }

  selectedProduct(item: ProductModel) {
    this._shoppingCartService.dispatch(item);
    this._toast.success(`${item.quantity} ${item.name} foi adicionado ao carrinho.`, "Adicionado com sucesso", {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',

    })
  }
}
