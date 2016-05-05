function promedio(){
var suma=0;
var i=0;
numeroPersonas=Number(prompt('Ingresar número de personas:'));
do{
i++;
estatura=Number(prompt('Ingresar estatura'));
suma+=estatura;

}while(i<numeroPersonas);

promedio=suma/numeroPersonas;
document.write('promedio:'+promedio);
}
promedio();
