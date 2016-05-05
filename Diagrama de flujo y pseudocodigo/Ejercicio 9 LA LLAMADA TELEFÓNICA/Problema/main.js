//Escribe aquí tu código

function llamada() {
	var tiempo = parseInt(prompt("Cuantos segundos duro tu llamada"));
	var	costo = parseInt(prompt("Cual es el costo por minuto"));

	var llamada = costo * tiempo / 60

	alert("El costo de su llamada es : " + llamada);
}

llamada();