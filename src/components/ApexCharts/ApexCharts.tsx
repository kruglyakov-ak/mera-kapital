import React from "react";
import ReactApexChart, { Props } from "react-apexcharts";
import { StrategieDataset } from "../../types/StrategieDataset";

interface ApexChartProps extends Props {
  dataset: StrategieDataset[];
  currency: string;
}

class ApexChart extends React.Component<ApexChartProps, Props> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: this.props.dataset.map((data) => data.value),
        },
      ],
      options: {
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val: number) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
          categories: this.props.dataset.map((data) => data.time),
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val: number) {
              return (val / 1000000).toFixed(0);
            },
          },
        },
      },
    };
  }

  state: Props;

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={[
            {
              name: "",
              data: this.props.dataset.map((data) => data.value),
            },
          ]}
          type="area"
          height={296}
        />
      </div>
    );
  }

}

export default ApexChart;
