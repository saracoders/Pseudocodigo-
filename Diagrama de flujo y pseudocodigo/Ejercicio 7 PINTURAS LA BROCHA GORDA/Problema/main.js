//Escribe aquí tu código

function presupuesto() {
	var precio = parseInt(prompt("Precio por m2"));
	var metros = parseInt(prompt("Cuantos m2 son"));

	var presupuesto = precio * metros

	alert("Su presupuesto es de: " + presupuesto + " Soles")
}

presupuesto();
