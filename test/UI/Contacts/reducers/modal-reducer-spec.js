import chai from 'chai';
import modalReducer from '../../../../src/UI/Contacts/reducers/modal-reducer';
import { ModalObject } from '../../../../src/UI/Contacts/records/records';
import * as Constants from '../../../../src/UI/Contacts/utils/constants';

const assert = chai.assert;

describe('modalReducer', () => {
	it("returns the original state if the action type is not recogonized", () => {
		const original = { test: 'someObject' };
		const response = modalReducer(original, { type: 'unknown' });
		assert(original === response);
	});
	it("returns the original state if the action is null", () => {
		const original = null;
		const response = modalReducer(original, {});
		assert(original === response);
	});
	it("returns the original state if the action type is null", () => {
		const original = null;
		const response = modalReducer(original, { type: null });
		assert(original === response);
	});
    describe('UPDATE_IS_MODAL_OPEN', () => {
		it("updates isOpen in the state if payload is valid", () => {
            const modalObj = new ModalObject( {isOpen: false} );
			const payLoad = true;
			const response = modalReducer(modalObj, { type: Constants.UPDATE_IS_MODAL_OPEN, payLoad });
            assert(response.isOpen === payLoad);
		});
        it("does not update isOpen in the state if payload is null", () => {
            const modalObj = new ModalObject( {isOpen: false} );
			const payLoad = null;
			const response = modalReducer(modalObj, { type: Constants.UPDATE_IS_MODAL_OPEN, payLoad });
            assert(response.isOpen !== payLoad);
			assert(response.isOpen === modalObj.isOpen);
		});
        it("does not update isOpen in the state if payload is not a boolean", () => {
            const modalObj = new ModalObject( {isOpen: false} );
			const payLoad = 2;
			const response = modalReducer(modalObj, { type: Constants.UPDATE_IS_MODAL_OPEN, payLoad });
            assert(response.isOpen !== payLoad);
			assert(response.isOpen === modalObj.isOpen);
		});
    });
    describe('UPDATE_MODAL_RESPONSE', () => {
		it("updates response in the state if payload is valid", () => {
            const modalObj = new ModalObject( {response: ''} );
			const payLoad = 'Some response';
			const modalResponse = modalReducer(modalObj, { type: Constants.UPDATE_MODAL_RESPONSE, payLoad });
            assert(modalResponse.response === payLoad);
		});
        it("does not update response in the state if payload is null", () => {
            const modalObj = new ModalObject( {response: ''} );
			const payLoad = null;
			const modalResponse = modalReducer(modalObj, { type: Constants.UPDATE_MODAL_RESPONSE, payLoad });
            assert(modalResponse.response !== payLoad);
			assert(modalResponse.response === modalObj.response);
		});
        it("does not update response in the state if payload is not a boolean", () => {
            const modalObj = new ModalObject( {response: ''} );
			const payLoad = 2;
			const modalResponse = modalReducer(modalObj, { type: Constants.UPDATE_MODAL_RESPONSE, payLoad });
            assert(modalResponse.response !== payLoad);
			assert(modalResponse.response === modalObj.response);
		});
    });
});