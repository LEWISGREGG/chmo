import { Button } from '@material-ui/core'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Idex from './Idex';
import Navbar from './Navbar';
import { auth, provider } from "../Pages/firebase";
import { selectUser, login, logout } from "../../features/userSlice";
import {useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import '../Pages/Huilo.css';
import { FaUserMd, FaUserNurse } from 'react-icons/fa';


function Huilo() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);


  return (

  


    <>
      {!user ? (
        <Login />
      ) : (
      <>
      <Navbar />
    <div>
  <section className="tele bg-red">
    
      <div className="tele-title">
        <h2>TELEHEALTH PLATFORM</h2>
        <div className="underline"></div>
      </div>
    
      <div className="telehealth-center tele-center">

        <article className="health">  
        <Link to="/poltmessage">
          <div className="tele-icon">
            <FaUserNurse/>
          </div>
          <h2>Chat with Doctor</h2>
          <div className="underline"></div>
          <h3>
            Ask specialist about necessary medications by chating doctor
          </h3> 
          </Link>
        </article>
        
        
        <article class="health">
          <a target="_blank" href="https://wolfwolf.daily.co/IREviSQICEKkcrmVFqAt">
          <div className="tele-icon">
            <FaUserMd/>
          </div>
          <h2>Video Conference</h2>
          <div className="underline"></div>
          <h3>
            Ask specialist about necessary medications by chating doctor
          </h3>
          </a>
        </article>

      </div>
    </section>




      
    </div>
          <Idex />
  </>
  )}
    </>
  )
}

export default Huilo
