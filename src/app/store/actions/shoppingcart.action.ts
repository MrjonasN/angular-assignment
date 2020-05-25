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

export type Actions = Add | Remove;
