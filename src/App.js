import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={() => 'Hi'} />
          <Route path="/rockets" element={() => 'Hi'} />
          <Route path="/mission" element={() => 'Hi'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
