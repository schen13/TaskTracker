import { connect } from 'react-redux';

import { fetchChores, deleteChore } from '../../actions/chore_actions';
import ChoreIndex from './chore_index';

const mapStateToProps = (state) => ({
   chores: Object.values(state.entities.chores)
});

const mapDispatchToProps = dispatch => ({
  fetchChores: () => dispatch(fetchChores),
  deleteChore: id => dispatch(deleteChore(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoreIndex);