import { EventEmitter, Injectable, Output } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService{
    @Output() shoppingCart : EventEmitter<ProductModel>;
    private shoppingCartState: ProductModel[] = [];

    constructor() {
        this.shoppingCart = new EventEmitter<ProductModel>();
    }

    dispatch(shoppingCart: ProductModel){
        this.shoppingCart.emit(shoppingCart);
        this.shoppingCartState.push(shoppingCart);
    }

    getState = () => this.shoppingCartState;
}