// Programa que determina el precio total de n cantidad de productos (tipos de café)
// parametros a manejar: cantidad , precio 
// Pablo Bernal




// let nombre = prompt("Ingrese su nombre");


// let holu = document.getElementById("holu")

// console.log(holu.innerText ) // solo funcioan con Id, no con colecciones (arrays)

// holu.innerText = "Bienvenido " + nombre // aqui modifica el texto del html

// console.log(holu.innerText); //imprime el elemento modificado 




//-------Agrega y modifica el container, por ende afecta a todos los elementos----------------


// let containerr = document.getElementById("contenedor")

// //holu.innerHTML = document.getElementById("holi")

// containerr.innerHTML = "<h1>perraaaa<h1>" // modifica el nodo padre, afectando a los hijos "contenedor"

// containerr.className = "ulNom" //agrega una clase al nodo padre "contenedor"


//---------modifica un lista de elemntos-------

// let card = document.getElementsByClassName("card") //getElements como si fuese un array

// card[0].className = "ulNom"



//----------EVENTOSSS 1----------------------------------



// let buscar = document.getElementById("primerInput")

// buscar.addEventListener("change", function () {respuestaTeclado(buscar)})

// function respuestaTeclado(input){
   
//     alert("hola "+input.value)
//     input.value = " ";


// }



// let boton = document.getElementById("primerBoton")

// boton.addEventListener("click", function () {respuestaTeclado(buscar)})

//---------FIN EVENTOS 1-----------














function Productos (nombre,precio, stock, img, categ){
   
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.img = img;
    this.categ = categ;
   }

let productoA = new Productos("Capuccino",3500,12,"media/cappuccino.png", "1")
let productoB = new Productos("Latte",4500,5, "media/latte.png", "2")
let productoC = new Productos("Americano",5000,1, "media/americano.png", "3")

let listaProducto = [productoA,productoB,productoC] 

let listaProductoJSON = JSON.stringify(listaProducto);
let listaNombrePorductos = listaProducto.map((pro) =>  pro.nombre+"\n" );
let listaProductoConStock = listaProducto.filter((pro) =>  pro.stock > 0 );









//  -----  input * pront ----

let categoriaSelc = " "

// let buscar = document.getElementById("primerInput")
// buscar.addEventListener("keyup", ()=>{filtradoMenu(buscar.value)}) //capturado por medio del change



function filtradoMenu(buscar){  
    

    let listaProductoCategoria = listaProducto.filter((pro) =>  pro.nombre.includes(buscar));
    
    containerr.innerHTML= " "
    
    if(listaProductoCategoria.length == 0){
    
        let card2 = document.createElement("div")
        
        card2.innerHTML = `<h2>No tenemos ese producto por el nombre</h2>`
        
        card2.className = "ulNom"
        containerr.append(card2)
    
    }else{
        reset(listaProductoCategoria)
    }
    
     }



// let boton = document.getElementById("primerBoton")
// boton.addEventListener("click", filtrado)



// function filtrado(){  
    

// let listaProductoCategoria = listaProducto.filter((pro) =>  pro.categ.includes(categoriaSelc));

// containerr.innerHTML= " "

// if(listaProductoCategoria.length == 0){

//     let card2 = document.createElement("div")
    
//     card2.innerHTML = `<h2>No tenemos ese producto</h2>`
    
//     card2.className = "ulNom"
//     containerr.append(card2)

// }else{
//     reset(listaProductoCategoria)
// }

//  }















let container1 = document.getElementById("contenedor1")

function reset1 (){
    
  

   
    let card = document.createElement("div")
    
    card.innerHTML = `
    <h2>Hola!!, nuestro menú es el siguiente</h2>
    <p>Escoja el tipo de café que desea opción:</p>
    <p> Capuccino </p>
    <p> Latte</p>
    <p> Americano </p>
    <input type="search" id="segundoInput">
   
    `
    //<button id="segundoBoton">Buscar</button> si deseo hacer el menú con boton
    
    card.className = "ulNom" // clase asociada
    
    container1.append(card) //para que lo muestre
   
    

}

reset1(container1);




function filtradoMenu(buscar){  
    

    let listaProductoCategoria = listaProducto.filter((pro) =>  pro.nombre.includes(buscar));
    
    //me retonar un array nuevo 

    containerr.innerHTML= " "
    
  
    
  
   


    if(listaProductoCategoria.length == 0){
    
        let card2 = document.createElement("div")
        
        card2.innerHTML = `<h2>No tenemos ese producto por el nombre</h2>`
        
        card2.className = "ulNom"
        containerr.append(card2)
    

    }else{


        reset(listaProductoCategoria)
        
        const findObject = listaProductoCategoria.find(elemento => elemento.nombre.includes(buscar)) //acceder a la referencia



        let inputProducto = document.getElementById("tercerInput")
        let cantidadPro  = 0 // variable para poder pasar el evento del input al boton
        
        let o = findObject.precio


        inputProducto.addEventListener("change", ()=>{cantidadPro = inputProducto.value})
        
        let botonProducto = document.getElementById("tercerBoton")
        botonProducto.addEventListener("click", ()=>{calcularProducto(cantidadPro, o)})



        // let cantidad = prompt("Ingrese cuaaass")

        // let o = findObject.precio

        // calcularProducto(cantidad, o)

        
    }



    
     }



