import {Hero, Hero as SuperHero} from "./clases/Hero";
import * as HeroClases from "./clases/Hero"
import GenericFunctions from "./generics/GenericFunctions";
import {Villian, Heroe} from "./interfaces/";

// importaciones default, as y multiples
const Hero = 123;
console.log('Hola Mundo!');
const ironman = new SuperHero('tony', 32, 1);
const hulk = new HeroClases.Hero('Bruce', 40, 2);

//genericos
const deadpool = {
    name: "Wade Wilson",
    realName: "Wade",
    powerLevel: 0
}
const generics = new GenericFunctions();
// en la T se le puede pasar el tipo de dato
const result = generics.generic<Heroe>("Sirpoquitnio", deadpool);
console.log(result.realName);







