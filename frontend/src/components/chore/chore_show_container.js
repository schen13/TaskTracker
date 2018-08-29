import { connect } from 'react-redux';

import { fetchChore, updateChore, deleteChore } from '../../actions/chore_actions';
import ChoreShow from './chore_show';

const mapStateToProps = (state) => ({
   
});

const mapDispatchToProps = dispatch => ({
  fetchChore: id => dispatch(fetchChore(id)),
  updateChore: chore => dispatch(updateChore(chore)),
  deleteChore: id => dispatch(deleteChore(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoreShow);