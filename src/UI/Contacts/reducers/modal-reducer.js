import { ModalObject } from '../records/records';
import * as Constants from '../utils/constants';

const init = new ModalObject({});
const reducer = (modalObject = init, action) => {
  if (!action || !action.type) return modalObject;
  switch (action.type) {

    case Constants.UPDATE_IS_MODAL_OPEN: {
      const isOpen = action.payLoad;
      return (typeof isOpen === 'boolean') ?
       modalObject.merge({ isOpen }) : modalObject;
    }

    case Constants.UPDATE_MODAL_RESPONSE: {
      const response = action.payLoad;
      return (typeof response === 'string') ?
       modalObject.merge({ response }) : modalObject;
    }

    default:
      return modalObject;
  }
};

export default reducer;
