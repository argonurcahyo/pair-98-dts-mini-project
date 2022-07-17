import * as React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>

  );
}

export default App;
