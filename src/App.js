import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import { Auth } from 'aws-amplify';


// import HomeScreen from './screens/Home';
// import Header from './components/Header';
// import ComingSoon from './screens/Coming_Soon';


function App() {
  return (
    
    <div className="App">
      hi
      {/* <Header />
      <HomeScreen /> */}
      {/* <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      
      <AmplifySignOut /> */}
    </div>
  );
}
// class App extends Component {
//   state = { username: '', password: '', email: '', phone_number: '', authenticationCode: '', step: 0}
//   onChange = e => {
//       this.setState({[e.target.name]: e.target.value})
//   }
//   signUp = async () => {
//       const {username, password, email, phone_number} = this.state
//       try {
//           await Auth.signUp({username, password, attributes: { email, phone_number}})
//           console.log('successfully signed up!')
//           this.setState({ step:1})

//       } catch (err) { console.log('error signing up:', err)}
//   }
//   connfirmSignup = async () => {
//       const{ username, authenticationCode} = this.state
//       try{
//           await Auth.connfirmSignup(username, authenticationCode)
//           console.log('successfully signed up')

//       } catch (err) { console.log('error confirming sign up', err)}
//   }
//   render() {
//       return(
          
//         <div className="signup">
//             {
//                 this.state.step === 0 && (
//                     <div>
//                         <input placeholder='username' onChange={this.Onchange} name='username'/>
//                         <input placeholder='password' onChange={this.Onchange} name='password' type='password'/>
//                         <input placeholder='email' onChange={this.Onchange} name='email'/>
//                         <input placeholder='phone number' onChange={this.Onchange} name='phone_number'/>
//                         <button onClick={this.signUp}>Sign Up</button>
//                     </div>
//                 )
//             }
//             {
//                 this.state.step === 1 && (
//                     <div>
//                         <input placeholder='username' onChange={this.Onchange} name='username'/>
//                         <input placeholder='authentication code' onChange={this.Onchange} name='authenticationCode'/>
//                         <button onClick={this.connfirmSignup}>Confirm Sign Up</button>
//                     </div>
//                 )
//             }

//         </div>
//       )

//   }

// }

export default App;