// Programa que determina el precio total de n cantidad de productos (tipos de café)
// parametros a manejar: cantidad , precio 
// Pablo Bernal




/* variables globales*/

let cafe1 = "Capuccino"
let cafe2 = "Latte"
let cafe3 = "Americano"


let valorCafe1 = 3500
let valorCafe2 = 4500
let valorCafe3 = 5000


let totalCafe1 = 0
let totalCafe2 = 0
let totalCafe3= 0


/* variable totalizadora*/
let precioTotal = 0






alert("Bienvenido a Guadualito Café")

    let opcion = prompt("Escoja el tipo de café que desea opcionr: \n 1- Capuccino \n 2- Latte\n 3- Americano \n ESC - escriba ESC para Salir")

while (opcion != "ESC"){

    if(opcion == 1){
        let cantidadCafe1 = parseInt(prompt("Valor unitario: "+valorCafe1 + "\n"+"seleccione cantidad de " + cafe1 + " que desea"));
        totalCafe1 += calcularProducto(cantidadCafe1, valorCafe1);
        
    }
    
    
    else if(opcion == 2){
        let cantidadCafe2 = parseInt(prompt("Valor unitario: "+valorCafe2 + "\n"+ "seleccione cantidad de " + cafe2 + " que desea"));
        totalCafe2 += calcularProducto(cantidadCafe2, valorCafe2);
    }

    else if(opcion == 3){
        let cantidadCafe3= parseInt(prompt("Valor unitario: "+valorCafe3 +"seleccione cantidad de " + cafe3+ " que desea"));
        totalCafe3+= calcularProducto(cantidadCafe3, valorCafe3);
    }

// llamado recursivo para que no se quede en un bucle

    opcion = prompt("Escoja el tipo de café que desea opcionr: \n 1- Capuccino \n 2- Latte\n 3- Americano \n ESC - escriba ESC para Salir")

}

// función que calcula el valor de un producto

function calcularProducto (cantidad, precio){
    precioTotal += (cantidad * precio) ;
}


if (precioTotal != 0){
    alert("El precio total de su compra es: $" + precioTotal +"\n"+ "Gracias por su compra !!!")
} else {
    alert("Gracias por su visita")
}


    
