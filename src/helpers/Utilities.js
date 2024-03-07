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

export const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/, // 7 a 14 numeros.
	telefono2: /(2|6|7)[ -]*([0-9][ -]*){7}/,
	nit: /[0-9]{4}[-][0-9]{6}[-][0-9]{3}[-][0-9]{1}/,
	dui: /^\d{8}-[0-9K]$/,
	numberExtension: /^\d*$/,
	salario: /^([0-9]{1,5}\.[0-9]{0,2})$/,
	egresado: /^\d*$/,
	number1To10: /^(?:[1-9]|0[1-9]|10)$/,
	number0To10: /^(?:[0-9]|0[0-9]|10)$/,
	allNumbers: /^\d*$/,
	salarioColaboradores: /^\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/,
	number0To150: /^(?:[1-9][0-9]?|1[0-4][0-9]|150)$/,
	telFijo: /^(?:[+]503\s?)?\d{4}[-\s]?\d{4}$/,
	movil: /^(?:[+]503\s?)?[67]\d{3}[-\s]?\d{4}$/,
	money: /^\d{1,3}(,\d{3})*\.\d+$/,
	url: /^(https?|ftp):\/\/([^\s\/$.?#].[^\s])\/?$/,
	numbers1toInfinite: /^[1-9]\d*$/,
	nota: /^(10(\.0{1,2})?|[0-9](\.\d{1,2})?)$/,
	tipoIdentificacion: /^[0-9A-Za-z-]+$/,
	numHoras: /^\d{1,3}(?::\d{2})?$/,
	validationPass: /^[A-Z][0-9A-Za-z]*[@#$%^&*!]$/,
};