function calcularProducto (cantidad, precio){



    let precioTotal = cantidad * precio;
    if (precioTotal != 0){

        containerr.innerHTML= " "
        
        let card2 = document.createElement("div")
        
        card2.innerHTML = `<h2>El precio total es:  ${precioTotal} </h2>`
        
        card2.className = "ulNom"
        containerr.append(card2)


       
    } else {

        let card2 = document.createElement("div")
        
        card2.innerHTML = `<h2>Por favor ingrese una cantidad </h2>`
        
        card2.className = "ulNom"
        containerr.append(card2)



       
    }


}
















let input1 = document.getElementById("segundoInput")
// let opcion = " " // variable para poder pasar el evento del input al boton
// input1.addEventListener("change", ()=>{filtradoMenu(opcion)})

input1.addEventListener("input", ()=>{filtradoMenu(input1.value)})

// let boton2 = document.getElementById("segundoBoton")
// boton2.addEventListener("click", ()=>{filtradoMenu(opcion)})




let containerr = document.getElementById("contenedor")

function reset (lista){
    
    containerr.innerHTML= " "

for(const pro of lista){

   
    let card = document.createElement("div")
    
    card.innerHTML = `
    <img class="img"src="${pro.img}"></img>
    <h2>${pro.nombre}</h2>
    <p>Valor unitario: ${pro.precio}</p>
    <p>Ingrese la cantidad: </p>
    <input type="text" id="tercerInput">
    <button id="tercerBoton">Calcular</button>
 
    `

    
    // let cantidadCafe1 = parseInt(prompt("Valor unitario: "+ productoA.precio + "\n"+"seleccione cantidad de " + productoA.nombre+ " que desea"));
    // totalCafe1 += calcularProducto(cantidadCafe1, productoA.precio);

    
    card.className = "ulNom" // clase asociada
    
    containerr.append(card) //para que lo muestre
   }
}



// boton para borrar productos


let boton1 = document.getElementById("borrame")
boton1.addEventListener("click", boorrarFiltrado)


function boorrarFiltrado(){  

    containerr.innerHTML= " " // los vacia

   
      
     }





































// alert("Bienvenido a Guadualito Café")

// let opcion2 = prompt("Desea ver que productos hay disponibles? ").toLowerCase();

// if(opcion2 != "no"){

//    let buscar = prompt("Que producto buscas?")

//    let listaNombrePorductos = listaProducto.map((pro) =>  pro.nombre+"\n" );
//    let listaProductoConStock = listaProducto.filter((pro) =>  pro.stock > 0 );
//    let resultad2 = listaProducto.filter((pro) =>  pro.nombre.includes(buscar)  );



// //   alert( listaNombrePorductos);
// //   console.log( JSON.stringify(listaProductoConStock));
// //   console.log( JSON.stringify(resultad2))


// }else{
//     alert("Vale, con gusto");
// }

//function filtrado3(opcion){  
    
    //     while (opcion != "esc"){
    
    //         if(opcion == 1){
    
    //             container1.innerHTML= " "
    
    //             reset(listaProducto);
    
    //             let input3 = document.getElementById("tercerInput")
    //             let cantidad = " " // variable para poder pasar el evento del input al boton
    
    //             input1.addEventListener("change", ()=>{cantidad = input3.value})
    
    //             let boton3 = document.getElementById("tercerBoton")
    //             boton3.addEventListener("click", ()=>{calcularProducto(cantidad, productoA.precio)})
    
               
    
    //             // let cantidadCafe1 = parseInt(prompt("Valor unitario: "+ productoA.precio + "\n"+"seleccione cantidad de " + productoA.nombre+ " que desea"));
    //             // totalCafe1 += calcularProducto(cantidadCafe1, productoA.precio);
    //             break
                
    //         }
            
            
    //         else if(opcion == 2){
    //             let cantidadCafe2 = parseInt(prompt("Valor unitario: "+ productoB.precio + "\n"+ "seleccione cantidad de " + productoB.nombre + " que desea"));
    //             totalCafe2 += calcularProducto(cantidadCafe2, productoB.precio);
    //             break
        
    //         }
        
    //         else if(opcion == 3){
    //             let cantidadCafe3= parseInt(prompt("Valor unitario: "+ productoC.precio +"\n" +"seleccione cantidad de " + productoC.nombre + " que desea"));
    //             totalCafe3+= calcularProducto(cantidadCafe3, productoC.precio);
    //             break
    //         }
        
        
            
        
    //     }
       
    // }