import React from 'react';
import './App.css';
import Main from './components/main'
import { CartProvider } from './components/cartcontext';
import Admin from './components/Admin';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <CartProvider>
          <Route path="/" component={Main}/>
          <Route path='/dashboard' component={Admin}/>
      </CartProvider>
    </div>
  );
}

export default App;
