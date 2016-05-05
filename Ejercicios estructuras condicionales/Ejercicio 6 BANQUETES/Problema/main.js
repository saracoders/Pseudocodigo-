//Escribe aquí tu código
function presupuesto(){
	var persona=parseInt(prompt("Ingrese el numero de personas"));

	if(persona==1 ){
		alert("El costo de platillo por persona es $95.00");
	}
	if(persona>200 && persona<=300){
		alert("El costo de platillo por persona es $85.00");
	}
	if(persona>300){
		alert("El costo de platillo por persona es $75.00");
	}
	
}
presupuesto()