import { TempContactObj } from '../records/records';
import * as Constants from '../utils/constants';

const init = new TempContactObj({});
const reducer = (tempContactObj = init, action) => {
  if (!action || !action.type) return tempContactObj;
  switch (action.type) {

    case Constants.UPDATE_TEMP_CONTACT: {
      return (action.payLoad) ?
       tempContactObj.merge(action.payLoad) : tempContactObj;
    }
    case Constants.UPDATE_FIRST_NAME: {
      if (!action.payLoad) return tempContactObj;
      const firstName = action.payLoad;
      return (typeof firstName === 'string') ?
       tempContactObj.merge({ firstName }) : tempContactObj;
    }
    case Constants.UPDATE_LAST_NAME: {
      if (!action.payLoad) return tempContactObj;
      const lastName = action.payLoad;
      return (typeof lastName === 'string') ?
       tempContactObj.merge({ lastName }) : tempContactObj;
    }
    case Constants.UPDATE_EMAIL: {
      const email = action.payLoad;
      return (typeof email === 'string') ?
       tempContactObj.merge({ email }) : tempContactObj;
    }
    case Constants.UPDATE_PHONE: {
      const phone = action.payLoad;
      return (typeof phone === 'string') ?
       tempContactObj.merge({ phone }) : tempContactObj;
    }
    case Constants.UPDATE_IS_ACTIVE: {
      const isActive = action.payLoad;
      return (typeof isActive === 'boolean') ?
       tempContactObj.merge({ isActive }) : tempContactObj;
    }
    case Constants.INVALID_FIRST_NAME: {
      const fnError = action.payLoad;
      return (typeof fnError === 'boolean') ?
       tempContactObj.merge({ fnError }) : tempContactObj;
    }
    case Constants.INVALID_LAST_NAME: {
      const lnError = action.payLoad;
      return (typeof lnError === 'boolean') ?
       tempContactObj.merge({ lnError }) : tempContactObj;
    }
    case Constants.INVALID_EMAIL: {
      const emailError = action.payLoad;
      return (typeof emailError === 'boolean') ?
       tempContactObj.merge({ emailError }) : tempContactObj;
    }
    case Constants.INVALID_PHONE: {
      const phoneError = action.payLoad;
      return (typeof phoneError === 'boolean') ?
       tempContactObj.merge({ phoneError }) : tempContactObj;
    }
    default:
      return tempContactObj;
  }
};

export default reducer;
