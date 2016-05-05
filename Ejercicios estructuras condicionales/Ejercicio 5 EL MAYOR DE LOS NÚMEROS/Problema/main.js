//Escribe aquí tu código
function numMayor(){
	var num1=parseInt(prompt("Ingrese el primer número a comparar"));
	var num2=parseInt(prompt("Ingrese el segundo número a comparar"));
	var num3=parseInt(prompt("Ingrese el tercer número a comparar"));

	if(num1>num2 && num1>num3){
		alert("El número mayor es " +num1);
	}
	if(num2>num1 && num2>num3){
		alert("El número mayor es " +num2);
	}
	else{
		alert("El número mayor es " +num3);
	}
}
numMayor()