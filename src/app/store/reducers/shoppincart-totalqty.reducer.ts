import { Actions } from '../actions/shoppingcart.actions';
import { ActionTypes } from '../actionTypes';

const initialState: number = 0;

export function ShoppingCartQuantityReducer(
  state = initialState,
  action: Actions
) {
  switch (action.type) {
    case ActionTypes.SHOPPINGCART_TOTALQTY:
      return (state = action.payload);

    default:
      return state;
  }
}
