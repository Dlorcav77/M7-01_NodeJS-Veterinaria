import fs from "node:fs/promises";

export const registrar = async(nombre, edad, animal, color, enfermedad) =>{
    try {
        const add = JSON.parse(await fs.readFile("citas.json"));
        const ad = {nombre, edad, animal, color, enfermedad}
        add.push(ad);
        await fs.writeFile("citas.json", JSON.stringify(add))
        console.log("se guardo la cita");
    } catch (error) {
        console.log(error);
    }
}

export const leer = async () =>{
    try {
        const read = JSON.parse(await fs.readFile("citas.json"));
        console.log(read);
    } catch (error) {
        console.log(error);
    }
}