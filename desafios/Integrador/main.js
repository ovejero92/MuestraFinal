const NombreUsuario = prompt("Hola bienvenido/a a mi pagina web e-commerce \nIngresa tu nombre: ")

const Producto = prompt(`Hola ${NombreUsuario}, \nLos productos son los siguientes: \n1-Mouse ($800) \n2-Teclado ($1200) \n3-Mouse pad ($300) \n4-Pantalla led ($6000) \nPara elegir escibe el numero que esta al lado del producto`)

let precioUnitario;
let cantidad;
let total;
let productoNombre;

if(Producto == 1) {
    precioUnitario = 800;
    productoNombre = "Mouse"
    cantidad = prompt("Elegiste Mouse que sale $800. ¿Cuantos queres?")
} else if(Producto == 2) {
    precioUnitario = 1200;
    productoNombre = "Teclado"
    cantidad = prompt("Elegiste Teclado que sale $1200. ¿Cuantos queres?");
}else if(Producto == 3) {
    precioUnitario = 300;
    productoNombre = "Mouse pad"
    cantidad = prompt("Elegiste Mouse pad que sale $300. ¿Cuantos queres?");
}else if(Producto == 4) {
    precioUnitario = 6000;
    productoNombre = "Pantalla led"
    cantidad = prompt("Elegiste Pantalla led que sale $6000. ¿Cuantos queres?");
} else {
    alert("Opcion no valida. Recarga la pagina e intentalo denuevo")
}

total = precioUnitario * cantidad

document.getElementById("tikcet").innerHTML = `
    <h2 class="text-2xl font-bold text-gray-700 mb-4">Ticket de Compra</h2>
    <p class="text-lg text-gray-600"><strong>Cliente:</strong> ${NombreUsuario}</p>
    <p class="text-lg text-gray-600"><strong>Producto:</strong> ${productoNombre}</p>
    <p class="text-lg text-gray-600"><strong>Precio unitario:</strong> $${precioUnitario}</p>
    <p class="text-lg text-gray-600"><strong>Cantidad:</strong> ${cantidad}</p>
    <p class="text-lg text-gray-800 font-semibold mt-4">Total: $${total}</p>
`