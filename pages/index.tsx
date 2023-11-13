import { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const RsiPage = dynamic(() => import('./RsiPage'), { ssr: false });

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
