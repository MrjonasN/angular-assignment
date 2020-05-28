import { Actions } from '../actions/shoppingcart.actions';
import { ActionTypes } from '../actionTypes';
import { IShoppingCart } from '../../models/ishoppingcart.model';

const initialState: Array<IShoppingCart> = [];

export function ShoppingCartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SHOPPINGCART_ADD:
      state = [...state, action.payload];
      return state;

    case ActionTypes.SHOPPINGCART_REMOVE:
      (state = state.filter(
        (item) => item.product._id !== action.payload
      ))
      return state;

    case ActionTypes.SHOPPINGCART_INCREMENT:
      let incItemIndex = state.findIndex((item) => {
        return item.product._id === action.payload.product._id;
      });
      return state.map((item, index) => {
        if (index !== incItemIndex) {
          return item;
        }
        let newItem = { product: item.product, quantity: item.quantity + 1 };
        return newItem;
      });

    case ActionTypes.SHOPPINGCART_DECREMENT:
      let DecItemIndex = state.findIndex((item) => {
        return item.product._id === action.payload.product._id;
      });
      return state.map((item, index) => {
        if (index !== DecItemIndex) {
          return item;
        }
        let newItem = { product: item.product, quantity: item.quantity - 1 };
        return newItem;
      });

    default:
      let cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) state = cart;
      return state;
  }
}
