// Según el icon_id que llegue en el parámetro y con lo que recibimos retornamos una clase acorde al icon
const cardDetailClass = icon_id => {
	switch (icon_id) {
		case "01n":
			return "nightClass";
		case "01d":
			return "dayClass";
		case "13n":
			return "snowClass";
		default:
			return "defaultClass";
	}
};

export default cardDetailClass;
