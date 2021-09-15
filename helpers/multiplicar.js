const fs= require ('fs');
const colors = require('colors');

const crearTabla = async (base, producto = 10, listar)=>{
    
    const ubicacionNombreArchivo=`./out/tabla-${base}.txt`;
    try {
        let salida='';
        for (let i=1; i<=producto; i++){
            salida += `${base}X${i}=${base*i}\n`;
        }
        if(listar)console.log(colors.rainbow(salida));
        fs.writeFileSync(ubicacionNombreArchivo, salida);
    
        return ubicacionNombreArchivo;
        
    } catch (err) {
        throw err;
    }

           
    
}


module.exports={
    crearTabla
}