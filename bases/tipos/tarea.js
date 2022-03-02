"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerzas;
    (function (Fuerzas) {
        Fuerzas[Fuerzas["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerzas[Fuerzas["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Fuerzas[Fuerzas["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerzas[Fuerzas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Fuerzas || (Fuerzas = {}));
    const fuerzaFlash = Fuerzas.fuerzaFlash;
    const fuerzaSuperman = Fuerzas.fuerzaSuperman;
    const fuerzaBatman = Fuerzas.fuerzaBatman;
    const fuerzaAcuaman = Fuerzas.fuerzaAcuaman;
    function activarBatisenal() {
        return 'activada';
    }
    function pedirAyuda() {
        console.log('Auxilio!!!');
    }
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=tarea.js.map