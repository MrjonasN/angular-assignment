import { Actions } from '../actions/shoppingcart.action';
import { ActionTypes } from '../actionTypes';
import { IShoppingCart } from '../../models/ishoppingcart.model';

const initialState: Array<IShoppingCart> = [];

export function ShoppingCartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SHOPPINGCART_ADD:
      return (state = [...state, action.payload]);

    // case ActionTypes.SHOPPINGCART_REMOVE:
    //   return (state = initialState);

    default:
      return state;
  }
}
