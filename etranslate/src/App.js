
import React, { Component } from 'react';
import Home from './Components/Home';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Appbar from './Components/Appbar';
import NotFound from './Components/NotFound';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Service from './Components/Service';
import Team from './Components/Team';
import About from './Components/About';
import EthNav from './Components/EthNav';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Link as LinkMe,
  Switch,
  Redirect, 
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
    
        <div>
        {
          window.location.pathname !== '/signin' && window.location.pathname !== '/signup' &&  <EthNav/>
        }
      
        <Router>
        <Switch>
        
          <Route exact path='/'  component={Home}/>
          {/* <Redirect from='' to='/'/> */}
          <Route exact path='/signin'  component={SignIn}/>
          <Route  exact path='/signup' component={SignUp}/>
          <Route exact path='/services'  component={Service}/>
          <Route exact path='/team' component={Team}/>
          <Route exact  path='/about'component={About}/>
          <Route component={NotFound} />
         
          </Switch>
          </Router>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
