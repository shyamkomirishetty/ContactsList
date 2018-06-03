import { Record as ImmutableRecord, List as ImmutableList } from 'immutable';

export const ContactObj = ImmutableRecord({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  isActive: true,
});

export const TempContactObj = ImmutableRecord({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  isActive: true,
  fnError: false,
  lnError: false,
  emailError: false,
  phoneError: false,
});

export const ModalObject = ImmutableRecord({
  isOpen: false,
  response: '',
});

export const ContactInformation = ImmutableRecord({
  contactsList: ImmutableList([
    new ContactObj({ id: 10, firstName: 'John', lastName: 'Doe', email: 'john.d@yahoo.com', phone: '202-120-2323', isActive: true }),
    new ContactObj({ id: 20, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com', phone: '(202)120-2000', isActive: false }),
    new ContactObj({ id: 30, firstName: 'Mathew', lastName: 'Williams', email: 'mw@yahoo.com', phone: '202-120-1000', isActive: true }),
  ]),
  error: null,
  filter: 'All',
});
