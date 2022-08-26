import React, { useState } from "react";
import s from "./Form.module.css";

const Form = () => {
	// Declaro el estado 'data' para guardar el valor de los
	// inputs del formulario y así buscar el lugar por coordenadas
	const [data, setData] = useState({
		latitud: "",
		longitud: "",
	});
	// Destructuro el hook para más placer y comodidad
	const { latitud, longitud } = data;

	// con handleSetData me aseguro de que el form sea más escalable a futuro
	// y las propiedades de data las modifico desde aca gracias al onChange
	// de los inputs
	const handleSetData = e => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className={s.formContainer}>
			{/* con el evento onSubmit prevengo al formulario de refrescar
      la página cuando se submitee */}
			<form onSubmit={e => e.preventDefault()}>
				<h2 className={s.formTitle}>¡Consulte el clima!</h2>
				<label htmlFor="latitud">Ingrese una latitud:</label>
				<input
					style={{ color: "red" }}
					type="number"
					name="latitud"
					value={latitud}
					onChange={e => handleSetData(e)}
				/>
				<label htmlFor="latitud">Ingrese una longitud:</label>
				<input
					style={{ color: "red" }}
					type="number"
					name="longitud"
					value={longitud}
					onChange={e => handleSetData(e)}
				/>
				<input type="submit" value="Buscar ubicación" />
			</form>
		</div>
	);
};

export default Form;
