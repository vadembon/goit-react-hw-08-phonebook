import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  border-radius: 6px;

  color: black;

  text-decoration: none;
  font-size: 22px;
  &:not(:first-child) {
    margin-left: 16px;
  }
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  margin-left: 90px;
`;
