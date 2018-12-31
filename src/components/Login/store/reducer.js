// import {actionType} from './index';
import {fromJS} from 'immutable';
// import * as actionType from "../../../store/actionType";

const defauleState = fromJS({
  load:false
});
export default (state = defauleState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
