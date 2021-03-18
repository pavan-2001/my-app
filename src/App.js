import React from 'react';
import LoginPortal from './LoginPage';
import SignUP from './SignUP';
import {BrowserRouter as Router,Route} from 'react-router-dom';


export default function App()
{
  return (
    <Router>
      <Route exact path='/' component={LoginPortal}/>
      <Route path='/Sign IN' component={LoginPortal} />
      <Route path='/Sign UP' component={SignUP} />
    </Router>
  );
}