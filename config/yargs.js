const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer',{
                   descripcion: {
                     demand:true,
                     alias: 'd'
                   }
                })
                .command('actualizar', 'Actualiza el estado completado', {
                  descripcion: {
                    demand:true,
                    alias: 'd'
                  },
                  completado: {
                      default: true,
                      alias: 'c',
                      desc: 'Marca como completado o pendiente'
                  }
                })
                .command('borrar', 'Borra un registro del archivo', {
                   descripcion: {
                     demand: true,
                     alias: 'd'
                   }
                })
                .help()
                .argv;

module.exports = {
  argv
}
