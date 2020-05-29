import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cart;

  constructor(private store: Store<IState>) {}

  totalQty() {
    this.store
      .select((store) => store.shoppingcart)
      .subscribe((res) => (this.cart = res));
    let totalQuantity = 0;
    this.cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    this.store.dispatch(new ShoppingCartActions.TotalQty(totalQuantity));
  }

  totalPrice() {
    this.store
      .select((store) => store.shoppingcart)
      .subscribe((res) => (this.cart = res));
    let totalPrice = 0;
    this.cart.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    this.store.dispatch(new ShoppingCartActions.TotalPrice(totalPrice));
  }

  add(product, quantity) {
    this.store
      .select((store) => store.shoppingcart)
      .subscribe((res) => (this.cart = res));
    let exists = this.cart.find((item) => {
      return item.product._id === product._id;
    });
    if (exists) {
      this.increment({ product, quantity });
    } else {
      this.store.dispatch(new ShoppingCartActions.Add({ product, quantity }));
    }
    this.totalQty();
    this.totalPrice();
  }

  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id));
    this.totalQty();
    this.totalPrice();
  }

  increment(product) {
    this.store.dispatch(new ShoppingCartActions.Increment(product));
    this.totalQty();
    this.totalPrice();
  }

  decrement(product) {
    if (product.quantity <= 1) {
      this.remove(product.product._id);
    } else {
      this.store.dispatch(new ShoppingCartActions.Decrement(product));
    }
    this.totalQty();
    this.totalPrice();
  }
}
