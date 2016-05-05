//Escribe aquí tu código
function viaje(){
	var alumnos=parseInt(prompt("Ingrese el numero de alumnos"));

	if(alumnos>=100){
		alert("El costo por cada alumno es de $65.");
	}
	if(alumnos>=50 && alumnos<=99){
		alert("El costo por cada alumno es de $70.");
	}
	if(alumnos>=30 && alumnos<=49){
		alert("El costo por cada alumno es de $95.");
	}
	if (alumnos<30){
		var costo=parseFloat(400/alumnos)
		alert("El costo por cada alumno es de $" +costo+".");
	}
}
viaje();
