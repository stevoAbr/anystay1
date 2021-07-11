import React, { Component } from 'react';
import './styles.css';

import SignUp from '../../components/Landing_SignUp';


const HomeScreen = (props) => {
    return (
        
        <section class="homepage-container">
            <div class="home-banner">
                <SignUp />
               
                <div class="banner-blurb">
                    <h1 class="mobile-banner-title">Flexible rentals<br></br> coming late 2021</h1>
                    <h1 class="banner-title">Flexible rentals</h1>
                    <h2 className="banner-subtitle">Australian launch in late 2021</h2>
                        
                </div>
                <button class="join-now-button">Join now</button>
                
            </div>
            <div class="signup-card-container">
                <div class="signup-card">
                    <h3 class="signup-card-title">
                        Need a home or spare room?
                    </h3>
                    <p class="signup-card-blurb">
                        Instantly rent homes and rooms for weeks to months
                    </p>
                    <button class="signup-card-button renters-button">For Renters</button>
                </div>
                <div class="signup-card">
                    <h3 class="signup-card-title">
                        Own a home or spare room?
                    </h3>
                    <p class="signup-card-blurb">
                        Create a free listing and get paid by verified renters
                    </p>
                    <button class="signup-card-button owners-button">For Owners</button>
                </div>
            </div>
           
        </section>
        
        
        
    );
};

export default HomeScreen;






