import Chart from "react-apexcharts";

const LineChart = (props) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions}
      type="line"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default LineChart;
