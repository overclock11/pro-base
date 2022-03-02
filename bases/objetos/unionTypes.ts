(()=>{
    type Heroes = {
        name: string;
        age: number;
        powers: string[];
        getName: () => string;
    }

    let otraVariable: (Heroes | string | number) = 'Julian';
})()
