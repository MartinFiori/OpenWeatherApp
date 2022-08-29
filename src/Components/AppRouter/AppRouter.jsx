import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Form from "../Form/Form.jsx";
import WeatherDetails from "../WeatherDetails/WeatherDetails.jsx";
import getCountryDetails from "../../helper/fetch.js";

const AppRouter = () => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(true);

	// función para setear los detalles
	const handleSetDetails = async value => {
		setLoading(true);
		const data = await getCountryDetails(value.latitud, value.longitud);
		const { name, weather, main } = data;
		setDetails({
			title: name,
			weatherDescription: weather[0].description,
			weatherIcon: weather[0].icon,
			temp: main.temp,
			temp_max: main.temp_max,
			temp_min: main.temp_min,
		});
		setLoading(false);
	};

	return (
		// Declaro las 2 rutas necesarias
		<BrowserRouter>
			<Nav />
			<Routes>
				{/* en el componente Form nos vamos a encargar de
        conseguir las coordenadas del país donde queremos revisar el clima;
				la function pasada por props nos ayuda a tener el valor del formulario
				en un componente padre para después pasárselo al componente WeatherDetails */}
				<Route
					path="/"
					element={<Form handleSetDetails={handleSetDetails} />}
				/>
				{/* en el WeatherDetails vemos plasmados la info conseguida 
        en el componente Form */}
				<Route
					path="/weather"
					element={<WeatherDetails details={details} loading={loading} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
