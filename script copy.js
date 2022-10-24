





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



function Productos (nombre,precio, stock, img, categ){
   
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.img = img;
    this.categ = categ;
   }

let productoA = new Productos("capuccino",3500,12,"media/piña128.png", "1")
let productoB = new Productos("latte",4500,5, "media/piña128.png", "2")
let productoC = new Productos("americano",5000,1, "media/piña128.png", "3")

let listaProducto = [productoA,productoB,productoC] 

let listaProductoJSON = JSON.stringify(listaProducto);



let resul = prompt("ingrese palabra");


// const findObject = listaProducto.find(elemento => elemento.categ == resul)

// let valor = findObject.precio * 2;

// alert("valor total es: " + valor)





    let findObject = listaProducto.find(elemento => elemento.categ == resul)
    let valor = findObject.precio * 2;
    alert("El resultado es "+ valor)


















