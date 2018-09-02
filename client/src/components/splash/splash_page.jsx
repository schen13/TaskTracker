import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

    render() {
        return (
        <div className="splash-greeting-container">
            <div className="splash-greeting">
                <div className="welcome-message">
                    <h1 className="greeting-text">
                        Welcome to Task Tracker
                    </h1>
                    <Link className='splash-signup-button' to="/signup">
                        Join Now!
                    </Link>
                </div>
            </div>
        </div>
        );
    }
}

export default SplashPage;