import React from 'react'
import { auth } from '../apis/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const pages = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Series',
    link: '/tv'
  },
  {
    name: 'Movies',
    link: '/movie'
  },
  {
    name: 'New and Popular',
    link: '/newpopular'
  },
  {
    name: 'My List',
    link: '/list'
  },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {


  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          N
        </div>
      </div>
      <NavbarLeft />
      <div className="nav-btn">
        <label htmlFor="nav">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <NavbarRight />

    </div>

  )
}

const NavbarLeft = () => {
  return (
    <div className="nav-links">
      {pages.map((p, i) => (
        <a href={p.link} key={i}>{p.name}</a>
      ))}
    </div >
  )
}

const NavbarRight = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='nav-links right'>
      {user ?
        <div className="dropdown">
          <button className="dropbtn">{user.email.split("@")[0]}</button>
          <div className="dropdown-content">
            <a href="/login" onClick={onLogout}>Logout</a>
          </div>
        </div> :
        <Link to="/login">Login</Link>}
    </div>
  )

}

export default Navbar