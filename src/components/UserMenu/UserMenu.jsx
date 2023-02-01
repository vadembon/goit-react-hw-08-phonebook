import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Box, Btn, TextUser, SpanUser } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <TextUser>
        Hi, <SpanUser>{user}</SpanUser>
      </TextUser>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Box>
  );
};
