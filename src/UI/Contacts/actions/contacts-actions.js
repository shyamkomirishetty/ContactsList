import * as Constants from '../utils/constants';
import { ContactInformation, TempContactObj } from '../records/records';

export const addEditContact = () => (dispatch, getState) => {
  try {
    if (!(getState && getState())) throw new Error(Constants.CONTACTS_ERROR_MESSAGE);
    const { tempContactObject, contactsInfoObject } = getState();
    if (!(tempContactObject instanceof TempContactObj
      && contactsInfoObject instanceof ContactInformation)) {
      throw new Error(Constants.CONTACTS_ERROR_MESSAGE);
    }
    if (tempContactObject.id) {
      dispatch({ type: Constants.SAVE_EDIT_CONTACT, payLoad: tempContactObject });
    } else {
      const updatedContactObject = tempContactObject.set('id', new Date().valueOf());
      dispatch({ type: Constants.ADD_CONTACT, payLoad: updatedContactObject });
    }
  } catch (err) {
    dispatch({ type: Constants.CONTACTS_ERROR, payLoad: err.message });
  }
};

export const deleteContact = (dispatch, contactId) => {
  if (typeof contactId === 'number') {
    dispatch({ type: Constants.DELETE_CONTACT, payLoad: contactId });
  } else {
    dispatch({ type: Constants.CONTACTS_ERROR, payLoad: Constants.DELETE_ERROR_MESSAGE });
  }
};

export const filterContacts = (dispatch, filter) => {
  if (typeof filter === 'string') {
    dispatch({ type: Constants.FILTER_CONTACTS, payLoad: filter });
  } else {
    dispatch({ type: Constants.CONTACTS_ERROR, payLoad: Constants.CONTACTS_ERROR_MESSAGE });
  }
};
