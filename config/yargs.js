const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'status de la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('listar', 'Listar las tareas por hacer')
    .command('actualizar', 'Actualizar estado de tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borrar tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}