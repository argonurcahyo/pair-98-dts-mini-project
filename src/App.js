import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import { WithoutNav } from './layout/WithoutNav';
import { WithNav } from './layout/WithNav';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import TVSeries from './pages/TVSeries';
import Movies from './pages/Movies';
import TVDetail from './pages/TVDetail';
import NewPopular from './pages/NewPopular';
import UserList from './components/UserList';
import Genre from './components/Genre';
import Actor from './components/Actor';
import Director from './components/Director';
import Tag from './components/Tag';

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
          <Route exact path="/movie" element={<Movies />} />
          <Route path="/movie/:movieId" element={
            // <ProtectedRoute>
            <MovieDetail />
            // </ProtectedRoute>
          } />
          <Route exact path="/tv" element={<TVSeries />} />
          <Route path="/tv/:tvId" element={<TVDetail />} />
          <Route path="/newpopular" element={<NewPopular />} />
          <Route path="/list" element={
            <div className='container'>
              <div className="home">
                <UserList />
              </div>
            </div>
          } />
          <Route path='genre/:id' element={<Genre />} />
          <Route path='actor/:id' element={<Actor />} />
          <Route path='director/:id' element={<Director />} />
          <Route path='tag/:id' element={<Tag />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
