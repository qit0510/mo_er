import {actionType} from './index';
import {fromJS} from 'immutable';

const defauleState = fromJS({
  loading: false,
});
export default (state = defauleState, action) => {
  switch (action.type) {
    case actionType.SET_LOAD_STATE:
      return state.set('loading', true);
    case actionType.SET_LOAD_CLOSE:
      return state.set('loading', false);
    default:
      return state;
  }
};

