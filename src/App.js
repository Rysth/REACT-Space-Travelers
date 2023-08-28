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
          <Route path="/profile" element={<h2>Hello World!</h2>} />
          <Route path="/rockets" element={<h2>Rockets!</h2>} />
          <Route path="/missions" element={<h2>Missions!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
