import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((datapoint) => datapoint.value);

  const totalMaximun = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximun}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
