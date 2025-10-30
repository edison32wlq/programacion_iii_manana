try{
    console.log(variableNoDeclarada);
}catch(error){
    console.log("mensaje de error : ", error.mensaje);
}

try{
    console.log("Intentando abrir archivo . . . ");
    throw new Error("Archivo No encontrado");
} catch (error){
    console.log("mensaje de error : ", error.mensaje);
} finally {
    console.log('Finalizado intento de abrir archivo');
}