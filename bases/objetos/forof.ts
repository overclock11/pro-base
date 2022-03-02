(()=>{
    type Avenger = {
        name: string;
        weapon: string;
    }

    let ironman: Avenger = {
        name: "Tony",
        weapon: "Traje"
    }
    let hulk: Avenger = {
        name: "Bruce",
        weapon: "Fuerz"
    }
    let cap: Avenger = {
        name: "Steve",
        weapon: "Fuerza"
    }
    let heroes: Avenger[] =[ironman, hulk, cap];

    // for of itera los elementos de un array
    for (const hero of heroes) {
        console.log(hero.name);
    }
    //for in, itera las propiedades de un objeto
    for (const hulkKey in hulk) {
        console.log(hulkKey);
    }
})()
