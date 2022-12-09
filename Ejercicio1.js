//  Crear una aplicación en node.js que permita gestionar un archivo JSON. 

const fs = require('fs')

console.log('iniciamos la aplicación.')
fs.readFile('./DB/data.json',{
    encoding:'utf8', flag:'r'},
    function(err, data) {
        if(err)
        console.log(err);
        else
        console.log('evento1',JSON.parse(data));
    });

    console.log('Finaliza la primer lectura del archivo data.json')
    console.log('iniciamos la lectura del segundo archivo.')

    const data = fs.readFileSync('./BD/data.json',
    {encoding:'utf8', flag:'r'});

    console.log('evento 2', JSON.parse(data));
    console.log('Fin del programa.')

