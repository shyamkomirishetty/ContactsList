import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import ContactModalView from './add-contact';
import * as ModalActions from '../../actions/modal-actions';
import * as TempContactActions from '../../actions/temp-contact-actions';
import * as ContactsActions from '../../actions/contacts-actions';
import * as Constants from '../../utils/constants';
import './contacts-header.css';

const addContact = (dispatch, modalResponse) => {
  TempContactActions.clearTempContact(dispatch);
  ModalActions.UpdateIsModalOpen(dispatch, true);
  ModalActions.updateModalResponse(dispatch, modalResponse);
};

const filterContacts = (dispatch, filter) => {
  ContactsActions.filterContacts(dispatch, filter);
};

const contactsHeader = (props) => {
  const filter = props.contactsInfoObject.filter;
  return (
    <div className="contacts-header">
      <div className="contacts-header-label">Contacts</div>
      <ButtonGroup>
        <Button
          color="info" onClick={() => filterContacts(props.dispatch, 'All')}
          active={filter === 'All'}
        >All</Button>
        <Button
          color="info" onClick={() => filterContacts(props.dispatch, 'Active')}
          active={filter === 'Active'}
        >Active</Button>
        <Button
          color="info" onClick={() => filterContacts(props.dispatch, 'Inactive')}
          active={filter === 'Inactive'}
        >Inactive</Button>
      </ButtonGroup>
      <div>
        <Button
          color="primary"
          className="contacts-header-button"
          onClick={() => addContact(props.dispatch, Constants.ADD_CONTACT_MODAL)}
        >Add
        </Button>
        {(props.modalObject.response === Constants.ADD_CONTACT_MODAL) &&
        <ContactModalView /> }
      </div>
    </div>
  );
};

contactsHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalObject: PropTypes.instanceOf(Object).isRequired,
  contactsInfoObject: PropTypes.instanceOf(Object).isRequired,
};

export default connect(state => ({
  dispatch: state.dispatch,
  modalObject: state.modalObject,
  contactsInfoObject: state.contactsInfoObject,
}))(contactsHeader);
