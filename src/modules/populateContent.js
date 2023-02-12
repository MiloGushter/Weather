import { getWeather } from "./getWeatherData";

export function populateContent() {
	const search = document.querySelector("input");

	search.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			let locationInfo, currentInfo, forecastInfo;
			getWeather(search.value).then((response) => {
				locationInfo = response.location;
				currentInfo = response.current;
				forecastInfo = response.forecast;
				const cityInfo = document.querySelector(".aside-city-info");
				cityInfo.textContent = `${locationInfo.name}, ${locationInfo.country}`;
				const temperatureParagraph = document.querySelector(
					".aside-weather-info-temeprature"
				);
				const temperature = document.querySelector(".temperature-number");
				const degrees = document.createElement("sup");
				degrees.textContent = "°C";
				degrees.classList.add("temeperature-degrees");
				temperature.textContent = `${currentInfo.temp_c}`;
				temperature.append(degrees);
				const weekdayInfo = document.querySelector(".aside-weather-info-day");
				const weekdayTime = document.createElement("span");
				const time = locationInfo.localtime.split(" ")[1];
				const weekday = new Date(
					locationInfo.localtime.split(" ")[0]
				).toLocaleString("en-us", {
					weekday: "long",
				});
				weekdayInfo.textContent = `${weekday}, `;
				weekdayTime.textContent = `${time}`;
				weekdayInfo.appendChild(weekdayTime);
			});
		}
	});
}
