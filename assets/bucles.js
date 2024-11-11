/*
Bucles while: Simulación de agregar productos al carrito
Imagina que un cliente quiere seguir agregando productos a su carrito hasta que decida parar. 
Un bucle while puede repetir la acción de agregar productos mientras el cliente quiera.
*/

let carrito = [];
let producto = prompt('¿Qué producto quieres agregar al carrito? (Escribe "SALIR" para terminar)');

while(producto !== "SALIR") {
    carrito.push(producto); // Agregar el producto al array del carrito
    producto = prompt('¿Qué otro producto quieres agregar al carrito? (Escribe "SALIR" para terminar)');
}

alert("Productos en el carrito: " + carrito.join(", "));

/*
Bucles do while: Proceso de pago con verificación de saldo
Un bucle do while es útil cuando queremos ejecutar algo al menos una vez, incluso si la condición no se cumple. En este ejemplo,
simulemos un proceso de pago donde verificamos que el cliente tiene suficiente saldo. Si no tiene suficiente, le damos la opción de intentar pagar de nuevo.
*/

let saldoDisponible = 500; // Saldo del cliente
let totalCompra = 600; // Total del carrito

do {
    if(totalCompra > saldoDisponible) {
        alert('Saldo insuficiente. Inténtalo nuevamente.');
    } else {
        alert('Pago realizado con éxito.');
    }
    totalCompra = parseFloat(prompt('Introduce un nuevo monto total (o ingresa un monto menor o igual a tu saldo disponible):'));
} while(totalCompra > saldoDisponible);

alert('Gracias por tu compra.');

/*
Bucles for: Mostrar todos los productos en el carrito
Un bucle for es útil cuando sabemos cuántas veces queremos repetir una tarea.
En este caso, queremos mostrar todos los productos que el cliente tiene en su carrito.
*/

let carritoFOR = ['Zapatos', 'Camisa', 'Pantalones'];

for(let i = 0; i < carritoFOR.length; i++) {
    alert("Producto en el carrito: " + carritoFOR[i]);
}

/*
 Arrays: Lista de productos y búsqueda en la tienda
Los arrays son muy útiles para almacenar múltiples elementos, como una lista de productos en una tienda. 
Podemos usar bucles para buscar en el array si el producto que el cliente busca está disponible.
*/

let productos = ['Zapatos', 'Camisa', 'Pantalones', 'Cartera', 'Gorra'];
let productoBuscado = prompt('¿Qué producto estás buscando?');
let encontrado = false;

for(let i = 0; i < productos.length; i++) {
    if(productos[i].toLowerCase() === productoBuscado.toLowerCase()) {
        alert('¡Producto encontrado: ' + productos[i] + '!');
        encontrado = true;
        break; // Detenemos el bucle si encontramos el producto
    }
}

if(!encontrado) {
    alert('Lo sentimos, ese producto no está disponible.');
}
