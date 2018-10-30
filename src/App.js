import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import "material-design-lite/material.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import "material-design-lite/material.min.js";
// import 'material-design-icons/sprites/css-sprite/sprite-av-white.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Navbar />
          <Sidebar />
          <main className="mdl-layout__content mdl-button--accent  mdl-color--grey-100">
            <Home />
			    </main>
        </div>
      </div>
    );
  }
}

export default App;
