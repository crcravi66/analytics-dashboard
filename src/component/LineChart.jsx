import React from "react";
import { Chart } from "react-google-charts";

export default function LineChart({ data, options, chartType }) {
    return (
        <Chart
            chartType={chartType}
            width="100%"
            height="100%"
            data={data}
            options={options}
        />
    );
}
