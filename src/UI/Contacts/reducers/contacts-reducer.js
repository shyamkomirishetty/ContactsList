import { ContactInformation, TempContactObj } from '../records/records';
import * as Constants from '../utils/constants';

const init = ContactInformation({});
const reducer = (contactsInfoObject = init, action) => {
  if (!action || !action.type) return contactsInfoObject;
  switch (action.type) {

    case Constants.ADD_CONTACT: {
      const index = contactsInfoObject.contactsList.size;
      return (action.payLoad instanceof TempContactObj) ?
       contactsInfoObject.merge({
         contactsList: contactsInfoObject.contactsList.insert(index, action.payLoad),
         error: null,
       }) : contactsInfoObject;
    }
    case Constants.SAVE_EDIT_CONTACT: {
      const index =
       contactsInfoObject.contactsList.findIndex(contactObj => contactObj.id === action.payLoad.id);
      return (typeof index === 'number') ?
       contactsInfoObject.merge({
         contactsList: contactsInfoObject.contactsList.set(index, action.payLoad),
         error: null,
       }) : contactsInfoObject;
    }
    case Constants.DELETE_CONTACT: {
      if (!(typeof action.payLoad === 'number')) return contactsInfoObject;
      const index =
        contactsInfoObject.contactsList.findIndex(contactObj => contactObj.id === action.payLoad);
      return (typeof index === 'number') ?
       contactsInfoObject.merge({
         contactsList: contactsInfoObject.contactsList.delete(index),
         error: null,
       }) : contactsInfoObject;
    }
    case Constants.FILTER_CONTACTS: {
      return (typeof action.payLoad === 'string') ?
       contactsInfoObject.merge({ filter: action.payLoad }) : contactsInfoObject;
    }

    default:
      return contactsInfoObject;
  }
};

export default reducer;
