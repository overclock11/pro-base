/**
 * obliga a las clases que lo heredan a implementar los metodos abstractos
 * A diferencia de la interfaz puede definir metodos que no son abstractos (agrega funcionalidad)y heredarlos a las clases
 * puede heredar de clases y la interfaz no
 * hereda de una sola clase, las interfaces pueden extender de varias
 */
abstract class Vehiculo {
    constructor(marca: string, paisOrigen:string) {
    }
    getLlantas(){
        return 'cuatro';
    }
    abstract getColor(): string;
}

class Mazda extends Vehiculo{
    constructor() {
        super('Mazda','POlonia');
    }
    getPuertas(){
        return 'dos puertas';
    }
    getColor(): string {
        return "verde";
    }
    getLlantas(): string {
        return super.getLlantas();
    }
}
