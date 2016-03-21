import { combineReducers } from 'redux';
import galleries from './galleries';
import modal from './modal';

const imgurApp = combineReducers({
  galleries,
  modal,
})

export default imgurApp
