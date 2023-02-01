import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { BoxForm, Form, Label, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <BoxForm>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>User name </Label>
        <Input type="text" name="name" />

        <Label>Email </Label>
        <Input type="email" name="email" />

        <Label>Password</Label>
        <Input type="password" name="password" />

        <Btn type="submit">Register</Btn>
      </Form>
    </BoxForm>
  );
};
