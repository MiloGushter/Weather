import { getWeather } from "./getWeatherData";

function getDayFromDate(date) {
	return new Date(date).toLocaleString("en-us", {
		weekday: "long",
	});
}

function populateAside(location, current) {
	const cityInfo = document.querySelector(".aside-city-info");
	cityInfo.textContent = `${location.name}, ${location.country}`;
	const temperature = document.querySelector(".temperature-number");
	const degrees = document.createElement("sup");
	degrees.textContent = "°C";
	degrees.classList.add("temeperature-degrees");
	temperature.textContent = `${current.temp_c}`;
	temperature.append(degrees);
	const weekdayInfo = document.querySelector(".aside-weather-info-day");
	const weekdayTime = document.createElement("span");
	const time = location.localtime.split(" ")[1];
	const weekday = getDayFromDate(location.localtime.split(" ")[0]);
	weekdayInfo.textContent = `${weekday}, `;
	weekdayTime.textContent = `${time}`;
	weekdayInfo.appendChild(weekdayTime);
	const icon = document.querySelector(".aside-weather-info-icon");
	icon.src = current.condition.icon;
}

function populateMainForecast(forecast) {
	const forecastDays = forecast.forecastday;
	const forecastCards = document.querySelectorAll(".main-forecast");
	for (let i = 0; i < forecastCards.length; i++) {
		const cardContent = forecastCards[i].children;
		cardContent[0].textContent = getDayFromDate(forecastDays[i].date);
		cardContent[1].src = forecastDays[i].day.condition.icon;
		const degrees = document.createElement("sup");
		degrees.textContent = "°C";
		let temperatures = cardContent[2].children;
		temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_c);
		temperatures[0].appendChild(degrees.cloneNode(true));
		temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_c);
		temperatures[1].appendChild(degrees.cloneNode(true));
	}
}

function setDayInfoHeading(heading, forecast) {
	heading.textContent = `${getDayFromDate(forecast.date)}'s info`;
}

function changeTextAfterIcon(parent) {
	const nodes = parent.childNodes;
	const lastNode = nodes[nodes.length - 1];
	parent.removeChild(lastNode);
}

function populateWindCard(card, forecast) {
	const windValue = card[0].children[1];
	const windMetric = document.createElement("span");
	const windSpeed = forecast.day.maxwind_kph;
	windMetric.textContent = "km/h";
	windMetric.classList.add("value-metric");
	windValue.textContent = `${windSpeed} `;
	windValue.appendChild(windMetric);
	const windStrength = windValue.nextElementSibling;
	changeTextAfterIcon(windStrength);
	if (windValue < 1.6) windStrength.textContent = "Calm";
	else if (windSpeed < 29)
		windStrength.appendChild(document.createTextNode("Light wind"));
	else if (windSpeed < 35)
		windStrength.appendChild(document.createTextNode("Moderate wind"));
	else if (windSpeed < 87)
		windStrength.appendChild(document.createTextNode("Strong wind"));
	else if (windSpeed < 97)
		windStrength.appendChild(document.createTextNode("Gale wind"));
	else if (windSpeed > 116)
		windStrength.appendChild(document.createTextNode("Storm wind"));
}

function populateHumidityCard(card, forecast) {
	const humidityValue = card[1].children[1];
	const humidityMetric = document.createElement("span");
	const humidityPercentage = forecast.day.avghumidity;
	humidityMetric.textContent = "%";
	humidityMetric.classList.add("value-metric");
	humidityValue.textContent = `${humidityPercentage} `;
	humidityValue.appendChild(humidityMetric);
	const amountOfHumidity = humidityValue.nextElementSibling;
	changeTextAfterIcon(amountOfHumidity);
	if (humidityPercentage < 25)
		amountOfHumidity.appendChild(document.createTextNode("Low"));
	else if (humidityPercentage <= 30)
		amountOfHumidity.appendChild(document.createTextNode("Slightly low"));
	else if (humidityPercentage < 60)
		amountOfHumidity.appendChild(document.createTextNode("Good"));
	else if (humidityPercentage < 70)
		amountOfHumidity.appendChild(document.createTextNode("Slightly high"));
	else amountOfHumidity.appendChild(document.createTextNode("High"));
}

function populateMainForecastInfo(forecast) {
	const forecastDays = forecast.forecastday;
	const forecastInfoCards = document.querySelectorAll(".main-day-cards");
	const daysInfoHeading = document.querySelectorAll(".main-day-info-paragraph");
	for (let i = 0; i < forecastInfoCards.length; i++) {
		const infoCards = forecastInfoCards[i].children;
		setDayInfoHeading(daysInfoHeading[i], forecastDays[i]);
		populateWindCard(infoCards, forecastDays[i]);
		populateHumidityCard(infoCards, forecastDays[i]);
	}
}

export function populateOnLoad() {
	getWeather("London").then((response) => {
		const locationInfo = response.location;
		const currentInfo = response.current;
		const forecastInfo = response.forecast;
		populateAside(locationInfo, currentInfo);
		populateMainForecast(forecastInfo);
		populateMainForecastInfo(forecastInfo);
	});
}

export function populateContent() {
	const search = document.querySelector("input");
	search.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			let locationInfo, currentInfo, forecastInfo;
			getWeather(search.value).then((response) => {
				locationInfo = response.location;
				currentInfo = response.current;
				forecastInfo = response.forecast;
				populateAside(locationInfo, currentInfo);
				populateMainForecast(forecastInfo);
				populateMainForecastInfo(forecastInfo);
			});
		}
	});
}
