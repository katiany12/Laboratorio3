// paso 1 : declaracion de variable

let num1, num2;
let operacion;

// paso 2 : funcion para realizar operaciones

function realizaroperacion(num1,num2,operacion){ //incializacion de variable y funciones
    if(operacion === "suma"){ //condicional para suma
        return num1+num2;//operacion para sumar    

    }else if(operacion === "resta"){ // condicional para resta
        return num1-num2;
    }else if(operacion === "multiplicacion"){
        return num1*num2;

    }else if(operacion === "division"){
        if(num2 === 0){
            return "no se puede dividir entre 0"

        }
        return num1/num2;
    }else{
        return" operacion no  valida"
     }
}     

// paso 3: bucle para realizar multiples operaciones
while(true){
    // solicitar al usuario el primer numero 
    num1=parseFloat(prompt("ingrese el primer nuemero (o escriba salir para terminar)"));
    //si la entreda no es un numero termine el bucle
    if(isNaN(num1)){
        console.log("adios");
        break;
    }

    //solicitar al usuario que ingrese el numero 2
    num2=parseFloat(prompt("ingrese el segundo numero"));

    // si el segundo numero no es valido
    if(isNaN(num2)){
        console.log("por favor ingrese un numero valido");
        continue;//regrese al indice del bucle
    }

    //solicita al usuario que ingrse la operacion deseada

    operacion=prompt("ingresar la operacion (suma,resta,division,multiplicacion)");

    //si el usuario decide salir terminar bucle
    if(operacion === "salir"){
        console.log("haz salido");
        break;
    }

    // llama la funcion realizaroperacion con los datos proprcionados 
    const resultado = realizaroperacion(num1,num2, operacion.toLowerCase());
    console.log(`resultado:${resultado}`);
}

