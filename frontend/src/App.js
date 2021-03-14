import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Pricing from './Components/Pages/Pricing';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import HomeScreen from './Components/Pages/HomeScreen';
import Poltmessage from './Components/Pages/Poltmessage';
import Huilo from './Components/Pages/Huilo';
import HomeProduct from './Products/HomeProduct';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {

  return (
      <>
      
      
      <Router>  
        <Switch> 
          <Route path='/' exact component={HomeScreen} />            
          <Route path='/huilo' component={Huilo} />      
          <Route path='/poltmessage' component={Poltmessage} />  
          <Route path='/pricing' component={Pricing} />          
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/products' component={HomeProduct} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/shipping" component={ShippingAddressScreen}/>
          <Route path="/payment" component={PaymentMethodScreen}/>
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/order/:id" component={OrderScreen}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
