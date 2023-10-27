import styled from 'styled-components';

import RsiPage from './RsiPage';

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
