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

export type Actions = Add | Remove | Increment;
