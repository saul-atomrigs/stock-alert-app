import React from 'react';
import styled from 'styled-components';

import type { Aggregate } from '../types';

export default function TickerSlider({
  aggregates,
}: {
  aggregates: Aggregate[] | undefined;
}) {
  return (
    <Ticker.Wrap>
      <Ticker.Container>
        {aggregates?.map(aggregate => (
          <Ticker.Item key={aggregate.Ticker}>
            {aggregate.Ticker} ${aggregate.close}
          </Ticker.Item>
        ))}
      </Ticker.Container>
    </Ticker.Wrap>
  );
}

const Ticker = {
  Wrap: styled.div`
    overflow: hidden;
    height: 4rem;
    box-sizing: content-box;
  `,
  Container: styled.div`
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    box-sizing: content-box;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: 300s;

    @-webkit-keyframes ticker {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    @keyframes ticker {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    &__item {
      display: inline-block;
      padding: 0 2rem;
      font-size: 2rem;
    }
  `,
  Item: styled.div`
    display: inline-block;
    padding: 0 2rem;
    font-size: 1rem;
  `,
};
