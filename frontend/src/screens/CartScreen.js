import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../Components/MessageBox';
import Navbar from '../Components/Pages/Navbar';
import Idex from '../Components/Pages/Idex';
import '../screens/CartScreen.css';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
 dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/shipping');
  };
  return (
    <>
        <Navbar />
   <div className="row top">
      <div className="col-2">
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/products">Continue Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}><h2>{item.name}</h2></Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      className="button_cartscreen"
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1_cartscreen">
        <div className="card_cartscreen card-body_cartscreen">
          <ul>
            <li>
              <h2>
                Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
              </h2>
            </li>
          <div className="row_productscreen">
            <li>
              <button
                onClick={checkoutHandler}
                className="block_cartscreen"
                disabled={cartItems.length === 0}
              >
                Continue to Checkout
              </button>
            </li></div>
          </ul>
        </div>
      </div>
    </div>
        <Idex />
    </>
  );
}