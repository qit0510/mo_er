import {actionType} from './index';
import axios from 'axios';

const getCommentInfo = (data) => ({
  type: actionType.GET_Comment_INFO,
  data
});

const setCommentData = (data) => ({
  type: actionType.ADD_COMMENT_DATA,
  data
});

export const sendComment = (id) => {
  return (dispatch) => {
    axios.get('/api/comment/'+id).then((res) => {
      dispatch(getCommentInfo(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
export const addCommentData = (data) => {
  return (dispatch) => {
      dispatch(setCommentData(data));
  };
}