//Escribe aquí tú código
function igualMayor() {
	// body...
	var cantidad = parseInt(prompt("cuantos números ingresaras ? "));
	var i=0;
	var mayor=0;
	var menor=0;
	while (cantidad!=0){
		cantidad--;
		i=i+1;
		numeros = parseInt(prompt("Ingrese el numero "+i+" a calcular : "));
		if (numeros<0){
			menor=menor+1;

		} else {

			mayor=mayor+1;
		}

		console.log(menor,mayor);
	}
	alert("cantidad de números que son mayores o igual  a 0 son: "+mayor+" , menores a 0  son: "+ menor);
}
igualMayor();