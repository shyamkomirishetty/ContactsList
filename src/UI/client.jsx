import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import ContactsMain from './Contacts/components/contacts-main';
import contactsInfoObject from './Contacts/reducers/contacts-reducer';
import tempContactObject from './Contacts/reducers/temp-contact-reducer';
import modalObject from './Contacts/reducers/modal-reducer';

const logger = createLogger();

const reducer = combineReducers({
  modalObject,
  tempContactObject,
  contactsInfoObject,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

const dom = () => {
  render(
    <Provider store={store}>
      <ContactsMain style={{ width: 'inherit', height: 'inherit' }} />
    </Provider>, document.getElementById('app'),
  );
};
dom();
store.subscribe(dom);
