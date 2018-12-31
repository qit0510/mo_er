import {actionType} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

const setArtisanInfo = (data) => ({
  type: actionType.SET_ARTISAN,
  data: data
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
