import {actionType} from './index';
import axios from 'axios';

const setNoteInfo = (data) => ({
  type: actionType.GET_NOTE_INFO,
  data
});
export const getNoteInfo = () => {
  return (dispatch) => {
    axios.get('/api/article/artlist').then((res) => {
      dispatch(setNoteInfo(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};