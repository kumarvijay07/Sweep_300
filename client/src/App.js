import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Upload from './Components/Upload/Upload';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </div>
);

export default App;
