import {actionType} from './index';
import axios from 'axios';

const setArticleData = (data) => ({
  type: actionType.SET_ARTICLE_DATA,
  data
});
export const getArtCreate = () => {
  return (dispatch) => {
    axios.get('/api/article/create').then((res) => {
      dispatch(setArticleData(res.data));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
