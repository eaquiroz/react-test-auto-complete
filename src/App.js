import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AutoComplete from './autocomplete/autocomplete';
import Data from './data.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="center">
          <AutoComplete
            suggestions={Data}
          />
        </div>
      </Router>
    );
  }
}
export default App;
