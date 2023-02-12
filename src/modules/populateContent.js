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
			});
		}
	});
}
