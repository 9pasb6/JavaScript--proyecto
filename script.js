// Programa que determina el precio total de n cantidad de productos (tipos de café)
// parametros a manejar: cantidad , precio 
// Pablo Bernal




/* variables globales*/

// let cafe1 = "Capuccino"
// let cafe2 = "Latte"
// let cafe3 = "Americano"


// let valorCafe1 = 3500
// let valorCafe2 = 4500
// let valorCafe3 = 5000


let totalCafe1 = 0
let totalCafe2 = 0
let totalCafe3= 0


/* variable totalizadora*/
let precioTotal = 0



function Productos (nombre,precio, stock){
   
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
   }



let productoA = new Productos("Capuccino",3500,12)
let productoB = new Productos("Latte",4500,5)
let productoC = new Productos("Americano",5000,0)

let listaProducto = [productoA,productoB,productoC] 

let listaProductoJSON = JSON.stringify(listaProducto);


// const listaProducto =[] //listado de productos dentro de un array
// listaProducto.push(new Productos("Capuccino",3500,12));
// listaProducto.push(new Productos("Latte",4500,5));
// listaProducto.push(new Productos("Americano",5000,0));





alert("Bienvenido a Guadualito Café")

let opcion2 = prompt("Desea ver que productos hay disponibles? ").toLowerCase();

if(opcion2 != "no"){

   let buscar = prompt("Que producto buscas?")

   let resultado = listaProducto.map((pro) =>  pro.nombre+"\n" );
   let resultad1 = listaProducto.filter((pro) =>  pro.stock+"\n" <= 0 );
   let resultad2 = listaProducto.filter((pro) =>  pro.nombre.includes(buscar)  );

  

  alert( resultado);
  console.log( JSON.stringify(resultad1));
  console.log( JSON.stringify(resultad2));


}else{
    alert("Vale, con gusto");
}


    let opcion = prompt("Escoja el tipo de café que desea opción: \n 1- Capuccino \n 2- Latte\n 3- Americano \n ESC - escriba ESC para Salir").toLowerCase();

while (opcion != "esc"){

    if(opcion == 1){
        let cantidadCafe1 = parseInt(prompt("Valor unitario: "+ productoA.precio + "\n"+"seleccione cantidad de " + productoA.nombre+ " que desea"));
        totalCafe1 += calcularProducto(cantidadCafe1, productoA.precio);
        
    }
    
    
    else if(opcion == 2){
        let cantidadCafe2 = parseInt(prompt("Valor unitario: "+ productoB.precio + "\n"+ "seleccione cantidad de " + productoB.nombre + " que desea"));
        totalCafe2 += calcularProducto(cantidadCafe2, productoB.precio);
    }

    else if(opcion == 3){
        let cantidadCafe3= parseInt(prompt("Valor unitario: "+ productoC.precio +"seleccione cantidad de " + productoC.nombre + " que desea"));
        totalCafe3+= calcularProducto(cantidadCafe3, productoC.precio);
    }

// llamado recursivo para que no se quede en un bucle

    opcion = prompt("Escoja el tipo de café que desea opcionr: \n 1- Capuccino \n 2- Latte\n 3- Americano \n ESC - escriba ESC para Salir")

}





// let numero = [1,2,3,4];

// numero.filter((num ) => alert(num*2))

// //num = es elemento por elemnto

// function calcularNum (n){
//      n = n * 2
// }


// función que calcula el valor de un producto

function calcularProducto (cantidad, precio){
    precioTotal += (cantidad * precio) ;
}


if (precioTotal != 0){
    alert("El precio total de su compra es: $" + precioTotal +"\n"+ "Gracias por su compra !!!")
} else {
    alert("Gracias por su visita")
}

//no he podido imprimer el objeto, no se como  por medio de clases
    
// while (opcion != "esc"){

//     if(opcion == 1){
//         let cantidadCafe1 = parseInt(prompt("Valor unitario: "+ listaProducto[0].precio + "\n"+"seleccione cantidad de " + listaProducto[0].nombre+ " que desea"));
//         totalCafe1 += calcularProducto(cantidadCafe1, listaProducto[0].precio);
        
//     }
    
    
//     else if(opcion == 2){
//         let cantidadCafe2 = parseInt(prompt("Valor unitario: "+ listaProducto[1].precio + "\n"+ "seleccione cantidad de " + listaProducto[1].nombre + " que desea"));
//         totalCafe2 += calcularProducto(cantidadCafe2, listaProducto[1].precio);
//     }

//     else if(opcion == 3){
//         let cantidadCafe3= parseInt(prompt("Valor unitario: "+listaProducto[2].precio +"seleccione cantidad de " + listaProducto[2].nombre + " que desea"));
//         totalCafe3+= calcularProducto(cantidadCafe3, listaProducto[2].precio);
//     }

// // llamado recursivo para que no se quede en un bucle

//     opcion = prompt("Escoja el tipo de café que desea opcionr: \n 1- Capuccino \n 2- Latte\n 3- Americano \n ESC - escriba ESC para Salir")

// }
