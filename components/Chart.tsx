import ApexCharts from 'react-apexcharts';

export default function ChartComponent() {
  return (
    <ApexCharts
      type="line"
      series={[{ data: [19, 26, 20, 9] }]}
      options={{
        chart: {
          height: 500,
          width: 500,
        },
      }}
    />
  );
}
