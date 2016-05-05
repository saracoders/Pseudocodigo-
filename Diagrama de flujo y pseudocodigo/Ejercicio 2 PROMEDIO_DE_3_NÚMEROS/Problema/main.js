//Escribe aquí tu código
function promedio() {
	var a = parseInt(prompt("Ingrese  primer numero"));
	var b = parseInt(prompt("Ingrese  segundo numero"));
	var c = parseInt(prompt("Ingrese  tercer numero")); 

	var promedio = (a + b + c ) / 3

	alert("El promedio es : " + promedio);
}
promedio();