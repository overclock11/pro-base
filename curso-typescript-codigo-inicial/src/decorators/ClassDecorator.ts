// se ejecuta cuando se transpila el código
function printToConsole (constructor: Function) {
    console.log(constructor);
}

// decorador fábrica, los que retornan una funcion
const factoryDecorator = (printConstructor = false) => {
    if(printConstructor){
        return printToConsole;
    } else {
        return ()=>{}
    }
}

const blockPrototype = (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
//---------------------------------------- los decoradores anteriores son para clases

/**
 * Decoradores para metodos
 */

function checkValid (){
    return function (target: any, property: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        // para obtener los parametros que llegan a la funcion decorada al hacer descriptor.value = a funcion a esa funcioon le llegna los parametros
        descriptor.value = (pokemonId: number) => {
            if(pokemonId<1 || pokemonId > 800) {
                console.log('el id no es valido');
            } else {
                originalMethod(pokemonId);
            }
        }
        console.log(target, property, descriptor);
    }
}
//-----------------------

/**
 * decoradores sobre propiedades
 */

function readOnly (isWritable: boolean = true): Function {
    //el descriptor solo se recibe al decorar metodos
    return function (target: any, property: string,) {
        const descriptor: PropertyDescriptor = {
            get(){
                return 'getter';
            },
            set(this, val) {

            }
        }
    }
}

//----------------------------------
@blockPrototype
@factoryDecorator(true)
export class ClassDecorators {

    @readOnly()
    public api = 'https://mercadopago.com.co';

    constructor(public name: string) {
    }

    @checkValid()
    savePokemonToDB (id: number){
        console.log('fui a la base y volvi',id);
    }
}
