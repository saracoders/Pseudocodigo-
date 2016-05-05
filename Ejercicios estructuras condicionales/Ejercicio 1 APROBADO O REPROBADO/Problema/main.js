//Escribe aquí tu código
function nota(){
	var nota1= parseInt(prompt("Ingresar nota 1"));
	var nota2= parseInt(prompt("Ingresar nota 2"));
	var nota3= parseInt(prompt("Ingresar nota 3"));
	var notaTotal=(nota1+nota2+nota3)/3;

	if (notaTotal<=10 && notaTotal>=6){
		alert("Aprobado");
	}
	else {
		alert("Reprobo");
	}
}
nota()