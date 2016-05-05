//Escribe aquí tu código
function descuento(){
	var costo=parseFloat(prompt("Ingrese el Precio del traje"));

	if (costo>250){
		var descuento=parseFloat(costo*15)/100;
		alert("EL costo de la prenda con un descuento de 15% es de " +descuento );
	}
	else (costo<=250) 
		var descuento=parseFloat(costo*8)/100;
		alert("EL costo de la prenda con un descuento de 8% es de " +descuento);
}
descuento()