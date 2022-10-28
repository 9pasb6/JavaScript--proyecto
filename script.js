
class Producto {
    constructor(franqId, id, Detalle, categoria, stock, precio) {
        this.franqId = franqId
        this.id = id
        this.Detalle = Detalle
        this.categoria = categoria
        this.stock = stock
        this.precio = precio
        this.codigo = this.franqId + `.` + this.id
    }

    restarStock(listado, objetos) {
        this.stock = this.stock - 1;
        actualizar(listado, objetos);
        carroCompra.push(this);
    }
}

class Detalle {
    constructor(id, nombre, editorial, precio) {
        this.id = id
        this.nombre = nombre
        this.editorial = editorial
        this.precio = precio
    }
}
// funciones de acciones

// Generador de listado de productos
function armadoLista(objetos, listado) {
    for (const categoria of objetos) {
        listado.push("\n" + categoria.id + ".- " + categoria.Detalle + " " + categoria.categoria + " (" + categoria.stock + ") $" + categoria.precio)
    }
}


// Detalles para el menu
let menuA = new Detalle("1", "Americano", "Editorial Panini Mexico", 4500)
let menuB = new Detalle("2", "Latte", "Editorial OvniPress", 5000)
let menuC = new Detalle("3", "Capuccino", "Ivrea Colombia", 3500)

let Detalles = [menuA, menuB, menuC];
let listaDetalles = []

for (const franq of Detalles) {
    listaDetalles.push("\n" + franq.id + ".- " + franq.nombre + " " + franq.editorial + " $" + franq.precio)
}

// Productos Americano
let shmkPan1 = new Producto(Detalles[0].id, "1", Detalles[0].nombre, "categoria 1", 15, Detalles[0].precio);
let shmkPan2 = new Producto(Detalles[0].id, "2", Detalles[0].nombre, "categoria 2", 3, Detalles[0].precio);
let shmkPan3 = new Producto(Detalles[0].id, "3", Detalles[0].nombre, "categoria 3", 5, Detalles[0].precio);
let shmkPan4 = new Producto(Detalles[0].id, "4", Detalles[0].nombre, "categoria 4", 0, Detalles[0].precio);
let shmkPan5 = new Producto(Detalles[0].id, "5", Detalles[0].nombre, "categoria 5", 12, Detalles[0].precio);
let productoShmkPan = [shmkPan1, shmkPan2, shmkPan3, shmkPan4, shmkPan5];
let listaShmkPan = []

armadoLista(productoShmkPan, listaShmkPan)


// Latte - Ovnipress
let vdsgOp = "Latte - Ovnipress Colombia - $15.490 c/u";
const vdsgOpPrecio = 15490;

let vdsgOp1 = new Producto(Detalles[1].id, "1", Detalles[1].nombre, "categoria 1", 10, Detalles[1].precio);
let vdsgOp2 = new Producto(Detalles[1].id, "2", Detalles[1].nombre, "categoria 2", 2, Detalles[1].precio);
let vdsgOp3 = new Producto(Detalles[1].id, "3", Detalles[1].nombre, "categoria 3", 5, Detalles[1].precio);
let vdsgOp4 = new Producto(Detalles[1].id, "4", Detalles[1].nombre, "categoria 4", 1, Detalles[1].precio);
let vdsgOp5 = new Producto(Detalles[1].id, "5", Detalles[1].nombre, "categoria 5", 15, Detalles[1].precio);
let productoVdsgOp = [vdsgOp1, vdsgOp2, vdsgOp3, vdsgOp4, vdsgOp5];
let listaVdsgOP = []

armadoLista(productoVdsgOp, listaVdsgOP)

// Capuccino - Ivrea Colombia
let tkrvIvr = "Capuccino - Ivrea Colombia - $9.990 c/u";
const tkrvIvrPrecio = 3500;

