import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Upload from './Components/Upload/Upload';
import ExpandBlog from './Components/Expand/ExpandBlog';
import About from './Components/About/About';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/post/:postId" element={<ExpandBlog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
