import sinon from 'sinon';
import chai from 'chai';
import * as TempContactActions from '../../../../src/UI/Contacts/actions/temp-contact-actions';
import { TempContactObj } from '../../../../src/UI/Contacts/records/records';
import * as Constants from '../../../../src/UI/Contacts/utils/constants';

const assert = chai.assert;

describe('TempContactActions', () => {
    describe('updateTempContact', () => {
        it("dispatch an error if tempContact is null", () => {
			const dispatch = sinon.spy();
			const tempContact = null;
			TempContactActions.updateTempContact(dispatch, tempContact);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
		});
        it("dispatch necessary action if tempContact is valid", () => {
			const dispatch = sinon.spy();
			const tempContact = new TempContactObj();
			TempContactActions.updateTempContact(dispatch, tempContact);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.UPDATE_TEMP_CONTACT);
		});
    });
    describe('clearTempContact', () => {
        it("dispatch necessary action when called", () => {
			const dispatch = sinon.spy();
			const tempContact = null;
			TempContactActions.clearTempContact(dispatch);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.UPDATE_TEMP_CONTACT);
		});
    });
    describe('onChangeFirstName', () => {
        it("dispatch an error if firstName is null", () => {
			const dispatch = sinon.spy();
			const firstName = null;
			TempContactActions.onChangeFirstName(dispatch, firstName);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_FIRST_NAME);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch an error if firstName is not a string", () => {
			const dispatch = sinon.spy();
			const firstName = 2;
			TempContactActions.onChangeFirstName(dispatch, firstName);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_FIRST_NAME);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch necessary actions if firstName is valid", () => {
			const dispatch = sinon.spy();
			const firstName = 'test';
			TempContactActions.onChangeFirstName(dispatch, firstName);
			sinon.assert.callCount(dispatch, 2);
			assert(dispatch.args[0][0].type === Constants.UPDATE_FIRST_NAME);
        	assert(dispatch.args[0][0].payLoad === firstName);
            assert(dispatch.args[1][0].type === Constants.INVALID_FIRST_NAME);
        	assert(dispatch.args[1][0].payLoad === false);
		});
    });
    describe('onChangeLastName', () => {
        it("dispatch an error if lastName is null", () => {
			const dispatch = sinon.spy();
			const lastName = null;
			TempContactActions.onChangeLastName(dispatch, lastName);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_LAST_NAME);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch an error if lastName is not a string", () => {
			const dispatch = sinon.spy();
			const lastName = 2;
			TempContactActions.onChangeLastName(dispatch, lastName);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_LAST_NAME);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch necessary actions if lastName is valid", () => {
			const dispatch = sinon.spy();
			const lastName = 'test';
			TempContactActions.onChangeLastName(dispatch, lastName);
			sinon.assert.callCount(dispatch, 2);
			assert(dispatch.args[0][0].type === Constants.UPDATE_LAST_NAME);
        	assert(dispatch.args[0][0].payLoad === lastName);
            assert(dispatch.args[1][0].type === Constants.INVALID_LAST_NAME);
        	assert(dispatch.args[1][0].payLoad === false);
		});
    });
    describe('onChangeEmail', () => {
        it("dispatch an error if email is null", () => {
			const dispatch = sinon.spy();
			const email = null;
			TempContactActions.onChangeEmail(dispatch, email);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_EMAIL);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch an error if email is not valid", () => {
			const dispatch = sinon.spy();
			const email = 'testmail@sss.';
			TempContactActions.onChangeEmail(dispatch, email);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_EMAIL);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch necessary actions if email is valid", () => {
			const dispatch = sinon.spy();
			const email = 'test@test.com';
			TempContactActions.onChangeEmail(dispatch, email);
			sinon.assert.callCount(dispatch, 2);
			assert(dispatch.args[0][0].type === Constants.INVALID_EMAIL);
        	assert(dispatch.args[0][0].payLoad === false);
            assert(dispatch.args[1][0].type === Constants.UPDATE_EMAIL);
        	assert(dispatch.args[1][0].payLoad === email);
		});
    });
    describe('onChangePhone', () => {
        it("dispatch an error if phone is null", () => {
			const dispatch = sinon.spy();
			const phone = null;
			TempContactActions.onChangePhone(dispatch, phone);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_PHONE);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch an error if phone is not valid", () => {
			const dispatch = sinon.spy();
			const phone = '93939';
			TempContactActions.onChangePhone(dispatch, phone);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.INVALID_PHONE);
        	assert(dispatchArgs.payLoad === true);
		});
        it("dispatch necessary actions if phone is valid", () => {
			const dispatch = sinon.spy();
			const phone = '202-100-2000';
			TempContactActions.onChangePhone(dispatch, phone);
			sinon.assert.callCount(dispatch, 2);
			assert(dispatch.args[0][0].type === Constants.INVALID_PHONE);
        	assert(dispatch.args[0][0].payLoad === false);
            assert(dispatch.args[1][0].type === Constants.UPDATE_PHONE);
        	assert(dispatch.args[1][0].payLoad === phone);
		});
    });
    describe('onChangeIsActive', () => {
        it("dispatch an error if isActive is null", () => {
			const dispatch = sinon.spy();
			const isActive = null;
			TempContactActions.onChangeIsActive(dispatch, isActive);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
		});
        it("dispatch necessary action if isActive is valid", () => {
			const dispatch = sinon.spy();
			const isActive = true;
			TempContactActions.onChangeIsActive(dispatch, isActive);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.UPDATE_IS_ACTIVE);
            assert(dispatchArgs.payLoad === isActive);
		});
    });
});