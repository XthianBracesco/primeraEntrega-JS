let mensaje = "Hola, ingresa tu nombre";
let mensaje1 = "Selecciona una Opción:\n 1- Comprar Productos \n 2- Salir";
const carrito = [];
const productos = [

    {id: 1,
    descripcion: "Smartphone",
    Modelo: "S23 Ultra",
    precio: 5500.0,
    cantidad: 100,
    },

    {
    id: 2,
    descripcion: "Smartphone",
    Modelo: "S23 Plus",
    precio: 4500.0,
    cantidad: 100,
    },

    {
    id: 3,
    descripcion: "Smartphone",
    Modelo: "S23",
    precio: 3500.0,
    cantidad: 10,
    },

    {
    id: 4,
    descripcion: "Smartphone",
    Modelo: "Iphone 14 ProMax",
    precio: 6200.0,
    cantidad: 10,
    },

    {
    id: 5,
    descripcion: "Smartphone",
    Modelo: "iPhone 14 pro",
    precio: 4900.0,
    cantidad: 10,
    },

    {
    id: 6,
    descripcion: "Smartphone",
    Modelo: "iPhone 14",
    precio: 3800.0,
    cantidad: 10,
    },
];

let respuesta;
let nuevoObjeto = [];

class ProductoCarrito {
    constructor(objeto) {
        this.id = objeto.id;
        this.descripcion = objeto.descripcion;
        this.Modelo = objeto.Modelo;
        this.precio = objeto.precio;
        this.cantidad = objeto.cantidad;
    }
}


function validarAlerta(mensaje) {
    let entrada = prompt(mensaje);
    while (entrada == "" || entrada == null) {
        alert("No se cargaron datos");
        entrada = prompt(mensaje);
    }
        return (respuesta = entrada);
}


function menuPrincipal() {
    validarAlerta(mensaje1);
    parseInt(respuesta);

    switch (respuesta) {
    case "1":
        menuDeProductos();
        break;

    case "2":
        salir(false);
        break;

    default:
        alert("opcion mal Ingresada");
        menuPrincipal();
    }
}


function menuDeProductos() {
    let mostrarProductos = "";
    let x = 1;
    productos.forEach((i) => {
    mostrarProductos +=
        i.id +
        " - " +
        i.descripcion +
        " Modelo: " +
        i.Modelo +
        " S/. " +
        i.precio +
        " Cantidad :" +
        i.cantidad +
        "\n";
    x++;
    });
    let menuProductos =
    mostrarProductos + x + " - Finalizar Carrito \n" + (x + 1) + " - Volver";
    validoMenuProductos(menuProductos, x);
}


function validoMenuProductos(menuProductos, x) {
    validarAlerta(menuProductos);
    if (respuesta == x) {
    if (carrito.length == 0) {
        alert("carrito Vacio");
        menuDeProductos();
    } else {
        mostrandoCarrito();
    }
    } else if (respuesta == x + 1) {
    alert("Eliminando datos del Carrito");
    console.log(carrito);
    menuPrincipal();
    } else if (respuesta > 0 && respuesta < productos.length + 1) {
    buscoProductos();
    } else {
    alert("Opcion mal ingresada");
    menuDeProductos();
    }
}


function buscoProductos() {
let cantidad = 1;
    productos.forEach(function (producto) {
    if (producto.id == respuesta) {
        nuevoObjeto = {
        id: producto.id,
        descripcion: producto.descripcion,
        Modelo: producto.Modelo,
        precio: producto.precio,
        cantidad: cantidad,
        };
        return nuevoObjeto;
    }
    });
    agregarProductos(nuevoObjeto);
}


function agregarProductos(objeto) {
    const resultado = carrito.some((elemento) => elemento.id == respuesta);
    if (resultado == false) {
    const nuevoCarrito = new ProductoCarrito(nuevoObjeto);
    carrito.push(nuevoCarrito);
    alert("agregando productos");
    } else {
    carrito.filter((elemento) => {
        if (elemento.id == respuesta) {
        elemento.cantidad++;
        }
    });
    alert("agregando productos");
    }
    menuDeProductos();
}


function mostrandoCarrito() {
    let mostrarCarrito = "";
    let subTotal = 0;
    let Total = 0;
    carrito.forEach((i) => {
    subTotal = i.precio * i.cantidad;
    Total += subTotal;
    mostrarCarrito +=
        i.descripcion +
        " Modelo: " +
        i.Prenda +
        " S/. " +
        i.precio +
        "  Cantidad : " +
        i.cantidad +
        " Sub Total " +
        subTotal +
        "\n";
    });
    alert(mostrarCarrito + "\n Total a Pagar S/. " + Total);
    salir(true);
}


function salir(saludo) {
    if (saludo == false) {
    alert("Gracias Por Visitar Nuestro Sitio Web");
    return;
    } else {
    alert("Gracias Por Tu Compra Te Esperamos Pronto");
    return;
    }
}

validarAlerta(mensaje);
alert("Bienvenido(a) " + respuesta + " a nuestra Web ");
menuPrincipal();
