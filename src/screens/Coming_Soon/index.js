import React from 'react';
import './coming_soon.css';

const ComingSoon = (props) => {
    return (
        <section class="homepage-container">
            <div class="home-banner">
                <form class="search-container">
                    <input type="text" id="search-bar" placeholder="Enter a friend's phone to get started"></input>
                    <button class="join-btn">Join</button>
                </form>
               
                <div class="banner-blurb">
                    <h1 class="mobile-banner-title">Invite your friends for future discounts<br></br> coming late 2021</h1>
                    <h1 class="banner-title">Coming to your city</h1>
                    <h2 className="banner-subtitle">Invite friends for future discounts</h2>
                        
                </div>
                
            </div>
            <div class="signup-card-container">
                <div class="signup-card">
                    <h3 class="signup-card-title">
                        Know a renter?
                    </h3>
                    <p class="signup-card-blurb">
                        Invite someone you know who’s looking for a place 
                    </p>
                    <button class="signup-card-button renters-button">Invite a renter</button>
                </div>
                <div class="signup-card">
                    <h3 class="signup-card-title">
                        Know a landlord
                    </h3>
                    <p class="signup-card-blurb">
                        Invite someone you know who has a place
                    </p>
                    <button class="signup-card-button owners-button">Invite Owners</button>
                </div>
            </div>
           
        </section>
        
        
        
    );
};

export default ComingSoon;
