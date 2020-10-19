import React, { Component } from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
