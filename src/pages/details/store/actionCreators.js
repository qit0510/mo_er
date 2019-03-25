import {actionType} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

const setArtisanInfo = (data) => ({
  type: actionType.SET_ARTISAN_INFO,
  data: data
});
const setIsZan = (data) => ({
  type: actionType.SET_IS_ZAN,
  data: !data
});
export const getArisanInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/article/details/'+id).then((res) => {
      dispatch(setArtisanInfo(fromJS(res.data)));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};

export const changeZan = (id,isZan) => {
  return (dispatch) => {
    axios.post('/api/article/'+id+(isZan?'/unzan':'/zan')).then((res) => {
      (res.status === 204) && dispatch(setIsZan(isZan));
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
