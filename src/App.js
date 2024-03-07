import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Journey from './Journey';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/journey" element={<Journey />} />
   </Routes>
  );
}

export default App;
