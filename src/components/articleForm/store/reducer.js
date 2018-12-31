import {fromJS} from 'immutable';
import {actionType} from './index';

const defaultState = fromJS({
  columns:[],
  tags:[],
});

export default (state = defaultState, action) => {

  switch (action.type) {
  case actionType.SET_ARTICLE_DATA:
    return state.set('tags', action.data.tags).set('columns', action.data.columns);
  default:
    return state;
  }
};