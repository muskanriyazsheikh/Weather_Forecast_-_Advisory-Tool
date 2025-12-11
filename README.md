# 🌾 Farmer Weather Forecast & Advisory Tool

A MERN stack web application that fetches real-time weather forecast (5 days, 3-hour blocks) using the **OpenWeatherMap API** and generates **farmer-friendly agricultural advisories**.

---

## 🌟 Features

### ✅ Weather Forecast  
Fetches weather using location (city/village name) and displays:

- Temperature  
- Humidity  
- Rain Probability (POP)  
- Wind Speed  
- **5-day / 3-hour interval forecast**

### ✅ Farmer Advisory System  
Rule-based advisories are automatically generated, such as:

- 🌧 **Rain Probability > 60%** → Avoid irrigation & pesticide spraying  
- 🔥 **Temperature > 35°C** → Increase irrigation for heat-sensitive crops  
- 💨 **Wind Speed > 15 km/h** → Avoid pesticide spraying (drift risk)  
- 💧 **Humidity > 80%** → Possible fungal infection, monitor crops  
- ✔ **Good Spraying Window** → If wind < 10 km/h & no rain expected for next 6 hours  

### ✅ UI Features  
- Clean, modern React UI  
- Temperature trend line chart  
- Advisory panel with icons  
- Real-time weather display  

### 🗂 Optional Extended Features  
- Save last 5 searched locations in MongoDB  
- Download advisories as PDF  

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- Axios  
- Chart.js (react-chartjs-2)

### **Backend**
- Node.js  
- Express.js  
- OpenWeatherMap API  
- CORS Enabled  

### **Database (Optional)**
- MongoDB / Mongoose  

---

## 📁 Project Folder Structure

WeatherApp/
│── backend/
│ ├── server.js
│ ├── controllers/
│ │ └── weatherController.js
│ ├── routes/
│ │ └── weatherRoutes.js
│ ├── .env
│ └── package.json
│
└── frontend/
├── src/
│ ├── App.js
│ ├── api.js
│ ├── components/
│ │ ├── WeatherDisplay.js
│ │ ├── WeatherChart.js
│ │ └── Advisory.js
├── package.json


## 🚀 How to Run the Project

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/your-username/your-repo-name.git
cd WeatherApp
2️⃣ Setup Backend
bash
Copy code
cd backend
npm install
Create .env file:

ini
Copy code
PORT=5000
WEATHER_API_KEY=your_openweather_api_key
Run backend:

bash
Copy code
npm run dev
Backend runs at:

arduino
Copy code
http://localhost:5000
3️⃣ Setup Frontend
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3000
🔗 API Endpoint
GET /weather?location=CityName
Example:

bash
Copy code
http://localhost:5000/weather?location=Delhi
🧠 Advisory Logic (Built-In Rules)
bash
Copy code
if rainProbability > 60%:
     "Avoid irrigation or pesticide spraying today."

if temperature > 35°C:
     "Increase irrigation for heat-sensitive crops."

if wind > 15 km/h:
     "Do not spray pesticides due to drift risk."

if humidity > 80%:
     "High fungal infection risk — inspect crops."

if wind < 10 km/h and next 6-hour rain == 0:
     "Good spraying window."

🏁 Conclusion
This project fulfills all assignment requirements:
✔ MERN stack
✔ Real-time weather fetching
✔ 5-day / 3-hour forecast
✔ Advisory rule engine
✔ Clean and responsive UI


