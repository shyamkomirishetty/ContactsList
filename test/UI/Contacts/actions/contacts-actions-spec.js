import sinon from 'sinon';
import chai from 'chai';
import * as ContactsActions from '../../../../src/UI/Contacts/actions/contacts-actions';
import * as Constants from '../../../../src/UI/Contacts/utils/constants';
import { ContactInformation, TempContactObj } from '../../../../src/UI/Contacts/records/records';

const assert = chai.assert;

describe('ContactsActions', () => {
    describe('deleteContact', () => {
        it("dispatch an error if contactId is null", () => {
			const dispatch = sinon.spy();
			const contactId = null;
			ContactsActions.deleteContact(dispatch, contactId);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.DELETE_ERROR_MESSAGE);
		});
        it("dispatch an error if contactId is not a number", () => {
			const dispatch = sinon.spy();
			const contactId = '10';
			ContactsActions.deleteContact(dispatch, contactId);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.DELETE_ERROR_MESSAGE);
		});
        it("dispatch necessary action if contactId is valid", () => {
			const dispatch = sinon.spy();
			const contactId = 9;
			ContactsActions.deleteContact(dispatch, contactId);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.DELETE_CONTACT);
        	assert(dispatchArgs.payLoad === contactId);
		});
    });
    describe('filterContacts', () => {
        it("dispatch an error if filter is null", () => {
			const dispatch = sinon.spy();
			const filter = null;
			ContactsActions.filterContacts(dispatch, filter);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
		});
        it("dispatch an error if filter is not a string", () => {
			const dispatch = sinon.spy();
			const filter = 2;
			ContactsActions.filterContacts(dispatch, filter);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
		});
        it("dispatch necessary action if filter is valid", () => {
			const dispatch = sinon.spy();
			const filter = 'All';
			ContactsActions.filterContacts(dispatch, filter);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.FILTER_CONTACTS);
        	assert(dispatchArgs.payLoad === filter);
		});
    });
    describe('addEditContact', () => {
        it("dispatches an error if getState is null", () => {
			const dispatch = sinon.spy();
			const getState = () => null;
			ContactsActions.addEditContact()(dispatch, getState);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
        });
        it("dispatches an error if tempContactObject is null", () => {
			const dispatch = sinon.spy();
			const getState = () => ({tempContactObject: null, contactsInfoObject: new ContactInformation()});
			ContactsActions.addEditContact()(dispatch, getState);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
        });
        it("dispatches an error if contactsInfoObject is null", () => {
			const dispatch = sinon.spy();
			const getState = () => ({tempContactObject: new TempContactObj(), contactsInfoObject: null});
			ContactsActions.addEditContact()(dispatch, getState);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.CONTACTS_ERROR);
        	assert(dispatchArgs.payLoad === Constants.CONTACTS_ERROR_MESSAGE);
        });
        it("dispatches necessary action if tempContactObject is valid", () => {
			const dispatch = sinon.spy();
			const getState = () => ({tempContactObject: new TempContactObj({id: 1}), contactsInfoObject: new ContactInformation()});
			ContactsActions.addEditContact()(dispatch, getState);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.SAVE_EDIT_CONTACT);
        });
        it("dispatches necessary action if contactsInfoObject is valid", () => {
			const dispatch = sinon.spy();
			const getState = () => ({tempContactObject: new TempContactObj(), contactsInfoObject: new ContactInformation()});
			ContactsActions.addEditContact()(dispatch, getState);
			const dispatchArgs = dispatch.args[0][0];
			sinon.assert.callCount(dispatch, 1);
			assert(dispatchArgs.type === Constants.ADD_CONTACT);
        });
    });
});