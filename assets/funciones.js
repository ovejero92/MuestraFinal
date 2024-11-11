function saludar(){
    console.log("Hola Ana");
    console.log("Hola Pedro");
    console.log("Hola Juan");
    console.log("Hola Maria");
    console.log("Hola Lujan")
}
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
saludar("Ana");

let mejorAmiga = "Carla";
saludar(mejorAmiga);


function suma (a,b){
    let resultado = a + b;
    console.log(resultado);
}
suma(2.4, 5);
suma(20, 1);

// ARROW
function saludar(nombre){
    console.log("Hola " + nombre + "!!");
}
saludar("Ana");

let saludar = (nombre) => {
    console.log("Hola " + nombre + "!!");
}
saludar("Ana");


//Función sin return:
function sumar(a,b){
    let resultado = a + b;
    console.log(resultado);
}
sumar(3,5);
// Función con return:
function sumarConReturn(a,b){
    return a + b;
}
let resultado = sumarConReturn(3, 5);
console.log(resultado)

/* Explicacion de Return 
¿Qué es return?
Imagina que return es como la caja registradora en tu tienda. Cuando compras algo, la caja te da el total de la compra. En una función, return es lo que devuelve el resultado final de esa función para que puedas usarlo más adelante.
*/
function calcularPrecioTotal(precio, impuesto) {
    let total = precio + (precio * impuesto);
    return total; // Devolvemos el total
}

let precioProducto = calcularPrecioTotal(100, 0.21); // 100 es el precio y 0.21 es el 21% de impuestos
console.log("El precio total del producto es: $" + precioProducto);

function hayStock(cantidadDisponible, cantidadSolicitada) {
    if (cantidadSolicitada <= cantidadDisponible) {
        return true; // Hay suficiente stock
    } else {
        return false; // No hay suficiente stock
    }
}

let stockDisponible = 10;
let cantidadCompra = 5;
if (hayStock(stockDisponible, cantidadCompra)) {
    console.log("¡Hay suficiente stock! Puedes realizar la compra.");
} else {
    console.log("Lo siento, no hay suficiente stock.");
}
