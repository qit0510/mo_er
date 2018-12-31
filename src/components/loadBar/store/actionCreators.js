import {actionType} from './index';
import axios from 'axios';
//获取更多
const addNoteInfo = (data) => ({
  type: actionType.ADD_NOTE_INFO,
  data
});
//加载开启
export const setLoadState = () => {
  return {
    type: actionType.SET_LOAD_STATE,
  };
};
//加载关闭
export const setLoadClose = () => {
  return {
    type: actionType.SET_LOAD_CLOSE,
  };
};
//下一路劲
const setPathInfo = (data) => ({
  type: actionType.SET_NEXT_INFO,
  data
})
export const getMoreaNote = (path) => {
  return (dispatch) => {
    dispatch(setLoadState());
    axios.get(path).then((res) => {
      dispatch(addNoteInfo(res.data.data));
      if((typeof res.data.next_page_url) === "undefined" || (res.data.next_page_url) === null || (res.data.next_page_url) === ""){
        dispatch(setPathInfo(false));
      }else{
        dispatch(setPathInfo(res.data.next_page_url.substr(21)));
      }
      dispatch(setLoadClose());
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
