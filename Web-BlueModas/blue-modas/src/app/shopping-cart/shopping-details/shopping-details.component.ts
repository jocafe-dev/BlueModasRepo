import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _router: Router,
    private _toast: ToastrService) {}

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

  goToClientIdentification() {
    if (this.shoppingCart.every(x => x.quantity > 0)){
      this._router.navigate(['/client-identification']);
    }
    else {
      this._toast.error(`Remova o item zerado do carrinho ou adicione ao menos uma unidade.`, "Falha ao Finalizar Compra!", {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      })
    }
  }
  
  remover(index: number) {
    this.shoppingCart.splice(index, 1)
  }
}
