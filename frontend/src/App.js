// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import AdvisoryBox from "./components/AdvisoryBox";
import WeatherChart from "./components/WeatherChart";


function App() {
const [location, setLocation] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [advisory, setAdvisory] = useState([]);


const fetchWeather = async () => {
try {
const res = await axios.get(`http://localhost:5000/weather?location=${location}`);
setWeatherData(res.data);
setAdvisory(res.data.advisory);
} catch (err) {
alert("Error fetching weather. Check location or backend.");
}
};


return (
<div className="container">
<h1>🌾 Farmer Weather Advisory Tool</h1>


<div className="search-box">
<input
type="text"
placeholder="Enter location..."
value={location}
onChange={(e) => setLocation(e.target.value)}
/>
<button onClick={fetchWeather}>Get Weather</button>
</div>


{weatherData && (
<>
<WeatherCard data={weatherData} />
<WeatherChart forecast={weatherData.forecast} />
<AdvisoryBox advisory={advisory} />
</>
)}
</div>
);
}


export default App;