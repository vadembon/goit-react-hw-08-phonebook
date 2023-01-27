import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { TitleForm, Form, Label, Input, Btn } from './contactForm.styled';

export const ContactForm = () => {
  const dispach = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = {
      id: nanoid,
      name: form.elements.name.value,
    };
    dispach(addContact(newContact));
    form.reset();
  };

  return (
    <div>
      <TitleForm>Phonebook</TitleForm>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contacts</Btn>
      </Form>
    </div>
  );
};
