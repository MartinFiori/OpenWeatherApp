import React, { useState } from "react";
import s from "./WeatherDetails.module.css";
import Spinner from "../Spinner/Spinner.jsx";
import SwitchIcon from "../../svg/SwitchIcon";

const WeatherDetails = ({ loading, details }) => {
	const [kelvin, setKelvin] = useState(true);
	const { title, weatherDescription, weatherIcon, temp_max, temp_min, temp } =
		details;
	return (
		<div className={s.weatherContainer}>
			{loading ? (
				<Spinner />
			) : (
				<article className={s.cardContainer}>
					<h3 className={s.title}>
						{title ? title : "Ubicación no reconocida"}
					</h3>
					<button onClick={() => setKelvin(!kelvin)} className={s.btnToggle}>
						<SwitchIcon width={16} height={16} />
					</button>
					<ul className={s.dataContainer}>
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
