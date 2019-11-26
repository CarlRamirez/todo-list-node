const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'status de la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', opts)
    .command('listar', 'Listar las tareas por hacer')
    .command('actualizar', 'Actualizar estado de tarea por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}