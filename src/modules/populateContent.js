import { getWeather } from "./getWeatherData";

function getDayFromDate(date) {
	return new Date(date).toLocaleString("en-us", {
		weekday: "long",
	});
}

function populateAside(location, current) {
	const cityInfo = document.querySelector(".aside-city-info");
	cityInfo.textContent = `${location.name}, ${location.country}`;
	const temperature = document.querySelector(".aside-weather-info-value");
	const degrees = document.createElement("sup");
	const temperatureMetric = document.querySelector(".toggle input").checked;
	if (temperatureMetric) {
		degrees.textContent = "°F";
		degrees.classList.add("temeperature-degrees");
		temperature.textContent = `${parseInt(current.temp_f)}`;
		temperature.append(degrees);
	} else {
		degrees.textContent = "°C";
		degrees.classList.add("temeperature-degrees");
		temperature.textContent = `${current.temp_c}`;
		temperature.append(degrees);
	}
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
		const temperatureMetric = document.querySelector(".toggle input").checked;
		let temperatures = cardContent[2].children;
		degrees.textContent = "°C";
		if (temperatureMetric) {
			degrees.textContent = "°F";
			temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_f);
			temperatures[0].appendChild(degrees.cloneNode(true));
			temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_f);
			temperatures[1].appendChild(degrees.cloneNode(true));
		} else {
			degrees.textContent = "°C";
			temperatures[0].textContent = Math.round(forecastDays[i].day.maxtemp_c);
			temperatures[0].appendChild(degrees.cloneNode(true));
			temperatures[1].textContent = Math.round(forecastDays[i].day.mintemp_c);
			temperatures[1].appendChild(degrees.cloneNode(true));
		}
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
	const windValueHolder = card[0].children[1];
	const windMetric = document.createElement("span");
	const windSpeed = forecast.day.maxwind_kph;
	windMetric.textContent = "km/h";
	windMetric.classList.add("value-metric");
	windValueHolder.textContent = windSpeed;
	windValueHolder.appendChild(windMetric);
	const windStrength = windValueHolder.nextElementSibling;
	changeTextAfterIcon(windStrength);
	if (windSpeed < 1.6) windStrength.textContent = "Calm";
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
	const humidityValueHolder = card[1].children[1];
	const humidityMetric = document.createElement("span");
	const humidityPercentage = forecast.day.avghumidity;
	humidityMetric.textContent = "%";
	humidityMetric.classList.add("value-metric");
	humidityValueHolder.textContent = humidityPercentage;
	humidityValueHolder.appendChild(humidityMetric);
	const humidityStatus = humidityValueHolder.nextElementSibling;
	changeTextAfterIcon(humidityStatus);
	if (humidityPercentage < 25)
		humidityStatus.appendChild(document.createTextNode("Low"));
	else if (humidityPercentage < 30)
		humidityStatus.appendChild(document.createTextNode("Slightly low"));
	else if (humidityPercentage < 60)
		humidityStatus.appendChild(document.createTextNode("Good"));
	else if (humidityPercentage < 70)
		humidityStatus.appendChild(document.createTextNode("Slightly high"));
	else humidityStatus.appendChild(document.createTextNode("High"));
}

function populateVisibilityCard(card, forecast) {
	const visibilityValueHolder = card[2].children[1];
	const visibilityMetric = document.createElement("span");
	const visibilityDistance = forecast.day.avgvis_km;
	visibilityMetric.textContent = "km";
	visibilityMetric.classList.add("value-metric");
	visibilityValueHolder.textContent = visibilityDistance;
	visibilityValueHolder.appendChild(visibilityMetric);
	const visibilityStatus = visibilityValueHolder.nextElementSibling;
	changeTextAfterIcon(visibilityStatus);
	if (visibilityDistance < 2)
		visibilityStatus.appendChild(document.createTextNode("Low"));
	else if (visibilityDistance < 5)
		visibilityStatus.appendChild(document.createTextNode("Medium"));
	else visibilityStatus.appendChild(document.createTextNode("Good"));
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
		populateVisibilityCard(infoCards, forecastDays[i]);
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
				sessionStorage.clear();
				locationInfo = response.location;
				currentInfo = response.current;
				forecastInfo = response.forecast;
				sessionStorage.setItem("current_temp_c", currentInfo.temp_c);
				sessionStorage.setItem("current_temp_f", currentInfo.temp_f);
				for (let i in forecastInfo.forecastday) {
					let day = forecastInfo.forecastday[i].day;
					sessionStorage.setItem(`maxtemp${i}_c`, day.maxtemp_c);
					sessionStorage.setItem(`mintemp${i}_c`, day.mintemp_c);
					sessionStorage.setItem(`maxtemp${i}_f`, parseInt(day.maxtemp_f));
					sessionStorage.setItem(`mintemp${i}_f`, parseInt(day.mintemp_f));
				}
				populateAside(locationInfo, currentInfo);
				populateMainForecast(forecastInfo);
				populateMainForecastInfo(forecastInfo);
			});
		}
	});
}

export function changeTemperatureMetric() {
	const temperatureMetric = document.querySelector(".toggle input");
	const asideTemperature = document.querySelector(".aside-weather-info-value");
	const asideDegrees = document.createElement("sup");
	const forecastCards = document.querySelectorAll(".main-forecast");
	temperatureMetric.addEventListener("change", () => {
		if (temperatureMetric.checked) {
			// Side
			asideDegrees.textContent = "°F";
			asideDegrees.classList.add("temeperature-degrees");
			asideTemperature.textContent = `${parseInt(
				sessionStorage.getItem("current_temp_f")
			)}`;
			asideTemperature.append(asideDegrees);
			// Forecast
			for (let i = 0; i < forecastCards.length; i++) {
				const cardContent = forecastCards[i].children;
				const degreesCard = document.createElement("sup");
				let temperatures = cardContent[2].children;
				degreesCard.textContent = "°F";
				temperatures[0].textContent = sessionStorage.getItem(`maxtemp${i}_f`);
				temperatures[0].appendChild(degreesCard.cloneNode(true));
				temperatures[1].textContent = sessionStorage.getItem(`mintemp${i}_f`);
				temperatures[1].appendChild(degreesCard.cloneNode(true));
			}
		} else {
			// Side
			asideDegrees.textContent = "°C";
			asideDegrees.classList.add("temeperature-degrees");
			asideTemperature.textContent = `${sessionStorage.getItem("current_temp_c")}`;
			asideTemperature.append(asideDegrees);
			// Forecast
			for (let i = 0; i < forecastCards.length; i++) {
				const cardContent = forecastCards[i].children;
				const degreesCard = document.createElement("sup");
				let temperatures = cardContent[2].children;
				degreesCard.textContent = "°C";
				temperatures[0].textContent = parseInt(
					sessionStorage.getItem(`maxtemp${i}_c`)
				);
				temperatures[0].appendChild(degreesCard.cloneNode(true));
				temperatures[1].textContent = parseInt(
					sessionStorage.getItem(`mintemp${i}_c`)
				);
				temperatures[1].appendChild(degreesCard.cloneNode(true));
			}
		}
	});
}
