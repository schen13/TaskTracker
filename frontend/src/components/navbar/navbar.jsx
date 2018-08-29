import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    console.log(currentUser, "currentUser");
    console.log(currentUser.id);
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => {
        // console.log(currentUser);
        return (
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </hgroup>
        )
    };

    return currentUser.id ? personalGreeting() : sessionLinks();
};


export default Navbar;