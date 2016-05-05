//Escribe aquí tu código

function sueldo() {
	var horastrabajo = parseInt(prompt("Ingrese las horas de trabajo"));
	var pagoxhora = parseInt(prompt("Ingrese el pago por horas"));

var sueldo = horastrabajo * pagoxhora
alert("Su sueldo semanal es " + sueldo);
}

sueldo();
