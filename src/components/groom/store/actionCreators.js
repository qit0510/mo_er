import {actionType} from './index';
import axios from 'axios';

const setInitGroomInfo = (data) => ({
  type: actionType.GET_GROOM_LIST,
  data: data
});


export const initGroomInfo = () => {
  return (dispatch) => {

  };
};
