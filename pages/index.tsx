import React from 'react';
import RsiPage from './pages/RsiPage';
import styled from 'styled-components';

export default function Home() {
  return (
    <MainLayout>
      <RsiPage />
    </MainLayout>
  );
}

const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
