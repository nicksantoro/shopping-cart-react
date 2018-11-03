import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader' 
import CartFooter from './Components/CartFooter'
import CartItems from './Components/CartItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <CartHeader />
        </header>
          <CartItems />
          <CartFooter />
      </div>
    );
  }
}

export default App;
