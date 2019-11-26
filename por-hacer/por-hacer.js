const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar la tarea', err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}
let crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else { return false; }

}
module.exports = {
    crear,
    getListado,
    actualizar
}