// patron singleton en TS
class Apocalipsis {
    static apocalipsisInstance: Apocalipsis;
    private constructor(public name: string) {
    }

    static getApocalipsis(): Apocalipsis {
        if(Apocalipsis.apocalipsisInstance) {
            Apocalipsis.apocalipsisInstance = new Apocalipsis('Apocalipsis');
        }
        return Apocalipsis.apocalipsisInstance;
    }
}

