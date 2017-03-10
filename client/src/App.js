import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import './App.css';
import SignUpSignIn from './SignUpSignIn';
import TopNavbar from './TopNavbar';
import Secret from './Secret';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      SignUpSignInError: '',
      authenticated: localStorage.getItem('token')
    };
  }

  handleSignUp(credentials) {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() || password.trim() !== confirmPassword.trim()) {
      this.setState({
        ...this.state,
        SignUpSignInError: 'Must Provide All Fields'
      });
    } else {
      axios.post('/api/signup', credentials)
        .then(resp => {
          const { token } = resp.data;
          localStorage.setItem('token', token);

          this.setState({
            ...this.state,
            SignUpSignInError: '',
            authenticated: token
          });
        });
    }
  }
  handleSignIn(credentials) {
    //  handle sign up
  }
}

export default App;
