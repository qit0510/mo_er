import {actionType} from './index';
import axios from 'axios';
const checkLogin = (data) => ({
  type: actionType.CHECK_LOGIN,
  data
});

export const setMenuState = (e) => ({
  type: actionType.SET_MENU_STATE,
  data: e.key
});
export const openSetWindow = () => ({
  type: actionType.OPEN_SET_WINDOW
});
export const closeSetWindow = () => ({
  type: actionType.CLOSE_SET_WINDOW
});
export const setIsDark = () => ({
  type: actionType.SET_IS_DARK
});
export const clearUser = () =>({
  type: actionType.CLEAT_USER
});
export const isLogin = () => {
  return (dispatch) => {
    axios.get('/api/user/check').then((res) => {
      if (res.data === 'false'){
        dispatch(checkLogin(false));
      }else {
        dispatch(checkLogin(res.data));
      }
    }).catch((errors) => {
      console.log(errors);
    });
  };
};