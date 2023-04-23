const CONVERSION_DOLAR = 39684.40;
const CONVERSION_ETHEREUM = 13.5400;

let btcIngresados = prompt("Ingrese la cantidad de bitcoins");
let consultaCambio = prompt("Desea dolares o ethereum");
let eleccionPrimera = "dolares";
let eleccionSegunda = "ethereum";

if (consultaCambio == eleccionPrimera) {
    document.write("Su conversion es " + (CONVERSION_DOLAR * btcIngresados) + " dolares");
} else if (consultaCambio == eleccionSegunda) {
    document.write("Su conversion es " + (CONVERSION_ETHEREUM * btcIngresados) + " ethereum");
}else {
    document.write("No se puede realizar la conversion");
}