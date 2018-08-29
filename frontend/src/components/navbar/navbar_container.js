import { connect } from 'react-redux';

import { logoutUser } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => {
    return {
        currentUser: session
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);