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
