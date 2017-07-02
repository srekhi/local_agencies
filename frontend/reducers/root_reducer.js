import AgenciesReducer from './agencies_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  agencies: AgenciesReducer
});

export default RootReducer;
