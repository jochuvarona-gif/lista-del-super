let lista = ["Sal", "Leche", "Arroz"];

function logItems(array) {
    array.forEach(function(item, index) {
        console.log(index + ": " + item);
    });
}
let comando = prompt("Comando:").toLowerCase();

while (comando !== "salir") {
    if (comando === "nuevo") {
        let item = prompt("¿Qué producto querés agregar?");
        lista.push(item);
    } else if (comando === "listar") {
        logItems(lista);
    } else if (comando === "borrar") {
        let indice = prompt("¿Qué número de producto querés borrar?");
        lista.splice(indice, 1);
        console.log("Producto eliminado");
    }

    comando = prompt("Comando:").toLowerCase();
}
