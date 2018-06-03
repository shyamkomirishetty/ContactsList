import * as Constants from '../utils/constants';
import { TempContactObj, ContactObj } from '../records/records';

export const updateTempContact = (dispatch, tempContact) => {
  if (tempContact instanceof TempContactObj || tempContact instanceof ContactObj) {
    dispatch({ type: Constants.UPDATE_TEMP_CONTACT, payLoad: tempContact });
  } else {
    dispatch({ type: Constants.CONTACTS_ERROR, payLoad: Constants.CONTACTS_ERROR_MESSAGE });
  }
};

export const clearTempContact = (dispatch) => {
  updateTempContact(dispatch, new TempContactObj({}));
};

export const onChangeFirstName = (dispatch, firstName) => {
  if (typeof firstName !== 'string' || firstName.length === 0) {
    dispatch({ type: Constants.INVALID_FIRST_NAME, payLoad: true });
  } else {
    dispatch({ type: Constants.UPDATE_FIRST_NAME, payLoad: firstName });
    dispatch({ type: Constants.INVALID_FIRST_NAME, payLoad: false });
  }
};

export const onChangeLastName = (dispatch, lastName) => {
  if (typeof lastName !== 'string' || lastName.length === 0) {
    dispatch({ type: Constants.INVALID_LAST_NAME, payLoad: true });
  } else {
    dispatch({ type: Constants.UPDATE_LAST_NAME, payLoad: lastName });
    dispatch({ type: Constants.INVALID_LAST_NAME, payLoad: false });
  }
};

export const onChangeEmail = (dispatch, email) => {
  const isEmailValid = (typeof email === 'string') ? email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/ig) : null;
  if (typeof email !== 'string' || (!isEmailValid && email.length > 0)) {
    dispatch({ type: Constants.INVALID_EMAIL, payLoad: true });
  } else {
    dispatch({ type: Constants.INVALID_EMAIL, payLoad: false });
    dispatch({ type: Constants.UPDATE_EMAIL, payLoad: email });
  }
};

export const onChangePhone = (dispatch, phone) => {
  const isPhoneValid = (typeof phone === 'string') ?
    phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g) : null;
  if (typeof phone !== 'string' || (!isPhoneValid && phone.length > 0)) {
    dispatch({ type: Constants.INVALID_PHONE, payLoad: true });
  } else {
    dispatch({ type: Constants.INVALID_PHONE, payLoad: false });
    dispatch({ type: Constants.UPDATE_PHONE, payLoad: phone });
  }
};

export const onChangeIsActive = (dispatch, isActive) => {
  if (typeof isActive === 'boolean') {
    dispatch({ type: Constants.UPDATE_IS_ACTIVE, payLoad: isActive });
  } else {
    dispatch({ type: Constants.CONTACTS_ERROR, payLoad: Constants.CONTACTS_ERROR_MESSAGE });
  }
};

