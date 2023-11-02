import { Suspense, lazy } from 'react';
import styled from 'styled-components';

const RsiPage = lazy(() => import('./RsiPage'));

export default function Home() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <RsiPage />
      </Suspense>
    </MainLayout>
  );
}

const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
