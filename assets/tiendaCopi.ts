// Definir interfaces para los tipos de datos
interface Producto {
    nombre: string;
    precio: number;
    descuento: number;
    img: string;
}

interface Categoria {
    categoria: string;
    productos: Producto[];
}

interface CarritoItem extends Producto {
    cantidad: number;
}

// Definir la base de datos con tipo Categoria[]
const baseDeDatos_Ts: Categoria[] = [
    {
        categoria: "electrodomésticos",
        productos: [
            { nombre: "calefactor", precio: 259075, descuento: 0.5, img: "https://http2.mlstatic.com/D_NQ_NP_938970-MLA45994715946_052021-O.webp" },
            { nombre: "caloventor", precio: 25999, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_832778-MLU70474474494_072023-O.webp" },
            { nombre: "Estufa hongo", precio: 211150, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_841221-MLU76793294957_062024-O.webp" },
            { nombre: "Estufa electrica", precio: 41929, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_643143-MLU74821429636_032024-O.webp" },
        ]
    },
    {
        categoria: "herramientas",
        productos: [
            { nombre: "Hidrolavadora", precio: 91681, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_679173-MLU78381109839_082024-P.webp" },
            { nombre: "Taladro", precio: 109034, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_656678-MLA69951087361_062023-P.webp" },
            { nombre: "Mini motosierra", precio: 211150, descuento: 0.7, img: "https://http2.mlstatic.com/D_Q_NP_742298-MLU74855802541_032024-P.webp" },
            { nombre: "Bordeadora", precio: 84364, descuento: 0.7, img: "https://http2.mlstatic.com/D_NQ_NP_643143-MLU74821429636_032024-O.webp" },
        ]
    }
];

// Mostrar categorías en el DOM
function mostrarCategorias_Ts(): void {
    const categoriasContainer = document.getElementById('categorias');
    if (!categoriasContainer) return;

    categoriasContainer.innerHTML = baseDeDatos_Ts.map(cat => `
        <div class="cursor-pointer " onclick="filtrarProductos('${cat.categoria}')">
            <h2 class="text-center mt-2 font-bold bg-gray-800 py-2 text-white">${cat.categoria}</h2>
        </div>
    `).join('');
}

// Mostrar productos en el DOM
function mostrarProductos_Ts(productos: Producto[]): void {
    const productosContainer = document.getElementById('productos');
    if (!productosContainer) return;

    productosContainer.innerHTML = productos.map(prod => `
        <div class="border p-4">
            <img src="${prod.img}" alt="${prod.nombre}" class="w-full h-32 object-cover">
            <h3 class="mt-2 font-bold">${prod.nombre}</h3>
            <p class="text-gray-600">Precio: $${prod.precio}</p>
            <div class="flex items-center mt-2">
                <button onclick="modificarCantidad('${prod.nombre}', -1)" class="bg-gray-200 px-2">-</button>
                <span id="cantidad-${prod.nombre}" class="mx-2">1</span>
                <button onclick="modificarCantidad('${prod.nombre}', 1)" class="bg-gray-200 px-2">+</button>
            </div>
            <button onclick='agregarAlCarrito(${JSON.stringify(prod)}, obtenerCantidad("${prod.nombre}"))' class="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-2 rounded">Añadir al Carrito</button>
        </div>
    `).join('');
}

function modificarCantidad_Ts(nombre: string, delta: number): void {
    const cantidadSpan = document.getElementById(`cantidad-${nombre}`);
    if (!cantidadSpan) return;

    let cantidad = parseInt(cantidadSpan.innerText) + delta;
    cantidad = cantidad < 1 ? 1 : cantidad;
    cantidadSpan.innerText = cantidad.toString();
}

function obtenerCantidad_Ts(nombre: string): number {
    const cantidadSpan = document.getElementById(`cantidad-${nombre}`);
    return cantidadSpan ? parseInt(cantidadSpan.innerText) : 1;
}

function filtrarProductos_Ts(categoria: string): void {
    const categoriaSeleccionada = baseDeDatos_Ts.find(cat => cat.categoria === categoria);
    if (categoriaSeleccionada) {
        mostrarProductos_Ts(categoriaSeleccionada.productos);
    }
}

let carrito_Ts: CarritoItem[] = [];

function abrirCarrito_Ts(): void {
    document.getElementById('modalCarrito')?.classList.remove('hidden');
}

function cerrarCarrito_Ts(): void {
    document.getElementById('modalCarrito')?.classList.add('hidden');
}

function agregarAlCarrito_Ts(producto: Producto, cantidad: number = 1): void {
    const productoExistente = carrito_Ts.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito_Ts.push({ ...producto, cantidad });
    }

    actualizarCarrito();
}

function actualizarCarrito_Ts(): void {
    const contenidoCarrito = document.getElementById('contenidoCarrito');
    const carritoCount = document.getElementById('countCard');
    if (!contenidoCarrito || !carritoCount) return;

    contenidoCarrito.innerHTML = '';
    carrito_Ts.forEach(item => {
        contenidoCarrito.innerHTML += `
            <div class="flex justify-between items-center border-b pb-2">
                <span>${item.nombre}</span>
                <div class="flex items-center">
                    <button onclick="cambiarCantidad('${item.nombre}', -1)">-</button>
                    <span class="mx-2">${item.cantidad}</span>
                    <button onclick="cambiarCantidad('${item.nombre}', 1)">+</button>
                    <span class="ml-4">$${item.precio * item.cantidad}</span>
                </div>
            </div>
        `;
    });

    const total = carrito_Ts.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    document.getElementById('totalCarrito')!.innerText = total.toString();

    const totalItems = carrito_Ts.reduce((sum, item) => sum + item.cantidad, 0);
    carritoCount.classList.toggle('hidden', totalItems === 0);
    carritoCount.innerText = totalItems.toString();
}

function cambiarCantidad_Ts(nombre: string, delta: number): void {
    const producto = carrito_Ts.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad += delta;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.nombre !== nombre);
        }
        actualizarCarrito_Ts();
    }
}
/*
function finalizarCompra_Ts(): void {
    const resumenCompra = carrito.map(item => `
        ${item.nombre} (x${item.cantidad}): $${item.precio * item.cantidad}
    `).join('\n');

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    Swal.fire({
        title: 'Resumen de Compra',
        html: `<pre>${resumenCompra}</pre><br>Total: $${total}`,
        showCancelButton: true,
        confirmButtonText: 'Confirmar Compra',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Procesando compra...',
                html: 'Por favor espere un momento.',
                timer: 30000,
                timerProgressBar: true,
                showConfirmButton: false,
                willClose: () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Compra Confirmada',
                        text: 'Su pedido llegará en las próximas 24 horas. Para consultas, contáctenos al 1234-5678.'
                    });
                    carrito = [];
                    actualizarCarrito_Ts();
                }
            });
        }
    });
}
 */
// Inicialización
mostrarCategorias_Ts();
mostrarProductos_Ts(baseDeDatos_Ts.flatMap(cat => cat.productos));
