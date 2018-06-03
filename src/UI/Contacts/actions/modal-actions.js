import * as Constants from '../utils/constants';

export const UpdateIsModalOpen = (dispatch, isOpen) => {
  if (typeof isOpen === 'boolean') {
    dispatch({ type: Constants.UPDATE_IS_MODAL_OPEN, payLoad: isOpen });
  } else {
    dispatch({ type: Constants.PATIENTINFO_ERROR, payLoad: Constants.MODAL_ERROR_MESSAGE });
  }
};
export const updateModalResponse = (dispatch, modalResponse) => {
  if (typeof modalResponse === 'string') {
    dispatch({ type: Constants.UPDATE_MODAL_RESPONSE, payLoad: modalResponse });
  } else {
    dispatch({ type: Constants.PATIENTINFO_ERROR, payLoad: Constants.MODAL_ERROR_MESSAGE });
  }
};

export const clearModalObject = (dispatch) => {
  UpdateIsModalOpen(dispatch, false);
  updateModalResponse(dispatch, '');
};
