import {fromJS} from 'immutable';
import {actionType} from './index';

const defaultState = fromJS({
  list: []
});

export default (state = defaultState, action) => {

  switch (action.type) {
  case actionType.GET_NOTE_INFO:
    return state.set('list', action.data);
  case actionType.ADD_NOTE_INFO:
    return state.set('list', state.get('list').concat(action.data.artlist));
  default:
    return state;
  }
};