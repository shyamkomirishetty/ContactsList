import { combineReducers } from 'redux';
import modalReducer from './modal-reducer';
import contactsInfoObject from './contacts-reducer';
import tempContactReducer from './temp-contact-reducer';

export default combineReducers({
  modalReducer,
  contactsInfoObject,
  tempContactReducer,
});
