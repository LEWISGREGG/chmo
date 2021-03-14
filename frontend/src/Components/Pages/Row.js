import React from 'react';
import '../Pages/Row.css';
import CheckIcon from '@material-ui/icons/Check';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function Row() {
 return (
  <div className="row_center">
  <div className="row">
      <div className="row__posters">
          <div class='row__poster '>
            <h2>COMPARE PLAN FEATURES</h2>
            <h3>Online appointment bookings</h3>
            <h3>Patient invities</h3>
            <h3>End to end encryption</h3>
            <h3>Virtual waiting room</h3>
            <h3>Automated Patient Notifications</h3>
            <h3>SMS Notifications for Doctors</h3>
            <h3>Max Numbers of Participants in a Call</h3>
            <h3>Pre-call Payment</h3>
            <h3>Payment Transaction Fee</h3>
            <h3>Sharing Tools</h3>
          </div>

          <div class='row__poster '>
            <h2>BEGINNER</h2>
            <HighlightOffIcon/>
            <h3>Email Invites</h3>
            <CheckIcon/>
            <CheckIcon/>
            <HighlightOffIcon/>
            <HighlightOffIcon/>
            <h3>2</h3>
            <HighlightOffIcon/>
            <h3>2% + PayPal fee (if applicable)</h3>
            <CheckIcon/>
          </div>

          <div class='row__poster '>
            <h2>PROFESSIONAL</h2>
            <CheckIcon/>
            <h3>Email Invites</h3>
            <CheckIcon/>
            <CheckIcon/>
            <HighlightOffIcon/>
            <HighlightOffIcon/>
            <h3>3</h3>
            <CheckIcon/>
            <h3>1.5% + PayPal fee (if applicable)</h3>
            <CheckIcon/>
          </div>

          <div class='row__poster'>
            <h2>LUXURY</h2>
            <CheckIcon/>
            <h3>Email & SMS Invites</h3>
            <CheckIcon/>
            <CheckIcon/>
            <CheckIcon/>
            <CheckIcon/>
            <h3>4</h3>
            <CheckIcon/>
            <h3>1% + PayPal fee (if applicable)</h3>
            <CheckIcon/>
          </div>
      </div>
    </div>
   </div>
  );
}
 


