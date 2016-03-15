import { combineReducers } from 'redux';
import modal from './modal';
import galleries from './galleries';

const imgurApp = combineReducers({
  galleries,
})

export default imgurApp
