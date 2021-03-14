import React from 'react'
import '../Pages/Idex.css';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





function Idex() {
return (
  <footer id="footer">
          <section className='footer_subscription'>
        <p className='footer_subscription_heading'>
          Join PoltavaHealth newsletter to receive our best medecine deals
        </p>
        <p className='footer_subscription_text'>
          You can unsubscribe at any moment.
        </p>
        <div className='input_areas'>


<div href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">        </div>
<div id="mc_embed_signup">
<form action="https://gmail.us1.list-manage.com/subscribe/post?u=4d5c806de93fbeace0abb8dd9&amp;id=3cd8873c31" method="post" id="mc-embedded-subscribe-form" className="mc-embedded-subscribe-form" className="validate" target="_blank" >
<div id="mc_embed_signup_scroll">

<input className='footer_input' name='email' type='email' placeholder='Your Email'/>
<div class="clear">
<input type="submit" value="Subscribe" name="subscribe"id="mc-embedded-subscribe"  class='btn_outline' variant="outlined"/>
</div>
</div>
</form>
</div>














        </div>
      </section>
    <section id="footer_info">
      <div className="info_center">
        <div className="info_item">
          <h2>About Us</h2>
        </div>
        <div className="info_item">
          <Link to='/'>Testimonials</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Careers</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Investors</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Terms of Service</Link>
        </div>
      </div>

            <div className="info_center">
        <div className="info_item">
          <h2>Contact Us</h2>
        </div>
        <div className="info_item">
            <Link to='/contact'>Contact</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Support</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Destinations</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Sponsorships</Link>
        </div>
      </div>

      <div className="info_center">
        <div className="info_item">
            <h2>Social Media</h2>
        </div>
        <div className="info_item">
            <Link to='/'><InstagramIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><FacebookIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><YouTubeIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><LinkedInIcon/></Link>
        </div>
      </div>
    </section>

    <section className='footer_subscription'>
      <p className='footer_subscription_text'>
        PoltavaHealth © 2021 All rights reserved
      </p>
</section>
  </footer>
)
}

export default Idex
