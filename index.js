alert("Bienvenido :) \n\n¡Aca vas a poder calcular cuantas tortas vendes al mes! \n\n Vamos!");

class Encargo {
    constructor (fecha, tortas, domicilio)  {
        this.fecha = fecha;
        this.tortas = tortas;
        this.domicilio = domicilio;


    } 
}


const tortasVendidas = [];

function entrada() { 
    const fecha = prompt("Ingrese fecha de la venta");
    const tortas = parseFloat(prompt("Ingrese cantidad de tortas vendidas"));
    const domicilio = prompt("Ingrese domicilio a entregar el pedido");
    alert("Venta registrada")
    return new Encargo (fecha, tortas);
}


//INGRESO - DATOS

const pregunta = prompt("Deseas registrar una nueva venta? (Responder si o no)")
if ( pregunta === "sI" || pregunta === "Si" || pregunta === "SI" || pregunta === "si" )  {
    
    let nuevaVenta = true 
    while (nuevaVenta) {
        
        const diaNuevo = entrada(); 
        
        
        tortasVendidas.push(diaNuevo); 
        
        const pregunta = prompt("Deseas registrar una nueva venta?")
        if (pregunta === "sI" || pregunta === "Si" || pregunta === "SI" || pregunta === "si") { 
            nuevaVenta = true;
        } else { 
            nuevaVenta = false;
            
        }
        
    }
} 

//PROCESAMIENTO - DATOS
let totalTortas = 0;
const ventas = tortasVendidas.map(h => h.tortas) 

for (const i of ventas) { 
    totalTortas = totalTortas + i 
}


//SALIDA  - DATOS 

alert("Este mes has vendido " + totalTortas + " tortas!")


//INGRESO - DATOS
const precioTorta = parseFloat(prompt("Cuanto cobras por torta?"))


//PROCESAMIENTO - DATOS
function calcularTotalMes (horas, precio) { 
    const ganancia = horas * precio;
    return ganancia;
}

//SALIDA - DATOS
alert ("Ganaras $" + calcularTotalMes(totalTortas, precioTorta ))