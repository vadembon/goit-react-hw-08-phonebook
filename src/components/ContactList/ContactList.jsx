import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { ListBox, Item, BtnItem, Text } from './contactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ListBox>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}:{number}
            <BtnItem type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </BtnItem>
          </Item>
        ))}
      </ul>
      {contacts.length === 0 && <Text>no contacts available</Text>}
    </ListBox>
  );
};
