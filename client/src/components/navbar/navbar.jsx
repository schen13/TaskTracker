import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (

        <nav className="login-signup">
            <div className="logo-container">
                <Link to="/" className="header-link">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => {
        return (

            <hgroup className="header-group">
                <div className="logo-container">
                    <Link to="/" className="header-link">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <h2 className="header-name">Hi,{currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </hgroup>
        );
    };

    return currentUser.id ? personalGreeting() : sessionLinks();
};


export default Navbar;