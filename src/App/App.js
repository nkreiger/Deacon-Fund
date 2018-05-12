import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// general components
import Modals from '../modals/modalshome';
import ModalsAbout from '../modals/modalsabout';
import Footer from '../footer/footer';


// router
import Router from '../router';


//class to return html
class App extends Component {
  // constructor
  constructor(props) {
    super(props);
}
  render() {
    return (
      <div className="App" id="font-change">
        <div className="container-fluid">
          <Router />
        </div>
          <Modals />
          <ModalsAbout />
          <Footer />
      </div>
    );
  }
}

export default App;
