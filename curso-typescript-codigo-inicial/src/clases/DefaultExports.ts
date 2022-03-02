export interface Power{
    id: number,
    description: string
}
const powers: Power[] = [
    {
        id: 1,
        description: 'Supertraje'
    },
    {
        id: 2,
        description: 'super fuerza'
    }
]
console.log(powers[0]?.description); // el ? valida lo anterior al signo ? y si no existe devuelve undefined
console.log(powers[0]!.description); // el ! le dice a typescript que el valor siempre va llegar y no molesta por validacion de posible nulo


/**
 * forma de exportar por defecto, al hacerlo así no es necesario que al importar se use el mismo nombre EJ:
 * import powwwers from '../..' -  con el nombre cambiado también funciona
 * import powers from '../..' - con el nomrbe que se exporta funciona
 * cuando hay un export defaul y un export como en este archivo se puede importar así.. import powers, { Power } from '../../'
 * */
export default powers;
