import { StyledLink, Nav } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Nav>
      <StyledLink to="/goit-react-hw-08-phonebook/register">
        Register
      </StyledLink>
      <StyledLink to="/goit-react-hw-08-phonebook/login">Log In</StyledLink>
    </Nav>
  );
};
