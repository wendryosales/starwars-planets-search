import React from 'react';
import './App.css';
import Home from './Components/Home';
import Provider from './context/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