let tkrvIvr1 = new Producto(Detalles[2].id, "1", Detalles[2].nombre, "categoria 1", 8, Detalles[2].precio);
let tkrvIvr2 = new Producto(Detalles[2].id, "2", Detalles[2].nombre, "categoria 2", 7, Detalles[2].precio);
let tkrvIvr3 = new Producto(Detalles[2].id, "3", Detalles[2].nombre, "categoria 3", 12, Detalles[2].precio);
let tkrvIvr4 = new Producto(Detalles[2].id, "4", Detalles[2].nombre, "categoria 4", 4, Detalles[2].precio);
let tkrvIvr5 = new Producto(Detalles[2].id, "5", Detalles[2].nombre, "categoria 5", 22, Detalles[2].precio);
let productoTkrvIvr = [tkrvIvr1, tkrvIvr2, tkrvIvr3, tkrvIvr4, tkrvIvr5];
let listaTkrvIvr = []

armadoLista(productoTkrvIvr, listaTkrvIvr)

let productos = [...productoShmkPan, ...productoTkrvIvr, ...productoVdsgOp]
// localStorage.setItem("catalogo", JSON.stringify(productos))
// recargarCatalogo()

let catalogoJson = JSON.parse(localStorage.getItem("catalogo"))
console.log(catalogoJson)
recargarCatalogo()
catalogoJson = JSON.parse(localStorage.getItem("catalogo"))




console.log(productos)
// fin de los productos

let categoria = 0;
let precioTotal = 0;
let carrito = []
let respaldoStock = []


let catalogo = document.getElementById('items')
let listaCarro = document.getElementById('carrito')
let btnVaciado = document.getElementById('boton-vaciar')
let btnComprar = document.getElementById('boton-comprar')
let valorTotal = document.getElementById('total')

btnVaciado.addEventListener('click', vaciarCarritoBtn)
function vaciarCarritoBtn() {
    carrito = []
    listaCarro.innerHTML = ''
    valorTotal.innerText = 0
    devolverStock()
    localStorage.removeItem("catalogoDinamico")
    localStorage.removeItem("carrito")
}

btnComprar.addEventListener('click', comprarCarrito)



CargarCarritoStorage()
cargarCatalogo()
renderCarrito()
respaldarStock()




function renderProductos() {
    catalogo.innerHTML = ''

    catalogoJson.forEach((prod) => {
        let container = document.createElement('div')
        container.classList.add('card', 'producto', 'col-lg-2', 'col-md-3', 'col-sm-4', 'col-6')
        // img
        let img = document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('src', `../img/${prod.Detalle}/${prod.id}.jpg`)
        // body
        let body = document.createElement('div')
        body.classList.add('card-body')
        // titulo
        let title = document.createElement('h5')
        title.classList.add('card-title')
        title.innerText = `${prod.Detalle}` 
        // subtitulo
        let editorial = document.createElement('h6')
        editorial.classList.add('card-text')
        
        // subtitulo
        let subtitulo = document.createElement('h6')
        subtitulo.classList.add('card-text')
        subtitulo.innerText = `$${prod.precio}` + " - " +` (Stock: ${prod.stock})`
        // boton
        let botonAñadir = document.createElement('button')
        botonAñadir.classList.add('btn', 'btn-primary')
        botonAñadir.innerText = `Añadir al carro`
        botonAñadir.setAttribute('mark', prod.codigo)
        botonAñadir.addEventListener('click', comprobarStock)

        function comprobarStock(event) {
            if (prod.stock <= 0) {
                // alert("no tenemos este producto!")
                Swal.fire({
                    title: 'Error',
                    text: 'No tenemos este producto actualmente en stock',
                    icon: 'error',
                    confirmButtonText: ' Continuar '
                })
            }
            else {
                restarStock(prod)
                agregarProductoCarrito(event)
            }
        }

        body.append(title)
        body.append(editorial)
        body.append(subtitulo)
        body.append(botonAñadir)
        container.append(img)
        container.append(body)
        catalogo.append(container)

    }
    )
}
renderProductos()

// let respaldoStock = ""
function respaldarStock() {
    if (localStorage.getItem("catalogoDinamico") != null) {
        console.log("hola")
    }
    else {
        localStorage.setItem("respaldoCatalogo", JSON.stringify(catalogoJson))
        respaldoStock = JSON.parse(localStorage.getItem("respaldoCatalogo"))
        console.log("Respaldo json: ", respaldoStock)
        console.log("chao")
    }
}
function devolverStock() {
    catalogoJson = JSON.parse(localStorage.getItem("respaldoCatalogo"))
    console.log("despues del respaldo:", catalogoJson)
    renderProductos()
}

