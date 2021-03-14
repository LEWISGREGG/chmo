import LoadingBox from '../Components/LoadingBox';
import Product from '../Components/Product';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import MessageBox from '../Components/MessageBox';
import Navbar from '../Components/Pages/Navbar';
import Idex from '../Components/Pages/Idex';
import "./HomeProduct.css";


export default function HomeProduct() {
 const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return ( 
 
    <div> 
      <Navbar />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="homeproduct">
        <div className="row center_homeproduct">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        </div>
      )}
        <Idex />
    </div>
  );
  }