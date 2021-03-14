import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Idex from './Idex';
import Navbar from './Navbar';
import Row from './Row';

function Pricing() {
 
 return (
  <>
  <Navbar />
  <div className="pricing">
    <div className="pricing_header">
   <h1> Please Choose Plan to Start Your Free Trial </h1>
   <h2> If you are not sure what plan fits you well? </h2>
   <h2>Compare the plan features below or chat with customer support through our live chat.</h2>
    </div>
    <div className="pricing_plans">
     <div className="pricing_plans_a">
       <div class="card_info_a">
              <h2>BEGINNER</h2>
              <StarIcon className="star_pricing" /><StarIcon className="star_pricing" />
              <StarIcon className="star_pricing" />
              <p>See and Chat patients</p>
              <h1>$22.22</h1>
              <p>Per user / Per month</p>
       </div>      
     </div>
     <div className="pricing_plans_b">
       <div class="card_info_b">
              <h2>PROFESSIONAL</h2>
              <StarIcon className="star_pricing" /><StarIcon className="star_pricing" />
              <StarIcon className="star_pricing" /><StarIcon className="star_pricing" />
              <p>Virtual examinations</p>
              <h1>$33.33</h1>
              <p>Per user / Per month</p>
       </div>   
     </div>
     <div className="pricing_plans_c">
       <div class="card_info_c">
              <h2>LUXURY</h2>
              <StarIcon className="star_pricing" /><StarIcon className="star_pricing" />
              <StarIcon className="star_pricing" /><StarIcon className="star_pricing" />
              <StarIcon className="star_pricing" />
              <div class='fa fa-star'>  </div>
              <p>Run a virtual hospital</p>
              <h1>$44.44</h1>
              <p>Per user / Per month</p>
       </div>   
     </div>
    </div>
  </div>
  <Row/>
  <Idex />
  </>
 )
}

export default Pricing
