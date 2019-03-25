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
export const getColumn = (data) =>({
  type: actionType.GET_COLUMN,
  data
});
export const getTag = (data) =>({
  type: actionType.GET_TAG,
  data
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
export const getMainColumn = () => {
  return (dispatch) => {
    axios.get('/api/parent').then((res) => {
      dispatch(getColumn(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
export const getMainTag = () => {
  return (dispatch) => {
    axios.get('/api/tag').then((res) => {
      dispatch(getTag(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
