import React, { Component } from 'react';
import './styles.css';

// class Homescreen extends Component {
//     state = { username: '', password: '', email: '', phone_number: '', authenticationCode: '', step: 0}
//     onChange = e => {
//         this.setState({[e.target.name]: e.target.value})
//     }
//     signUp = async () => {
//         const {username, password, email, phone_number} = this.state
//         try {
//             await Auth.signUp({username, password, attributes: { email, phone_number}})
//             console.log('successfully signed up!')
//             this.setState({ step:1})

//         } catch (err) { console.log('error signing up:', err)}
//     }
//     connfirmSignup = async () => {
//         const{ username, authenticationCode} = this.state
//         try{
//             await Auth.connfirmSignup(username, authenticationCode)
//             console.log('successfully signed up')

//         } catch (err) { console.log('error confirming sign up', err)}
//     }
//     render() {
//         return(
            
//         <div className="signup">
//         {
//             this.state.step === 0 && (
//                 <div>
//                     <input placeholder='username' onChange={this.Onchange} name='username'/>
//                     <input placeholder='password' onChange={this.Onchange} name='password' type='password'/>
//                     <input placeholder='email' onChange={this.Onchange} name='email'/>
//                     <input placeholder='phone number' onChange={this.Onchange} name='phone_number'/>
//                     <button onClick={this.signUp}>Sign Up</button>
//                 </div>
//             )
//         }
//         {
//             this.state.step === 1 && (
//                 <div>
//                     <input placeholder='username' onChange={this.Onchange} name='username'/>
//                     <input placeholder='authentication code' onChange={this.Onchange} name='authenticationCode'/>
//                     <button onClick={this.connfirmSignup}>Confirm Sign Up</button>
//                 </div>
//             )
//         }

//     </div>
//         )

//     }

// }


const HomeScreen = (props) => {
    return (
        
        <section class="homepage-container">
            <div class="home-banner">
                <form class="search-container">
                    <input type="text" id="search-bar" placeholder="Enter your phone to get started"></input>
                    <button class="join-btn">Join</button>
                </form>
               
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






