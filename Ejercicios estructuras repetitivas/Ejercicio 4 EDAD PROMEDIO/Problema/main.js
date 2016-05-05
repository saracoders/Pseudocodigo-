//Escribe aquí tú código
function edadPromedio(){
	var cantidad=prompt("Ingrese cuántos alumnos son: ");
	var edadPromedio=0;
	var i=1;
	while (i<= cantidad){
		var numero=prompt("Ingrese la edad "+i+": ");
		edadPromedio= edadPromedio+parseInt(numero);
		i++;
	}
	var resultado= edadPromedio/cantidad;
	alert("El promedio de las edades es : "+resultado);
}

edadPromedio();

// function edadPromedio2(){
// 	var cantidad=prompt("Ingrese cuántos alumnos son: ");
// 	var edadPromedio2=0;
// 	var i=1;
// 	do{
// 		var numero=prompt("Ingrese la edad "+i+": ");
// 		edadPromedio2= edadPromedio2+parseInt(numero);
// 		i++;
// 	}
// 	while (i<= cantidad);
// 	var resultado= edadPromedio2/cantidad;

// 	alert("El promedio de las edades es : "+resultado);
// }

// edadPromedio2();

// function edadPromedio3(){
// 	var cantidad=prompt("Ingrese cuántos alumnos son: ");
// 	var edadPromedio3=0;
	
// 	for(var i=1; i<= cantidad; i++){
// 		var numero=prompt("Ingrese la edad "+i+": ");
// 		edadPromedio3= edadPromedio3+parseInt(numero);
// 	}
// 	var resultado= edadPromedio3/cantidad;

// 	alert("El promedio de las edades es : "+resultado);
// }

// edadPromedio3();