function agregarProductoCarrito(event) {
    carrito.push(event.target.getAttribute('mark'))
    console.log(carrito)
    renderCarrito()
    carritoDinamico()
}

function carritoDinamico() {
    localStorage.setItem("catalogoDinamico", JSON.stringify(catalogoJson))
}

function restarStock(item) {
    item.stock = item.stock - 1
    renderProductos()
}

function renderCarrito() {
    guardarCarritoStorage()

    listaCarro.innerHTML = ''

    let carritoSinRepetidos = [...new Set(carrito)]

    carritoSinRepetidos.forEach((itemId) => {
        let item = catalogoJson.filter((producto) => {
            // console.log(itemId)
            // console.log(producto.codigo)
            return producto.codigo === itemId
        })

        let cantidad = carrito.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)

        let linea = document.createElement('li')
        linea.classList.add('list-group-item', 'text-right', 'mx-2')
        linea.innerText = `${cantidad} x ${item[0].Detalle} ${item[0].categoria} - $${item[0].precio}`

        let botonEliminar = document.createElement('button')
        botonEliminar.classList.add('btn', 'btn-danger', 'mx-5')
        botonEliminar.innerText = 'X'
        botonEliminar.dataset.item = itemId
        botonEliminar.setAttribute('mark', itemId)
        botonEliminar.addEventListener('click', ()=>{eliminarProducto(event, item, cantidad)})


        linea.append(botonEliminar)
        listaCarro.append(linea)

    })
    
    valorTotal.innerText = calcularPrecioTotal()
    // valorTotal = calcularPrecioTotal()
    valorTotalVisible = valorTotal.innerHTML
    
}

function sumarStock(item, cantidad) {
    console.log(item.stock)
    console.log(cantidad)
    item.stock = item.stock + cantidad
    renderCarrito
}
function eliminarProducto(event, item, cantidad) {
    let id = event.target.dataset.item
    console.log(event.target.dataset.item)
    carrito = carrito.filter((carritoId) => {
        console.log(carrito)
        return carritoId != id
    })


    console.log(item[0])
    console.log(cantidad)
    item[0].stock = item[0].stock + cantidad
    
    console.log(item)

    renderCarrito()
    renderProductos()
}


function calcularPrecioTotal() {
    return carrito.reduce((total, itemId) => {
        let item = catalogoJson.filter((producto) => {
            return producto.codigo === itemId
        })

        return total + item[0].precio
    }, 0)
}

function guardarCarritoStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function CargarCarritoStorage() {
    if (localStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
}

function cargarCatalogo() {
    if (localStorage.getItem("catalogoDinamico") !== null) {
        catalogoJson = JSON.parse(localStorage.getItem("catalogoDinamico"))
    }
}
function comprarCarrito(){
    valorTotalVisible = valorTotal.innerHTML
    if(valorTotalVisible == 0){
        Swal.fire({
            title: 'Error en la compra',
            text: `El carrito aun esta vacio`,
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
    }
    else{
    Swal.fire({
        title: 'Compra realizada',
        text: `El valor total para su compra es: $${valorTotalVisible}`,
        icon: 'success',
        confirmButtonText: 'Continuar'
    })}
    console.log(valorTotalVisible)
    localStorage.removeItem("catalogoDinamico")
    // respaldarStock
    recargarCatalogo()
    renovarCarrito()
}

function recargarCatalogo(){
    if (localStorage.getItem("catalogo") == null){
        localStorage.setItem("catalogo", JSON.stringify(productos))
    }
    else{
        localStorage.setItem("catalogo", JSON.stringify(catalogoJson))
        cargarCatalogo()
    }}

function renovarCarrito(){
    carrito = []
    listaCarro.innerHTML = ''
    valorTotal.innerText = 0
    localStorage.removeItem("catalogoDinamico")
    localStorage.removeItem("carrito")
}