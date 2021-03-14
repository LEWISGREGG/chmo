import React from 'react';
import styled from 'styled-components';
import data from "../../data.js";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <Wrapper className='block col-2'>
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <h3>{product.name}</h3>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 78rem;
  height: auto;
.block {
  background-color: blue;
  
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
.text-right {
  text-align: right;
}
img.small {
  max-height: 6rem;
}
button {
  font-size: 0.8rem;
  padding: 0.2rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  border: 0.1rem #404040 solid;
  background-color: #f0c040;
  width: 100%;
  cursor: pointer;
}
button.add {
  background-color: #40c0f0;
  width: 1.5rem;
}
button.remove {
  background-color: #f04040;
  width: 1.5rem;
}
button.badge {
  background-color: #f04040;
  border: none;
  color: #ffffff;
  width: 1.5rem;
}

`