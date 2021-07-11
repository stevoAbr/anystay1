import React, { Component } from 'react';
import './signup.css';
import { Auth } from 'aws-amplify';


class SignUp extends Component {
  state = { username: '', password: this.getRandomString(30), authenticationCode: '', step: 0}
  onChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }
  signUp = async (event) => {
      event.preventDefault();
      const {username, password, email, phone_number} = this.state
      
      try {
        //   var formattedusername = '+61' + username.substring(1);
        //   console.log(typeof(username))
          await Auth.signUp({username, password, attributes: { email, phone_number}})
          console.log('successfully signed up!')
          this.setState({ step:1})

      } catch (err) { console.log('error signing up:', err)}
  }
  confirmSignUp = async (event) => {
      event.preventDefault();
      const{ username, authenticationCode} = this.state
      try{
          await Auth.confirmSignUp(username, authenticationCode)
          console.log('COMPLETED AUTH signed up')

      } catch (err) { console.log('error confirming sign up', err)}
  }
  getRandomString(number) {
    return Math.random().toString(36).slice(2)
  }
  generatePhNum(phone){
      return '+61' + phone.substring(1);
  }

  render() {
      return(
          
        <div className="signup">
            {
                this.state.step === 0 && (
                    <form class="search-container">
                        <input type="text" id="search-bar" placeholder='Enter your phone to get started' onChange={this.onChange} name='username' required pattern='(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}'/>                        
                        <button id="join-btn" onClick={this.signUp} >Sign Up</button>
                    </form>

                    
                )
            }
            {
                this.state.step === 1 && (
                    <form class="search-container">
                        <input type="text" id="search-bar" placeholder='Please enter your 6-Digit authentication code' onChange={this.onChange} name='authenticationCode'/>                        
                        <button id="join-btn" onClick={this.confirmSignUp}>Confirm</button>
                    </form>
 
                )
            }

        </div>
      )

  }

}

export default SignUp;






