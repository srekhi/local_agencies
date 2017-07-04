import { connect } from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = state => ({
  userName: state.session.currentUser.username
});

export default connect(mapStateToProps, null)(Welcome);
