//tipos personalizados
(
    ()=>{
        type Heroes = {
            name: string;
            age: number;
            powers: string[];
            getName: () => string;
        }

        let flash: Heroes ={
            name: "Barry",
            age: 23,
            powers: ["Velocidad","tiempo"],
            getName () {
                return this.name;
            }
    }
})()
