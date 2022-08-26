import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Form from "../Form/Form.jsx";
import WeatherDetails from "../WeatherDetails/WeatherDetails.jsx";

const AppRouter = () => {
	return (
		// Declaro las 2 rutas necesarias
		<BrowserRouter>
			<Nav />
			<Routes>
				{/* en el componente Form nos vamos a encargar de
        conseguir las coordenadas del país donde queremos revisar el clima */}
				<Route path="/" element={<Form />} />
				{/* en el WeatherDetails vemos plasmados la info conseguida 
        en el componente Form */}
				<Route path="/weather" element={<WeatherDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
