import React from "react";


function WeatherCard({ data }) {
return (
<div className="card">
<h2>📊 Current Weather</h2>
<p><strong>Temperature:</strong> {data.temp}°C</p>
<p><strong>Humidity:</strong> {data.humidity}%</p>
<p><strong>Rain Probability:</strong> {Math.round(data.pop * 100)}%</p>
<p><strong>Wind Speed:</strong> {data.wind} km/h</p>
</div>
);
}


export default WeatherCard;