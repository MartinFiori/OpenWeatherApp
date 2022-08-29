var axios = require("axios");

// con este axios recibimos la latitud y longitud para hacer el llamdo a la api
const getCountryDetails = async (lat_value, lon_value) => {
	var config = {
		method: "get",
		url: `https://api.openweathermap.org/data/2.5/weather`,
		headers: {},
		params: {
			lat: lat_value,
			lon: lon_value,
			appid: "74ea466fe14ed41d2ab92b7a7f51e94e",
		},
	};

	try {
		const data = await axios(config);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export default getCountryDetails;
