import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ContactsDisplay from './contactsDisplay/contacts-display';
import ContactsHeader from './contactsHeader/contacts-header';
import './contacts-main.css';

const BurnMain = (props) => {
  let contactsList = props.contactsInfoObject.contactsList;
  if (props.contactsInfoObject.filter === 'Active') {
    contactsList = contactsList.filter(contact => contact.isActive);
  }
  if (props.contactsInfoObject.filter === 'Inactive') {
    contactsList = contactsList.filter(contact => !contact.isActive);
  }
  return (
    <Container fluid>
      <Row noGutters className="contacts-container-header">
        <Col md="12">
          <ContactsHeader />
        </Col>
      </Row>
      <Row noGutters className="contacts-container-body">
        <Col sm="12" md="12">
          <ContactsDisplay contactsList={contactsList} />
        </Col>
      </Row>
    </Container>
  );
};

BurnMain.propTypes = {
  contactsInfoObject: PropTypes.instanceOf(Object).isRequired,
};

export default connect(state => ({
  contactsInfoObject: state.contactsInfoObject,
}))(BurnMain);
