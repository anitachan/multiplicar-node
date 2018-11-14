//requireds
//const fs = require('fs'); //paquete nativo de node
//const fs = require('xpress'); //paquete que se installa 
//const fs = require('./fs'); //paquete hecho por nosotros

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];



switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log(argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(`Archivo creado: ${ colors.green(archivo)} `)
        ).catch(
            e => console.log(e)
        );
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(argv);
//let base = '2';

//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log('Limite', argv.limite);