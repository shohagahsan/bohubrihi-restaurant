import React from 'react';
import './App.css';
import MainComonent from './components/MainComponent';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import myStore from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComonent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
