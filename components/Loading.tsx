import styled from 'styled-components';

const Loading = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: block;
  margin: 1rem auto;
  position: relative;
  background: #fff;
  box-shadow: -1.5rem 0 #fff, 1.5rem 0 #fff;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

  @keyframes shadowPulse {
    33% {
      background: #fff;
      box-shadow: -1.5rem 0 #999, 1.5rem 0 #fff;
    }
    66% {
      background: #999;
      box-shadow: -1.5rem 0 #fff, 1.5rem 0 #fff;
    }
    100% {
      background: #fff;
      box-shadow: -1.5rem 0 #fff, 1.5rem 0 #999;
    }
  }
`;

export default Loading;
