import React from 'react';
import './App.css';
import MainComonent from './components/MainComponent'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComonent />
      </BrowserRouter>
    </div>
  );
}

export default App;
