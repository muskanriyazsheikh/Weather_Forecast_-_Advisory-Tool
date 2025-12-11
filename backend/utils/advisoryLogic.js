module.exports = function generateAdvisory(data) {
  const advice = [];

  // Rule 1 – Rain probability
  if (data.pop > 0.6) {
    advice.push("🌧️ High chance of rain — avoid irrigation & pesticide spraying today.");
  }

  // Rule 2 – High temperature
  if (data.temp > 35) {
    advice.push("🔥 High temperature — increase irrigation for heat-sensitive crops.");
  }

  // Rule 3 – High wind
  if (data.wind > 15) {
    advice.push("💨 Strong winds — do NOT spray pesticides due to drift risk.");
  }

  // Rule 4 – High humidity
  if (data.humidity > 80) {
    advice.push("🌫️ High humidity — possible fungal infection, monitor your plants.");
  }

  // Rule 5 – Good spraying window
  const noRainSoon = data.forecast.slice(0, 2).every(f => f.pop < 0.3);
  if (data.wind < 10 && noRainSoon) {
    advice.push("✅ Good spraying window — low wind & no rain expected for 6 hours.");
  }

  // Default case
  if (advice.length === 0) {
    advice.push("🌱 Weather looks normal — no special precautions needed.");
  }

  return advice;
};
