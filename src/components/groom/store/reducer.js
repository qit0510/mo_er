import {actionType} from './index';
import {fromJS} from 'immutable';

const defauleState = fromJS({
  list: ''
});
export default (state = defauleState, action) => {
  switch (action.type) {
  case actionType.GET_GROOM_LIST:
    return state.set('list', action.data);
  default:
    return state;
  }
};

