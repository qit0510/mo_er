import {actionType} from './index';
import axios from 'axios';

const setNoteInfo = (data) => ({
  type: actionType.GET_NOTE_INFO,
  data
});
const setPathInfo = (data) => ({
  type: actionType.SET_NEXT_INFO,
  data
})
export const getNoteInfo = (pathName) => {
  return (dispatch) => {
    axios.get('/api'+pathName).then((res) => {
      if (pathName.indexOf('/tag/')!== -1) {
        console.log(res.data.data[0].article)
        dispatch(res.data.data[0].article);
        dispatch(setPathInfo(false));
      }else {
        dispatch(setNoteInfo(res.data.data));
        if((typeof res.data.next_page_url) === "undefined" || (res.data.next_page_url) === null || (res.data.next_page_url) === ""){
          dispatch(setPathInfo(false));
        }else{
          dispatch(setPathInfo(res.data.next_page_url.substr(21)));
        }
      }
    }).catch((errors) => {
      console.log(errors);
    });
  };
};