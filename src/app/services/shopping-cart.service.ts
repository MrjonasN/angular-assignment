import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.model';
import * as ShoppingCartActions from '../store/actions/shoppingcart.action';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {



  constructor(private store: Store<IState>) {}

  add(product, quantity) {
    this.store.dispatch(new ShoppingCartActions.Add({ product, quantity }));
  }
}
