import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Col, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import * as Constants from '../../utils/constants';
import * as ModalActions from '../../actions/modal-actions';
import * as ContactsActions from '../../actions/contacts-actions';
import * as TempContactActions from '../../actions/temp-contact-actions';

const onCancel = (dispatch) => {
  TempContactActions.clearTempContact(dispatch);
  ModalActions.UpdateIsModalOpen(dispatch, false);
  ModalActions.updateModalResponse(dispatch, '');
};
const onAdd = (dispatch) => {
  dispatch(ContactsActions.addEditContact());
  onCancel(dispatch);
};

const ContactModalView = (props) => {
  const isNotValid = props.tempContactObj.fnError || props.tempContactObj.lnError || props.tempContactObj.emailError || props.tempContactObj.phoneError || props.tempContactObj.firstName.length === 0 || props.tempContactObj.lastName.length === 0;
  return (
    <div>
      <Modal isOpen={props.modalObject.isOpen}>
        <ModalHeader>{Constants.ADD_NEW_CONTACT}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="firstName" sm={3}>First Name<span className="required-field">*</span></Label>
              <Col sm={9}>
                <Input invalid={props.tempContactObj.fnError} maxLength="25" type="text" name="firstName" id="firstName" placeholder="Enter First Name" onChange={event => TempContactActions.onChangeFirstName(props.dispatch, event.target.value)} />
                <FormFeedback>{Constants.FN_ERROR}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={3}>Last Name<span className="required-field">*</span></Label>
              <Col sm={9}>
                <Input invalid={props.tempContactObj.lnError} maxLength="25" type="text" name="lastName" id="lastName" placeholder="Enter Last Name" onChange={event => TempContactActions.onChangeLastName(props.dispatch, event.target.value)} />
                <FormFeedback>{Constants.LN_ERROR}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>Email</Label>
              <Col sm={9}>
                <Input invalid={props.tempContactObj.emailError} maxLength="50" type="email" name="email" id="exampleEmail" placeholder="Enter Email" onChange={event => TempContactActions.onChangeEmail(props.dispatch, event.target.value)} />
                <FormFeedback>{Constants.EMAIL_ERROR}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="phone" sm={3}>Phone</Label>
              <Col sm={9}>
                <Input invalid={props.tempContactObj.phoneError} type="text" name="phone" id="phone" placeholder="Enter Phone Number" onChange={event => TempContactActions.onChangePhone(props.dispatch, event.target.value)} />
                <FormFeedback>{Constants.PHONE_ERROR}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Active?</Label>
              <Col sm={9}>
                <Input className="contactsCheckbox" type="checkbox" value="isActive" defaultChecked onChange={() => TempContactActions.onChangeIsActive(props.dispatch, !props.tempContactObj.isActive)} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={isNotValid} onClick={() => onAdd(props.dispatch)}>Add</Button>
          <Button color="secondary" onClick={() => onCancel(props.dispatch)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ContactModalView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalObject: PropTypes.instanceOf(Object).isRequired,
  tempContactObj: PropTypes.instanceOf(Object).isRequired,
};

export default connect(state => ({
  modalObject: state.modalObject,
  tempContactObj: state.tempContactObject,
  dispatch: state.dispatch,
}))(ContactModalView);
