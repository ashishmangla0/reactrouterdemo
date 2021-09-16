import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home';
import Vitamin from './components/Vitamin';
import data from './data/data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Lost from './components/Lost';
function App() {
  const [toggleLogo, setToggleLogo] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo}

            alt="logo"
            className={toggleLogo ? 'static-logo' : 'static-logo animated jello'}
            onMouseEnter={() => setToggleLogo(!toggleLogo)}
            onMouseLeave={() => setToggleLogo(!toggleLogo)}
            onClick={() => setToggleNav(!toggleNav)}
          />
          <h1
            className={toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
          >Menu</h1>
          <Navigation opennav={toggleNav} closeNav={() => setToggleNav(false)} />
        </header>
        <Switch>
          <Route exact path="/" render={(props) => (<Home cards={data} />)} />
          <Route exact path="/vitamin" component={Vitamin} />
          <Route exact path={`/product/:id`} render={(props) => {
            let cardPosition = props.location.pathname.replace('/product/', '');
            return (
              <ProductDetails card={data[cardPosition]} />
            )}}
          />

          <Route path="*" component={Lost}>
          {/* <Route path="/404" component={Lost} /> */}
          {/* <Redirect to="/404" /> */}
           <Redirect to="/" />
          </Route>


        </Switch>

      </div>
    </Router>

  );
}

export default App;
