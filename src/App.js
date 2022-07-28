import * as React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import User from './components/User';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/user/:name?" component={User} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
