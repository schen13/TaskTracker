import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mapStateToProps = ({ entities: { users }, session }) => ({
    userId: session.id,
    users
});

const mapDispatchToProps = dispatch => ({
    fetchSingleUser: id => dispatch(fetchSingleUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);