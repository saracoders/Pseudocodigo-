//Escribe aquí tu código

function cobro() {
	var dias = parseInt(prompt("Cuantos dias esta hospedado"));
	var costo = parseInt(prompt("Cuanto cuesta un dia en estancia"));

	var cobro = dias * costo

	alert("En monto a pagar por su estancia es : " + cobro)
}

cobro();

