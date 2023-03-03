import React from "react";
import ReactApexChart, { Props } from "react-apexcharts";
import { StrategieDataset } from "../../types/StrategieDataset";

interface ApexChartProps extends Props {
  dataset: StrategieDataset[];
}

class ApexChart extends React.Component<ApexChartProps, Props> {
  dataset: StrategieDataset[];

  constructor(props: ApexChartProps) {
    super(props);
    this.dataset = this.props.dataset;

    this.state = {
      series: [
        {
          name: "",
          data: this.dataset.map((data) => data.value),
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
          min: Math.min(...this.dataset.map((data) => data.value)),
          max: Math.max(...this.dataset.map((data) => data.value)),
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
          categories: this.dataset.map((data) => data.time),
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
          options={{
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
              min: Math.min(...this.props.dataset.map((data) => data.value)),
              max: Math.max(...this.props.dataset.map((data) => data.value)),
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
          }}
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
