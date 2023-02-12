export async function getWeather(city) {
	const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
	const optinos = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "3023115176msh2132cd6864b1f0fp147486jsnaf3c6aa5c30c",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	return await (await fetch(url, optinos)).json();
}
