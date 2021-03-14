import React from 'react';
import '../Pages/Contact.css';
import Idex from '../Pages/Idex';
import Navbar from './Navbar';

function Contact() {
return (
  <>
  <Navbar/>
      <section class="services">
      <div class="services_title text_center">
        <h3 class="section_subtitle">explore</h3>
        <h2 class="section_title ">here is how to reach us</h2>
      </div>
      <div class="section_center clearfix">
        
        <article class="service_card">
          <div class="service_img_container">
            <span class="service_icon"></span>
          </div>
          <div class="service_info">
            <h1>phone support</h1>
            <h3>Call us +1 860 200 3868</h3>
            <h4>8am – 5pm NY time (GMT-5)
            Voicemails will be answered within one day</h4>
          </div>
        </article>

        <article class="service_card">
          <div class="service_img_container">
            <span class="service_icon">
            </span>
          </div>
        
          <div class="service_info">
            <h1>live chat</h1>
            <h3>Response is within 5 min.</h3>
            <h4>We're here to support you 8am-5pm NY time (GMT-5) through live chat.</h4>
          </div>
        </article>
        <article class="service_card">
          <div class="service_img_container">
            <span class="service_icon"> </span>
          </div>
          
          <div class="service_info">
          <h1>Mailing Address</h1>
            <h3>Tampa office headquater</h3>
            <h4>7923 camden woods dr, Tampa, FL 33619 USA Welcome</h4>
          </div>
        </article>
      </div>
    </section>
    <Idex/>
  </>

)
}

export default Contact
