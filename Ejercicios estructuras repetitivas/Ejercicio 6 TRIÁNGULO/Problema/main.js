//Escribe aquí tú código

function triangulo(){
	for(cat2t1=1; cat2t1<=500; cat2t1++){
		for(cat2=1; cat2<=500; cat2++){
			for(hip=1; hip<=500; hip++){
				if(hip*hip===cat2t1*cat2t1+cat2*cat2){
					document.write(" Terna Pitagórica: " +cat2t1+ " " +cat2+" " +hip+ "<br>");
				}
			}
		}
	}
}
triangulo();