(()=>{
    // con never la funcion no puede terminar de manera exitosa
    const abc = (): never =>{
        throw new Error('un never');
    }
    abc();
})();
