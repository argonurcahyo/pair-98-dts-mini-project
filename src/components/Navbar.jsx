import React from 'react'

const pages = ['Home', 'Series', 'Movies', 'New and Popular', 'My List'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
                <a href='/' key={i}>{p}</a>
            ))}
        </div >

    )

}

const NavbarRight = () => {
    return (
        <div className='nav-links right'>
            <a href='#'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href='#'>
                userName
            </a>
            <a href="#">
                <i className='fa far fa-gift'></i>
            </a>
        </div>
    )

}

export default Navbar