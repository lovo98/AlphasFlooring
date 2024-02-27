export const formatearFecha = (fecha) => {
	const fechaNueva = new Date(fecha);
	const opciones = {
		year: "numeric",
		month: "long",
		day: "2-digit",
		// hour: "2-digit",
		// minute: "2-digit",
		// timeZone: "America/El_Salvador",
	};
	return fechaNueva.toLocaleDateString("en-US", opciones);
};
