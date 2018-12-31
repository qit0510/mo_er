import {fromJS} from 'immutable';
import {actionType} from './index';

const defaultState = fromJS({
  list: [],
  path:''
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionType.GET_NOTE_INFO:
      return state.set('list', action.data);
    case actionType.ADD_NOTE_INFO:
      return state.set('list', state.get('list').concat(action.data));
    case actionType.SET_NEXT_INFO:
      return state.set('path',action.data);
    default:
      return state;
  }
};