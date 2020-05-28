import { Action } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IShoppingCart } from '../../models/ishoppingcart.model';

export class Add implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_ADD;
  constructor(public payload: IShoppingCart) {}
}

export class Remove implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_REMOVE;
  constructor(public payload: string) {}
}

export class Increment implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_INCREMENT;
  constructor(public payload: IShoppingCart) {}
}

export class Decrement implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_DECREMENT;
  constructor(public payload: IShoppingCart) {}
}

export class TotalQty implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_TOTALQTY;
  constructor(public payload: number) {}
}

export class TotalPrice implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_TOTALPRICE;
  constructor(public payload: number) {}
}

export type Actions = Add | Remove | Increment | Decrement | TotalQty | TotalPrice;
