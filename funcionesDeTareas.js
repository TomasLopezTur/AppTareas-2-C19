const fs = require('fs');

let archTareas = {
    arch:'./dataB/tareas.json',
    leerArch: function(){
        let tareas =fs.readFileSync('./dataB/tareas.json',{encoding: 'utf-8'});
        return JSON.parse(tareas);
    },
    escribirJSON : (arrayTareas)=>{
        let data = JSON.stringify(arrayTareas)
        fs.writeFileSync('./dataB/tareas.json', data ,'utf-8')
    },
    guardarTarea : (tarea)=>{
        let listaTareas = archTareas.leerArch();
        listaTareas.push(tarea);
        archTareas.escribirJSON(listaTareas);
    },
    filtrarEstado : (estado)=>{
        let listaTareas = archTareas.leerArch();
        let tareasFilt = listaTareas.filter((tarea)=> tarea.estado === estado);
        return tareasFilt;
    }
};

module.exports=archTareas;
