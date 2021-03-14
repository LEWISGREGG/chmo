import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/userSlice";
import chatReducer from "../../features/chatSlice";
import { cartReducer } from '../../reducers/cartReducers';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer
} from '../../reducers/productReducers';
import { orderCreateReducer,
  orderDetailsReducer } from '../../reducers/orderReducers';

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
     paymentMethod: 'PayPal',  
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  chat: chatReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);





export default store
