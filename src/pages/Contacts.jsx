import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Loader, BoxForm } from 'pages/Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <BoxForm>
      <ContactForm />
      <Filter />
      <Loader>{isLoading && 'Request in progress...'}</Loader>
      <ContactList />
    </BoxForm>
  );
}
