import {actionType} from './index';
import {fromJS} from 'immutable';

const defauleState = fromJS({
  current: 'mail',
  visible: false,
  isDark: false,
  user: {},
  parentCloum:[],
  tag:[]
});
export default (state = defauleState, action) => {
  switch (action.type) {
  case actionType.CLEAT_USER:
    return state.set('user', null);
  case actionType.CHECK_LOGIN:
    return state.set('user', action.data);
  case actionType.SET_MENU_STATE:
    return state.set('current', action.data);
  case actionType.OPEN_SET_WINDOW:
    return state.set('visible', true);
  case actionType.CLOSE_SET_WINDOW:
    return state.set('visible', false);
  case actionType.SET_IS_DARK:
    return state.set('isDark', (!state.get('isDark')));
  case actionType.GET_COLUMN:
    return state.set('parentCloum',action.data);
  case actionType.GET_TAG:
    return state.set('tag',action.data);
  default:
    return state;
  }


};

