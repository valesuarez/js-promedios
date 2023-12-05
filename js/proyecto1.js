
//solicitamod datos del alumno
let nombre = prompt("ingre su nombre")
let apellido= prompt("ingrese su apellido")
let cantidadDeNotas= Number(prompt("cuantas notas tiene"))
let notas = 0


//cantidad de notas y valor
function calcularNotas(cantidadDeNotas){
    let total = 0
    while(isNaN(cantidadDeNotas)){
        cantidadDeNotas= Number(prompt("ingrese la cantidad de notas"))
    }
    for(i=1; i<=cantidadDeNotas;i++){
        
        notas = pedirNota(i)
       
        total += notas
    }
    
    let promedio=Number (total / cantidadDeNotas)
    
 
if(promedio >= 7){
    document.write("el alumno " + nombre + " " + apellido + " promociona la materia con un promedio de " + promedio)
}else if(promedio <= 6 && promedio >= 4){
    document.write("el alumno " + nombre + " " + apellido + " debe rendir recuperatorio ")
}else {
    document.write("el alumno " + nombre + " " + apellido + " debe recursar la materia ") 
}

}

calcularNotas(cantidadDeNotas)

function pedirNota(num){
    let nota=Number(prompt("ingresar nota: " + num + " del alumno " + nombre + " " + apellido ))
    
    while(isNaN(nota) && (nota <=0 || nota >10)){
        nota =Number(prompt("ingresar nota: " + num + "del alumno" + nombre +" " + apellido ))
    }
    console.log(nota)
    return nota
}
 