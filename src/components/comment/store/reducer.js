import {fromJS} from 'immutable';
import {actionType} from './index';

const defaultState = fromJS({
  comments: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_Comment_INFO:
      return state.set('comments', action.data);
    case actionType.ADD_COMMENT_DATA:
      return state.set('comments', state.get('comments').concat(action.data));
    default:
      return state;
  }
};