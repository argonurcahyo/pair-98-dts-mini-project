import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import './App.css'
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';
import { WithoutNav } from './layout/WithoutNav';
import { WithNav } from './layout/WithNav';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            } />
          <Route path="/register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            } />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={
            // <ProtectedRoute>
            <MovieDetail />
            // </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
