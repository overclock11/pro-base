(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    const existe: boolean = false;

    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];

    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

    //Enumeraciones
    enum Fuerzas {
        fuerzaFlash = 5,
        fuerzaSuperman = 100,
        fuerzaBatman = 1,
        fuerzaAcuaman = 0
    }
    const fuerzaFlash = Fuerzas.fuerzaFlash;
    const fuerzaSuperman = Fuerzas.fuerzaSuperman;
    const fuerzaBatman = Fuerzas.fuerzaBatman;
    const fuerzaAcuaman = Fuerzas.fuerzaAcuaman;

    // Retorno de funciones
    function activarBatisenal(): string{
        return 'activada';
    }

    function pedirAyuda(): void{
        console.log('Auxilio!!!');
    }
    enum enumeracion {
        a=10,
        b,
        c=9,
        d
    }
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );


})()

