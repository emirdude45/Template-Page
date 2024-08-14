import React from 'react'
import './Style.css'

const Navbar = () => {
  return (
    <div>
         <header className="container py-2">
        <nav className="d-flex justify-content-between align-items-centerdebee--">
            <div className="logo">
                <a href="#" className="text-white fw-bold text-decoration-none">LOGO</a>
            </div>
            <div className="menu d-flex align-items-center">
                <ul className="nav ">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#">About</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#">Features</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <a href="#" className="btn">New Link</a>
            </div>
        </nav>

    </header>
    </div>
  )
}

export default Navbar