
function validar(){
    if (document.getElementById("fila").value < 1 || document.getElementById("fila").value > 8 || document.getElementById("columna").value < 1 || document.getElementById("columna").value > 8 ){
        alert("Fila o columna fuera de rango");
        return false;
    }

}

const movimientos = [
    [2, 1], [1, 2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],
    [1, -2], [2, -1]
];

let movimientosValidos = [];

for (const [x, y] of movimientos) {
    const nuevaFila = fila + x;
    const nuevaColumna = columna + y;

    if (nuevaFila >= 1 && nuevaFila <= 8 && nuevaColumna >= 1 && nuevaColumna <= 8) {
        movimientosValidos.push([$,{ nuevaFila }, $,{ nuevaColumna }]);
    }
}

if (movimientosValidos.length === 0) {
    resultadoDiv.innerHTML = "El caballo no puede moverse desde esta posición.";
} else {
    resultadoDiv.innerHTML = El caballo puede saltar a: $,{movimientosValidos.join("<br>")};
}
    