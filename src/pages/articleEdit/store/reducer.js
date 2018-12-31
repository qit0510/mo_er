import {actionType} from './index';
import {fromJS} from 'immutable';

const defauleState = fromJS({
  artisan: {
    user: {}
  }
});
export default (state = defauleState, action) => {
  switch (action.type) {
  case actionType.SET_ARTISAN:
    return state.set('artisan', action.data);
  default:
    return state;
  }


};

