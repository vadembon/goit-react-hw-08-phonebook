import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import styled from 'styled-components';

const BackImg = styled.div`
  height: 100vh;

  background-image: url(https://unblast.com/wp-content/uploads/2020/05/Light-Wood-Background-Texture-1536x1024.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  return (
    <BackImg>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BackImg>
  );
};
