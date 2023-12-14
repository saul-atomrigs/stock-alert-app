import React from 'react';
import styled from 'styled-components';

type SkeletonProps = {
  width: string;
  height: string;
};

export default function SkeletonLoading({ width, height }: SkeletonProps) {
  return <Skeleton width={width} height={height} />;
}

const Skeleton = styled.div<SkeletonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 0.5rem;
  display: block;
  margin: auto;
  position: relative;
  background: #eee;
  animation: shadowPulse 2s linear infinite;
`;
