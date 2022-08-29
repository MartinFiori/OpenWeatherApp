import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Form.module.css";

const Form = ({ handleSetDetails }) => {
	const navigate = useNavigate();

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

	// si hay data.longitud y data.latitud, seteo en el componente padre
	// la información del useState data
	const handleSubmit = e => {
		e.preventDefault();
		if (longitud && latitud) {
			handleSetDetails(data);
			// una vez esté hecha la Promise para setear los detalles con la info
			// uso el useNavigate para redireccionar a los detalles
			navigate("/weather");
		}
	};
	return (
		<div className={s.formContainer}>
			{/* con el evento onSubmit prevengo al formulario de refrescar
      la página cuando se submitee */}
			<form onSubmit={e => handleSubmit(e)} className={s.form}>
				<h2 className={s.formTitle}>¡Consulte el clima!</h2>
				<label htmlFor="latitud" className={s.label}>
					Ingrese una latitud:
				</label>
				<input
					className={s.input}
					type="number"
					name="latitud"
					value={latitud}
					onChange={e => handleSetData(e)}
				/>
				<label htmlFor="latitud" className={s.label}>
					Ingrese una longitud:
				</label>
				<input
					className={s.input}
					type="number"
					name="longitud"
					value={longitud}
					onChange={e => handleSetData(e)}
				/>
				<input
					type="submit"
					value="Buscar ubicación"
					// validacion que nos sirve para no buscar en la api con valores del useState "data" vacíos
					className={`${s.submit} ${(!longitud || !latitud) && s.disabled}`}
				/>
			</form>
		</div>
	);
};

export default Form;
