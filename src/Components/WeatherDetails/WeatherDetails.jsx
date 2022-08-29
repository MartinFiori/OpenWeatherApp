import React, { useState } from "react";
import s from "./WeatherDetails.module.css";
import Spinner from "../Spinner/Spinner.jsx";
import SwitchIcon from "../../svg/SwitchIcon";
import BackToMenu from "../BackToMenu/BackToMenu";
import cardDetailClass from "../../helper/cardDetailClass.js";

const WeatherDetails = ({ loading, details }) => {
	// este state nos sirve para saber si la temperatura está en kelvin
	const [kelvin, setKelvin] = useState(true);
	const { title, weatherDescription, weatherIcon, temp_max, temp_min, temp } =
		details;
	return (
		<div className={s.weatherContainer}>
			<BackToMenu text="Volver al inicio" cssProps="btnMenu" />
			{/* No mostramos el componente hasta que la información nos llegue desde la API gracias al loading */}
			{loading ? (
				<Spinner />
			) : (
				<article
					className={`${s.cardContainer} ${s[cardDetailClass(weatherIcon)]}`}
				>
					<h3 className={s.title}>
						{/* mini validación por si se buscó una ubicación no conocida */}
						{title ? title : "Ubicación no reconocida"}
					</h3>
					{/* cambiamos el valor del state kelvin  */}
					<button onClick={() => setKelvin(!kelvin)} className={s.btnToggle}>
						<SwitchIcon
							width={16}
							height={16}
							className={`${s.icon} ${kelvin && s.active}`}
						/>
					</button>
					<ul className={s.dataContainer}>
						{/* 
						en cada <li> tenemos la validación de que si kelvin es true nos muestre el valor normal que llega de la API,
						caso contrario seteo los decimales en solo 1 y lo convierto en celsius
						Aca se muestra la data que recibimos de OpenWeatherMap
						*/}
						<li className={s.dataItem}>
							<p>Temperatura actual</p>
							<p>
								{kelvin ? temp : (temp - 273.15).toFixed(1)}°
								{kelvin ? "K" : "C"}
							</p>
						</li>
						<li className={s.dataItem}>
							<p>Temperatura mínima</p>
							<p>
								{kelvin ? temp_min : (temp_min - 273.15).toFixed(1)}°
								{kelvin ? "K" : "C"}
							</p>
						</li>
						<li className={s.dataItem}>
							<p>Temperatura máxima</p>
							<p>
								{kelvin ? temp_max : (temp_max - 273.15).toFixed(1)}°
								{kelvin ? "K" : "C"}
							</p>
						</li>
						<li className={s.dataItem}>
							<p>
								<img
									src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
									className={s.dataImg}
									alt=""
								/>
							</p>
							<p>{weatherDescription}</p>
						</li>
					</ul>
				</article>
			)}
		</div>
	);
};

export default WeatherDetails;
