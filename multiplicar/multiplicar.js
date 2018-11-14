const fs = require('fs'); //paquete nativo de node
var colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    if (!Number(base)) {
        reject(`El valor de la base introducido ${base} no es un numero`);
        return;
    }

    if (!Number(limite)) {
        reject(`El valor del límite introducido ${limite} no es un numero`);
        return;
    }
    for (let index = 0; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index}\n`;
    }
    console.log('==========================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('==========================='.green);
    console.log(data);

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor de la base introducido ${base} no es un numero`);
            return;
        }
        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
                //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}