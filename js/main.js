<<<<<<< HEAD
const baseDeDatos = [ 
    {
        id:1,
        nombre:'Bebederos',
        precio: 500,
        imagen:'media/bebederos1.jpeg',
    },
    {
        id:2,
        nombre:'Peines',
        precio: 250,
        imagen:'media/peines1.jpeg',
    },
    {
        id:3,
        nombre:'Pelotas',
        precio: 250,
        imagen:'media/pelotas1.jpeg',
    },
    {
        id: 4,
        nombre:'Ratita',
        precio: 150,
        imagen:'media/ratita1.jpeg',
    },
    {
        id:5,
        nombre:'Shampoo',
        precio:700,
        imagen:'media/shampoo1.jpeg',
    },
    {
        id:6,
        nombre:'Sogas',
        precio:300,
        imagen:'media/sogas1.jpeg',
    },
]

// Variables
let carrito = [];
let total = 0;
const domProductos = document.querySelector('#items')
const domCarrito = document.querySelector('#carrito')
const domTotal = document.querySelector('#total')
const domVaciarCarrito = document.querySelector('#boton-vaciar')
const mostrarProductos = document.addEventListener('DOMContentLoaded', ()=>{

    renderizarProductos()
})



function renderizarProductos (){

    baseDeDatos.forEach((producto) => {

    const container = document.createElement('div');
    container.classList.add('miCard')
    console.log(container)

    const imagen = document.createElement('img');
    container.classList.add('imagen-producto');
    imagen.setAttribute('src', producto.imagen);
    console.log(imagen)

    const titulo = document.createElement('h1');
    titulo.classList.add('titulo-producto');
    titulo.textContent = producto.nombre;
    console.log(titulo)

    const precio = document.createElement('h1');
    precio.classList.add('precio-producto');
    precio.textContent = '$' + producto.precio;

    const btnAgregar = document.createElement('button');
    btnAgregar.classList.add('botonAgregar');
    btnAgregar.textContent = "¡LO QUIERO!";
    btnAgregar.onclick = () => {

        agregarAlCarrito(producto.id)
    }

    

    container.appendChild(imagen);
    container.appendChild(titulo);
    container.appendChild(precio);
    container.appendChild(btnAgregar);
    domProductos.appendChild(container);
    })
}

function agregarAlCarrito (id) { 

    const misProductos = baseDeDatos.find ((producto) => { 

            return producto.id === id;

    });

    carrito.push(misProductos);
    renderizarCarrito(carrito);
    calcularTotal();
   
}

function renderizarCarrito () {
    
    domCarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];


        carritoSinDuplicados.forEach((item) => {
            
               const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            
                return itemId === item ? total += 1 : total;
            }, 0);
            
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem.nombre} - ${miItem.precio}$`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.onclick = ( ) =>{
                borrarItemCarrito()   
            };

            miNodo.appendChild(miBoton);
            domCarrito.appendChild(miNodo);
        });
    }   

        function borrarItemCarrito(evento) {

            const id = evento.target.dataset.item;
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            renderizarCarrito();
            calcularTotal();
        }

        function calcularTotal() {
            total = 0;
            carrito.forEach((item) => {
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                total = total + miItem.precio;
            });
            domTotal.textContent = total.toFixed(2);
        }

        function vaciarCarrito() {

            carrito = [];

            renderizarCarrito();
            calcularTotal();


    
        }

        domVaciarCarrito.addEventListener('click', vaciarCarrito);

        renderizarProductos();
        calcularTotal();
        renderizarCarrito();
        borrarItemCarrito(evento)
           



=======
const productos = [

    {
        id:1,
        name: "Pelotas",
        precio:250, 
        img: 'media/pelotas1.jpeg',
    },
    {
        id:2,
        name: "Ratitas",
        precio:150, 
        img: 'media/ratita1.jpeg',
    },
    {
        id:3,
        name: "Bebederos",
        precio:350, 
        img: 'media/bebederos1.jpeg',
    },
    {
        id:4,
        name: "Peines",
        precio:250, 
        img: 'media/peines1.jpeg',
    },
    {
        id:5,
        name: "Shampoo",
        precio:600, 
        img: 'media/shampoo1.jpeg',
    },
    {
        id:6,
        name: "Sogas",
        precio:500, 
        img: 'media/sogas1.jpeg',
    }
]
    let productosFav =  [];
    const contenedorProductos = document.querySelector(".contenedor-productos");
    const contenedorFavoritos = document.querySelector(".listado-favoritos")

    document.addEventListener('DOMContentLoaded', () => {
        mostrarProductos();
    })
    
    function mostrarProductos () {
    
        productos.forEach ((Producto) => {
    
            const div = document.createElement('div');
            div.classList.add('card');
    
            const imagen = document.createElement('img');
            imagen.src = Producto.img;
            imagen.classList.add('imagen-producto');
    
            const titulo = document.createElement('h2');
            titulo.classList.add('titulo-productos');
            titulo.textContent = Producto.name;

            const precio = document.createElement('h2');
            precio.classList.add('precio-productos');
            precio.textContent = Producto.precio;

            const botonAgregar = document.createElement('button');
            botonAgregar.classList.add('btn-favorito');
            botonAgregar.textContent = "¡LO QUIERO!";
            botonAgregar.onclick  = () => {
                agregarAFavorito(Producto.id)
            };
    
            div.appendChild(imagen);
            div.appendChild(titulo);
            div.appendChild(precio)
            div.appendChild(botonAgregar);
    
            contenedorProductos.appendChild(div);
        })
    }

    
    function agregarAFavorito(id){
        const productoFav = productos.find((Producto) => {
            return Producto.id === id
            console.log(productoFav)
        })
        productosFav.push(productoFav);
        mostrarProductosFav (productosFav);
        console.log(productosFav)
    }
    
    function mostrarProductosFav(arreglo) {

        limpiarHTML();

            arreglo.forEach(Producto =>{

            contenedorFavoritos.innerHTML += `
                <div>
                <h2> ${Producto.name} ${Producto.precio}</h2>
                </div>
            `
        })

        
    }
    function limpiarHTML (){
        contenedorFavoritos.innerHTML = "";
    }
>>>>>>> 59e55bcf65e141fea8993df93dfe5b3938b0a52c
