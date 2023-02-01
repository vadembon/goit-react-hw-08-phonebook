import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { BoxForm, Form, Label, Input, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <BoxForm>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Email</Label>
        <Input type="email" name="email" />

        <Label>Password</Label>
        <Input type="password" name="password" />

        <Btn type="submit">Log In</Btn>
      </Form>
    </BoxForm>
  );
};
