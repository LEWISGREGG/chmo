import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Idex from '../Components/Pages/Idex';
import Navbar from '../Components/Pages/Navbar';
import '../screens/ProductScreen.css';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);
  
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
    <Navbar />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top">
            <div className="col-1_productscreen">
              <img
                className="large_productscreen"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1_productscreen">
              <ul>
                <li>
                  <h2>{product.brand}</h2>
                </li>
                <li>
                  <h2>{product.name}</h2>
                </li>
                <li>
                  Description:
                  {product.description}
                </li>
              </ul>
            </div>
            <div className="col-1_productscreen">
              <div className="card_productscreen card-body_productscreen">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantity</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <div className="row_productscreen">
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="block_productscreen"
                        >
                          Add to Cart
                        </button>
                      </li></div>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
        <Idex />
    </div>
  );
}