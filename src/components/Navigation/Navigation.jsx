import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <StyledLink to="/goit-react-hw-08-phonebook/">Home</StyledLink>
      {isLoggedIn && (
        <StyledLink to="/goit-react-hw-08-phonebook/contacts">
          Contacts
        </StyledLink>
      )}
    </Nav>
  );
};
