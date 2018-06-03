import sinon from 'sinon';
import chai from 'chai';
import * as ModalActions from '../../../../src/UI/Contacts/actions/modal-actions';
import * as Constants from '../../../../src/UI/Contacts/utils/constants';

const assert = chai.assert;

describe('ModalActions', () => {
    describe('UpdateIsModalOpen', () => {
        it("dispatch an error if isOpen is null", () => {
			const dispatch = sinon.spy();
			const isOpen = null;
			ModalActions.UpdateIsModalOpen(dispatch, isOpen);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.PATIENTINFO_ERROR);
        	assert(dispatchArgs.payLoad === Constants.MODAL_ERROR_MESSAGE);
		});
        it("dispatch an action if isOpen is a boolean", () => {
			const dispatch = sinon.spy();
			const isOpen = true;
			ModalActions.UpdateIsModalOpen(dispatch, isOpen);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.UPDATE_IS_MODAL_OPEN);
        	assert(dispatchArgs.payLoad === isOpen);
		});
        it("dispatch an error if the isOpen is not a boolean", () => {
			const dispatch = sinon.spy();
			const isOpen = 5;
			ModalActions.UpdateIsModalOpen(dispatch, isOpen);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.PATIENTINFO_ERROR);
        	assert(dispatchArgs.payLoad === Constants.MODAL_ERROR_MESSAGE);
		});
    });
    describe('updateModalResponse', () => {
        it("dispatch an error if modalResponse is null", () => {
			const dispatch = sinon.spy();
			const modalResponse = null;
			ModalActions.updateModalResponse(dispatch, modalResponse);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.PATIENTINFO_ERROR);
        	assert(dispatchArgs.payLoad === Constants.MODAL_ERROR_MESSAGE);
		});
        it("dispatch an action if modalResponse is a string", () => {
			const dispatch = sinon.spy();
			const modalResponse = 'Some Response';
			ModalActions.updateModalResponse(dispatch, modalResponse);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.UPDATE_MODAL_RESPONSE);
        	assert(dispatchArgs.payLoad === modalResponse);
		});
        it("dispatch an error if the modalResponse is not a string", () => {
			const dispatch = sinon.spy();
			const modalResponse = 5;
			ModalActions.updateModalResponse(dispatch, modalResponse);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.PATIENTINFO_ERROR);
        	assert(dispatchArgs.payLoad === Constants.MODAL_ERROR_MESSAGE);
		});
    });
	describe('clearModalObject', () => {
        it("dispatch necessary actions when called", () => {
			const dispatch = sinon.spy();
			ModalActions.clearModalObject(dispatch);
			sinon.assert.callCount(dispatch, 2);
			assert(dispatch.args[0][0].type === Constants.UPDATE_IS_MODAL_OPEN);
        	assert(dispatch.args[0][0].payLoad === false);
			assert(dispatch.args[1][0].type === Constants.UPDATE_MODAL_RESPONSE);
        	assert(dispatch.args[1][0].payLoad === '');
		});
    });
});