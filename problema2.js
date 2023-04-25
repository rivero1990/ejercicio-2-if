const CONVERSION_DOLAR = 39684.40;
const CONVERSION_ETHEREUM = 13.5400;
const CANT_BTC_DEF = 0;

let btcIngresados = prompt("Ingrese la cantidad de bitcoins");
let consultaCambio = prompt("Desea dolares o ethereum");
let eleccionPrimera = "dolares";
let eleccionSegunda = "ethereum";

if ((consultaCambio == eleccionPrimera) && (btcIngresados > CANT_BTC_DEF)) {
    document.write("Su conversion es " + (CONVERSION_DOLAR * btcIngresados) + " dolares");
} else if ((consultaCambio == eleccionSegunda) && (btcIngresados > CANT_BTC_DEF)) {
    document.write("Su conversion es " + (CONVERSION_ETHEREUM * btcIngresados) + " ethereum");
} 

else {
    document.write("Numero de bitcoins o moneda a cambiar invalido : intente nuevamente");
}