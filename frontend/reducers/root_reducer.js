import AgenciesReducer from './agencies_reducer';
import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  agencies: AgenciesReducer,
  session: SessionReducer
});

export default RootReducer;
