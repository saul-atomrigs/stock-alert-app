import { useEffect, useState } from 'react';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import {
  BarSeries,
  CandlestickSeries,
  Chart,
  ChartCanvas,
  CrossHairCursor,
  CurrentCoordinate,
  EdgeIndicator,
  ElderRaySeries,
  RSISeries,
  LineSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  XAxis,
  YAxis,
  ZoomButtons,
  discontinuousTimeScaleProviderBuilder,
  elderRay,
  ema,
  rsi,
  lastVisibleItemBasedZoomAnchor,
} from 'react-financial-charts';

import type { StockData } from '@/api/getAggregatesByTicker';
import getAggregatesByTicker from '@/api/getAggregatesByTicker';

type CandleChartProps = {
  width: number;
  ticker: string;
};

const CandleChart = ({ width, ticker }: CandleChartProps) => {
  const [closeStockPrices, setCloseStockPrices] = useState<StockData[]>([]);

  useEffect(() => {
    async function getCloseStockPrices() {
      const closeStockPrices = await getAggregatesByTicker(ticker);
      setCloseStockPrices(closeStockPrices!);
    }

    getCloseStockPrices();
  }, [ticker]);

  const ScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      d => new Date(d.date),
    );

  const height = 350;
  const margin = { left: 0, right: 50, top: 0, bottom: 30 };
  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d, c) => {
      d.ema12 = c;
    })
    .accessor(d => d?.ema12);
  ema12(closeStockPrices);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d, c) => {
      d.ema26 = c;
    })
    .accessor(d => d?.ema26);
  ema26(closeStockPrices);

  const elder = elderRay();
  // console.log('elder ray', elder(ema26(ema12(closeStockPrices))));

  const rsiCalulator = rsi();
  const rsiObj = rsiCalulator(ema26(ema12(closeStockPrices)));
  const currentRsi = rsiObj[rsiObj.length - 1]?.rsi.toFixed(2);

  const { data, xScale, xAccessor, displayXAccessor } =
    ScaleProvider(closeStockPrices);
  const pricesDisplayFormat = format('.2f');
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 100;
  const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];
  const chartHeight = gridHeight - elderRayHeight;
  const yExtents = data => {
    return [data.high, data.low];
  };
  const dateTimeFormat = '%d %b';
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const barChartExtents = data => {
    return data.volume;
  };

  const candleChartExtents = data => {
    return [data.high, data.low];
  };

  const yEdgeIndicator = data => {
    return data.close;
  };

  const volumeColor = data => {
    return data.close > data.open
      ? 'rgba(38, 166, 154, 0.3)'
      : 'rgba(239, 83, 80, 0.3)';
  };

  const volumeSeries = data => {
    return data.volume;
  };

  const openCloseColor = data => {
    return data.close > data.open ? '#26a69a' : '#ef5350';
  };

  return (
    <ChartCanvas
      height={height}
      width={width}
      ratio={3}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={barChartExtents}
      >
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart>

      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <XAxis showGridLines showTickLabel={false} tickLabelFill="#666" />
        <YAxis
          showGridLines
          tickFormat={pricesDisplayFormat}
          tickLabelFill="#666"
        />
        <CandlestickSeries />
        <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} />
        <CurrentCoordinate
          yAccessor={ema26.accessor()}
          fillStyle={ema26.stroke()}
        />
        <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
        <CurrentCoordinate
          yAccessor={ema12.accessor()}
          fillStyle={ema12.stroke()}
        />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />
        <EdgeIndicator
          itemType="last"
          rectWidth={margin.right}
          fill={openCloseColor}
          lineStroke={openCloseColor}
          displayFormat={pricesDisplayFormat}
          yAccessor={yEdgeIndicator}
        />
        <MovingAverageTooltip
          textFill="#666"
          origin={[8, 24]}
          options={[
            {
              yAccessor: ema26.accessor(),
              type: 'EMA',
              stroke: ema26.stroke(),
              windowSize: ema26.options().windowSize,
            },
            {
              yAccessor: ema12.accessor(),
              type: 'EMA',
              stroke: ema12.stroke(),
              windowSize: ema12.options().windowSize,
            },
          ]}
        />

        <ZoomButtons />
      </Chart>

      {/* RSI Chart */}
      <Chart
        id={4}
        height={elderRayHeight}
        origin={elderRayOrigin}
        yExtents={[0, 100]}
      >
        <XAxis
          showGridLines
          gridLinesStrokeStyle="#e0e3eb"
          tickLabelFill="#666"
        />
        <YAxis
          ticks={4}
          tickFormat={pricesDisplayFormat}
          tickLabelFill="#666"
        />

        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />

        <RSISeries yAccessor={rsiCalulator.accessor()} />

        <SingleValueTooltip
          yAccessor={rsiCalulator.accessor()}
          yLabel="RSI"
          origin={[8, 16]}
        />
      </Chart>

      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default CandleChart;
