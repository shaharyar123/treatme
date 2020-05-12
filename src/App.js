import React from 'react';

import { Router } from "react-router-dom";
import DefaultContainer from "./container/default-container";
import history from "./history/history";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import './styles/general.css';

import './App.scss';


function App() {
  return (
    <Router history={history}>
      <React.Fragment>
        <Header />
        <DefaultContainer />
      </React.Fragment>
    </Router>
  );
}

export default App;

