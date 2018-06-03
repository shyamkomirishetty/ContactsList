import chai from 'chai';
import tempContactReducer from '../../../../src/UI/Contacts/reducers/temp-contact-reducer';
import { TempContactObj } from '../../../../src/UI/Contacts/records/records';
import * as Constants from '../../../../src/UI/Contacts/utils/constants';

const assert = chai.assert;

describe('tempContactReducer', () => {
	it("returns the original state if the action type is not recogonized", () => {
		const original = { test: 'someObject' };
		const response = tempContactReducer(original, { type: 'unknown' });
		assert(original === response);
	});
	it("returns the original state if the action is null", () => {
		const original = null;
		const response = tempContactReducer(original, {});
		assert(original === response);
	});
	it("returns the original state if the action type is null", () => {
		const original = null;
		const response = tempContactReducer(original, { type: null });
		assert(original === response);
	});
    describe('UPDATE_TEMP_CONTACT', () => {
		it("updates contact in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = new TempContactObj({id: 1});
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_TEMP_CONTACT, payLoad });
            assert(response.id === 1);
		});
        it("updates contact in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_TEMP_CONTACT, payLoad });
            assert(response.id === null);
		});
    });
    describe('UPDATE_FIRST_NAME', () => {
		it("does not update firstName in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_FIRST_NAME, payLoad });
            assert(response.firstName === '');
		});
        it("does not update firstName in the state if payload is not a string", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_FIRST_NAME, payLoad });
            assert(response.firstName === '');
		});
        it("updates the firstName in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 'test';
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_FIRST_NAME, payLoad });
            assert(response.firstName === payLoad);
		});
    });
    describe('UPDATE_LAST_NAME', () => {
		it("does not update lastName in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_LAST_NAME, payLoad });
            assert(response.lastName === '');
		});
        it("does not update lastName in the state if payload is not a string", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_LAST_NAME, payLoad });
            assert(response.lastName === '');
		});
        it("updates the lastName in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 'test';
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_LAST_NAME, payLoad });
            assert(response.lastName === payLoad);
		});
    });
    describe('UPDATE_EMAIL', () => {
		it("does not update email in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_EMAIL, payLoad });
            assert(response.email === '');
		});
        it("does not update email in the state if payload is not a string", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_EMAIL, payLoad });
            assert(response.email === '');
		});
        it("updates the email in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 'test@sd.co';
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_EMAIL, payLoad });
            assert(response.email === payLoad);
		});
    });
    describe('UPDATE_PHONE', () => {
		it("does not update phone in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_PHONE, payLoad });
            assert(response.phone === '');
		});
        it("does not update phone in the state if payload is not a string", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_PHONE, payLoad });
            assert(response.phone === '');
		});
        it("updates the phone in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = '202-120-1222';
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_PHONE, payLoad });
            assert(response.phone === payLoad);
		});
    });
    describe('UPDATE_IS_ACTIVE', () => {
		it("does not update isActive in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_IS_ACTIVE, payLoad });
            assert(response.isActive === true);
		});
        it("does not update isActive in the state if payload is not a boolean", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_IS_ACTIVE, payLoad });
            assert(response.isActive === true);
		});
        it("updates the isActive in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = false;
			const response = tempContactReducer(tempContactObj, { type: Constants.UPDATE_IS_ACTIVE, payLoad });
            assert(response.isActive === payLoad);
		});
    });
    describe('INVALID_FIRST_NAME', () => {
		it("does not update fnError in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_FIRST_NAME, payLoad });
            assert(response.fnError === false);
		});
        it("does not update fnError in the state if payload is not a boolean", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_FIRST_NAME, payLoad });
            assert(response.fnError === false);
		});
        it("updates the fnError in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = true;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_FIRST_NAME, payLoad });
            assert(response.fnError === payLoad);
		});
    });
    describe('INVALID_LAST_NAME', () => {
		it("does not update lnError in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_LAST_NAME, payLoad });
            assert(response.lnError === false);
		});
        it("does not update lnError in the state if payload is not a boolean", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_LAST_NAME, payLoad });
            assert(response.lnError === false);
		});
        it("updates the lnError in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = true;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_LAST_NAME, payLoad });
            assert(response.lnError === payLoad);
		});
    });
    describe('INVALID_EMAIL', () => {
		it("does not update emailError in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_EMAIL, payLoad });
            assert(response.emailError === false);
		});
        it("does not update emailError in the state if payload is not a boolean", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_EMAIL, payLoad });
            assert(response.emailError === false);
		});
        it("updates the emailError in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = true;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_EMAIL, payLoad });
            assert(response.emailError === payLoad);
		});
    });
    describe('INVALID_PHONE', () => {
		it("does not update phoneError in the state if payload is null", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = null;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_PHONE, payLoad });
            assert(response.phoneError === false);
		});
        it("does not update phoneError in the state if payload is not a boolean", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = 1;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_PHONE, payLoad });
            assert(response.phoneError === false);
		});
        it("updates the phoneError in the state if payload is valid", () => {
            const tempContactObj = new TempContactObj();
			const payLoad = true;
			const response = tempContactReducer(tempContactObj, { type: Constants.INVALID_PHONE, payLoad });
            assert(response.phoneError === payLoad);
		});
    });
});