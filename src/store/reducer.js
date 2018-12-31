import {combineReducers} from 'redux-immutable';
import headerReducer from '../components/header/store/reducer';
import groomReducer from '../components/groom/store/reducer';
import noteListReducer from '../components/artlist/store/reducer';
import loadBarReducer from '../components/loadBar/store/reducer';
import hotGroomReducer from '../components/hotGroom/store/reducer';
import detailReducer from '../pages/details/store/reducer';
import loginReducer from '../components/Login/store/reducer';
import articleCreatReducer from '../components/articleForm/store/reducer';
import ArticleEditReducer from '../pages/articleEdit/store/reducer';
import CommentReducer from '../components/comment/store/reducer';
export default combineReducers({
  header: headerReducer,
  groom: groomReducer,
  note: noteListReducer,
  loadBar: loadBarReducer,
  hotGroom: hotGroomReducer,
  detail: detailReducer,
  user: loginReducer,
  articleCreat:articleCreatReducer,
  articleEdit:ArticleEditReducer,
  comment:CommentReducer
});

