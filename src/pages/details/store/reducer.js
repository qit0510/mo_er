import {actionType} from './index';
import {fromJS} from 'immutable';

const defauleState = fromJS({
  artisan: {
    user: {},
    is_zan:false,
    up_votes_count:0,
  },
});
export default (state = defauleState, action) => {
  switch (action.type) {
  case actionType.SET_ARTISAN_INFO:
    return state.set('artisan', action.data);
    case actionType.SET_IS_ZAN:
      let count = state.getIn(['artisan', 'up_votes_count']);
      return state.setIn(['artisan', 'is_zan'], action.data).setIn(['artisan','up_votes_count'],action.data ? ++count:--count);
  default:
    return state;
  }


};

