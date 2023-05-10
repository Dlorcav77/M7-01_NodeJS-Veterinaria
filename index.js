import { argv } from "node:process";
import { registrar, leer } from "./operaciones.js";

const [operacion, nombre, edad, animal, color, enfermedad] = argv.slice(2);

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad);
}

if(operacion === "leer"){
    leer();
}

// operaciones por linea de comando
// ver las citas : node . leer
// agregar una cita o registro : node . registrar eden "4 anos" perro atigrado desanimado