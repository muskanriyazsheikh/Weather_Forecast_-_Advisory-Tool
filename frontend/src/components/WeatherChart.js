import React from "react";
import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


function WeatherChart({ forecast }) {
const labels = forecast.map((f) => f.time);
const temps = forecast.map((f) => f.temp);


const data = {
labels,
datasets: [
{
label: "Temperature Trend (°C)",
data: temps,
borderColor: "blue",
fill: false,
},
],
};


return (
<div className="chart-box">
<h2>📈 Temperature Forecast</h2>
<Line data={data} />
</div>
);
}


export default WeatherChart;