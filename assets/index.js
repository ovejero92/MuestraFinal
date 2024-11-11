    // Productos de ejemplo
    const productos = [
        { id: 1, nombre: "Banana por Kg", precio: 2000 , img: "https://w7.pngwing.com/pngs/893/335/png-transparent-cavendish-banana-juice-fruit-banana-box-individual-natural-foods-dried-fruit-food.png"},
        { id: 2, nombre: "Palta", precio: 1000 ,img: "https://e7.pngegg.com/pngimages/785/25/png-clipart-sliced-avocado-illustration-avocado-avocado-food-fruit-thumbnail.png"},
        { id: 3, nombre: "Sandia por Kg", precio: 2000 ,img: "https://w7.pngwing.com/pngs/467/70/png-transparent-sliced-watermelon-fruit-mudslide-watermelon-graphy-fruit-watermelon-food-melon-fruit-nut.png"},
        {}
    ];

    // Evento para el botón de "Explorar ahora"
    document.querySelector('#btn-ex').addEventListener('click', async (e) => {
        e.preventDefault();

        let carrito = [];
        
        for (const producto of productos) {
            const { value: cantidad } = await Swal.fire({
                title: `Selecciona la cantidad para ${producto.nombre}`,
                imageUrl: `${producto.img}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
                input: 'number',
                inputLabel: `Precio por unidad: $${producto.precio}`,
                inputPlaceholder: 'Cantidad',
                inputAttributes: {
                    min: 0,
                    max: 100,
                    step: 1
                },
                background: "rgb(27, 2, 40)",
                color:"white",
                showCancelButton: true
            });

            if (cantidad > 0) {
                carrito.push({ ...producto, cantidad: parseInt(cantidad) });
            }
        }

        if (carrito.length > 0) {
            let resumen = "Resumen de tu compra:<br>";
            let total = 0;

            carrito.forEach(item => {
                const subtotal = item.precio * item.cantidad;
                total += subtotal;
                resumen += `${item.nombre}: ${item.cantidad} x $${item.precio} = $${subtotal}<br>`;
            });

            resumen += `<br><strong>Total: $${total}</strong>`;

            Swal.fire({
                title: 'Compra completada',
                html: resumen,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No seleccionaste ningún producto.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    });