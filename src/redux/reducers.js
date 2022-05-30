import { combineReducers } from 'redux';
import { projects } from './projects/reducer';

const appReducer = combineReducers({
  projects
});

const rootReducer = (state, action) => {
  appReducer(state, action);
};

export default rootReducer;
