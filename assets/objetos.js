let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

console.log(persona.nombre); // Imprime: Juan

let respuesta = window.confirm("¿Estás seguro de que quieres continuar?");
if (respuesta) {
    console.log("El usuario aceptó");
} else {
    console.log("El usuario canceló");
}

window.addEventListener("message", function(event) {
    console.log("Mensaje recibido:", event.data);
}, false);

window.postMessage("Hola desde otra ventana", "*");

let numero = 123.456;
console.log(numero.toFixed(2)); // Imprime: 123.46

let valor = "123a";
console.log(Number.isNaN(Number(valor))); // Imprime: true


// ejemplo de metodos 1
const producto = {
    nombre:'camiseta',
    precio:19.99,
    cantidad:2,
};

const precioString = producto.precio.toString();
const cantidadString = producto.cantidad.toString();


console.log(`Producto: ${producto.nombre}`);
console.log(`Precio: ${precioString}`);
console.log(`Cantidad: ${cantidadString}`);
// ejemplo de metodos con funciones
function calcularPrecioTotal(cantidad) {
    const precioUnitario = producto.precio;
    const cantidadFloat = parseFloat(cantidad);

    if(isNaN(cantidadFloat)) {
        console.log('Porfavor, ingresa una cantidad valida')
    }else {
        const total = precioUnitario * cantidadFloat;
        console.log(`Total a pagar: $${total.toFixed(2)}`)
    }
}

const inputCantidad = prompt('Ingresa la cantidad de productos:');

calcularPrecioTotal(inputCantidad);

