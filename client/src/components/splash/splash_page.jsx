import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import notebook from '../../assets/notebook.jpg';

class SplashPage extends React.Component {

    render() {
        return (
            <div className="splash-greeting-container">
                <header className="nav-bar">
                    <nav className="left-nav">
                        <Link to="/" className="header-link">
                            <img src={logo} alt="logo" />
                        </Link>

                    </nav>
                    <nav className="right-nav">
                        <ul>
                            <li className="github-link">
                                <a href="https://github.com/schen13/TaskTracker">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                            <li className="login">
                                <Link className='splash-signup-button' to="/login">
                                    Log In
                                </Link>
                            </li>
                            <li className="signup">
                                <Link className='splash-signup-button' to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="splash-greeting-top">
                    <div className="top-message">
                        <h1 className="top-text">
                            Tracking tasks has never been so smooth.
                        </h1>
                        <Link className='welcome-button' to="/signup">
                            Join Now
                        </Link>
                    </div>
                    <div className="splash-greeting-top-image">
                    </div>

                </div>
                <div className="splash-greeting-bottom">
                    <div className="splash-greeting-bottom-image">
                        <img src={notebook} alt="notebook" />
                    </div>
                    <div className="bottom-message">
                        <h1 className="bottom-text">
                            Boost your productivity levels.
                        </h1>
                        <h3 className="bottom-text-2">
                            Keep all your to-do's in one, organized place.
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;