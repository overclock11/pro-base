// T se usa para definir un tipo generico pero puede ser otra letra A,B,C.. es como la i en los ciclos
class GenericFunctions {

    generic<T>(nombre: string, argument: T): T {
        return argument;
    }
    //para react, fuera de una clase
/*    const genericArrowFunction = <T>(argument: T) => {

    }*/
}
export default GenericFunctions;
