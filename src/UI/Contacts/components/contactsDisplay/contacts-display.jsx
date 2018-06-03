import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button, Input, FormFeedback } from 'reactstrap';
import * as Constants from '../../utils/constants';
import * as ModalActions from '../../actions/modal-actions';
import * as TempContactActions from '../../actions/temp-contact-actions';
import * as ContactsActions from '../../actions/contacts-actions';
import './contacts-display.css';

const onSave = (dispatch) => {
  dispatch(ContactsActions.addEditContact());
  ModalActions.updateModalResponse(dispatch, '');
};
const onCancel = (dispatch) => {
  TempContactActions.clearTempContact(dispatch);
  ModalActions.updateModalResponse(dispatch, '');
};

const editContact = (dispatch, modalResponse, contactInfo) => {
  ModalActions.updateModalResponse(dispatch, modalResponse);
  TempContactActions.updateTempContact(dispatch, contactInfo);
};

const buildRows = (contactInfo, modalObj, tempContactObj, index, dispatch) => {
  const id = contactInfo.id;
  const isNotValid = tempContactObj.fnError || tempContactObj.lnError || tempContactObj.emailError || tempContactObj.phoneError;
  return (
    <tbody>
      {(modalObj.response === Constants.EDIT_CONTACT + id) ?
        <tr>
          <td>
            <Input className="editCheckbox" type="checkbox" value="isActive" defaultChecked={tempContactObj.isActive} onChange={() => TempContactActions.onChangeIsActive(dispatch, !tempContactObj.isActive)} />
            {(isNotValid) && <div className="invalid-space" />}
          </td>
          <td>
            <Input invalid={tempContactObj.fnError} maxLength="25" type="text" defaultValue={tempContactObj.firstName} onChange={event => TempContactActions.onChangeFirstName(dispatch, event.target.value)} />
            <FormFeedback className="invalid-contacts-input">{Constants.FN_ERROR}</FormFeedback>
            {(isNotValid && !tempContactObj.fnError) && <div className="invalid-space" />}
          </td>
          <td>
            <Input invalid={tempContactObj.lnError} defaultValue={tempContactObj.lastName} maxLength="25" type="text" onChange={event => TempContactActions.onChangeLastName(dispatch, event.target.value)} />
            <FormFeedback className="invalid-contacts-input">{Constants.LN_ERROR}</FormFeedback>
            {(isNotValid && !tempContactObj.lnError) && <div className="invalid-space" />}
          </td>
          <td>
            <Input invalid={tempContactObj.emailError} defaultValue={tempContactObj.email} maxLength="50" type="email" onChange={event => TempContactActions.onChangeEmail(dispatch, event.target.value)} />
            <FormFeedback className="invalid-contacts-input">{Constants.EMAIL_ERROR}</FormFeedback>
            {(isNotValid && !tempContactObj.emailError) && <div className="invalid-space" />}
          </td>
          <td>
            <Input invalid={tempContactObj.phoneError} type="text" defaultValue={tempContactObj.phone} onChange={event => TempContactActions.onChangePhone(dispatch, event.target.value)} />
            <FormFeedback className="invalid-contacts-input">{Constants.PHONE_ERROR}</FormFeedback>
            {(isNotValid && !tempContactObj.phoneError) && <div className="invalid-space" />}
          </td>
          <td>
            <div className="actionButtonsContainer">
              <Button disabled={isNotValid} color="primary" onClick={() => onSave(dispatch)}>Save</Button>{' '}
              <Button onClick={() => onCancel(dispatch, '')}>Cancel</Button>
            </div>
            {(isNotValid) && <div className="invalid-space" />}
          </td>
        </tr> :
        <tr className="contactsRow">
          <td>{index + 1}</td>
          <td>{contactInfo.firstName}</td>
          <td>{contactInfo.lastName}</td>
          <td>{contactInfo.email}</td>
          <td>{contactInfo.phone}</td>
          <td>
            <div className="actionButtonsContainer">
              <Button className="editButton" onClick={() => editContact(dispatch, Constants.EDIT_CONTACT + id, contactInfo)}>Edit</Button>{' '}
              <Button color="warning" className="deleteButton" onClick={() => ContactsActions.deleteContact(dispatch, id)}>Delete</Button>
            </div>
          </td>
        </tr>
         }
    </tbody>
  );
};

const NoRecords = () =>
  (<tbody><tr><td className="no-records" colSpan="6">No records to display</td></tr></tbody>);

const FrTableHeader = () => (
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
  </thead>
);

const FrTableBody = ({ contactsList, modalObj, tempContactObj, dispatch }) => (
  contactsList.map((contactInfo, index) => buildRows(contactInfo, modalObj, tempContactObj, index, dispatch))
);

const FrTable = ({ contactsList, modalObj, tempContactObj, dispatch }) =>
  (<Table dark className="contactsTable">
    <FrTableHeader />
    {(contactsList.size) ?
      <FrTableBody contactsList={contactsList} modalObj={modalObj} tempContactObj={tempContactObj} dispatch={dispatch} />
      : <NoRecords />}
  </Table>);

const contactsDisplay = props => (
  <div>
    <FrTable contactsList={props.contactsList} modalObj={props.modalObject} tempContactObj={props.tempContactObj} dispatch={props.dispatch} />
  </div>
);

FrTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalObj: PropTypes.instanceOf(Object).isRequired,
  contactsList: PropTypes.instanceOf(Object).isRequired,
  tempContactObj: PropTypes.instanceOf(Object).isRequired,
};

contactsDisplay.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalObject: PropTypes.instanceOf(Object).isRequired,
  contactsList: PropTypes.instanceOf(Object).isRequired,
  tempContactObj: PropTypes.instanceOf(Object).isRequired,
};

export default connect(state => ({
  dispatch: state.dispatch,
  modalObject: state.modalObject,
  tempContactObj: state.tempContactObject,
}))(contactsDisplay);
