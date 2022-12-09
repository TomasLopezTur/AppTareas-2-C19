const { leerArch, guardarTarea, escribirJSON, filtrarEstado} = require('./funcionesDeTareas');

let process = require('process');
let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];
switch (accion){
    case 'listar':
        console.log('\nListado de tareas\n------------------------------------------------------\n');
        let tareas = leerArch();
        if (tareas ===0){
            console.log('La lista de tareas esta vacia.');
            console.log('---------------------------------------------------');
        }else{
            
            tareas.forEach((tarea, index)=>{
                console.log(`${index +1}. ${tarea.titulo} -- estado: ${tarea.estado}`);
            });
        };
        break;

    case 'crear':
        if (typeof titulo === 'undefined'){
            console.log('Debes ingresale un titulo a la tarea creada.');
            return;
        };
        let tarea = {
            titulo,
            estado: 'pendiente',
        };
        guardarTarea(tarea);
        console.log('------------------------------------------------------------------');
        console.log(`La nueva tarea: ${titulo}, en el estado: ${tarea.estado}, fue creada.`);
        console.log('------------------------------------------------------------------');
        break;

    case 'filtrar':
        estado = process.argv[3];
        let filt = filtrarEstado(estado);
        if(estado !== 'terminada' && estado !== 'pendiente' && estado !== 'en progreso'){
            console.log('---------------------------------------------------------------');
            console.log('Los estados a ingresar son: terminada, pendiente, en progreso.')
            console.log('---------------------------------------------------------------');
        }else{
            console.log(`\nTareas ${estado}.`)
            console.log('-----------------------------------------------------');
            filt.forEach((tarea, index)=>{
                console.log(`${index + 1}. titulo: ${tarea.titulo}.`);
                console.log('-----------------------------------------------------');
            });
        };
        
        break;

    case undefined:
        console.log('Atención!!! - Tienes que pasar una acción.')
        console.log('Las acciones disponibles son: listar o crear.\n--------------------------------------')
        break;

    default:
        console.log('--------------------------------------')
        console.log('No entiendo que quieres hacer.');
        console.log('Las acciones disponibles son: listar o crear.\n--------------------------------------')
        
};

