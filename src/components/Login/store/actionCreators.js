import axios from 'axios';
import history from '../../../history';


export const sendLoad = (value) => {
  return (dispatch) => {
    axios.post('api/loginUser',value).then((res) => {
      if (res.status === 204){
        history.goBack();
      }else {
        console.log('232');
      }
    }).catch((errors) => {
      console.log(errors);
    });
  };
};
