const studenti = [
    { ime: 'Pero', prosek: 7.1, grad: 'Berovo' },
    { ime: 'Stojko', prosek: 6, grad: 'Kavadarci' },
    { ime: 'Stojna', prosek: 10, grad: 'Veles' },
    { ime: 'Mara', prosek: 5, grad: 'Kichevo' },
    { ime: 'Petka', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Mitre', prosek: 7.5, grad: 'Ohrid' },
    { ime: 'Risto', prosek: 9, grad: 'Strumica' },
    { ime: 'Tosho', prosek: 8.3, grad: 'Gevgelija' },
    { ime: 'Miki', prosek: 7.7, grad: 'Kriva Palanka' },
    { ime: 'Ivan', prosek: 8.5, grad: 'Kumanovo' },
    { ime: 'Ana', prosek: 9.2, grad: 'Bitola' },
    { ime: 'Viktor', prosek: 6.8, grad: 'Tetovo' },
    { ime: 'Elena', prosek: 7.9, grad: 'Prilep' },
    { ime: 'Darko', prosek: 8.0, grad: 'Debar' },
    { ime: 'Jovana', prosek: 9.7, grad: 'Gostivar' },
    { ime: 'Stefan', prosek: 8.1, grad: 'Skopje' },
    { ime: 'Ivana', prosek: 6.0, grad: 'Skopje' },
    { ime: 'Marko', prosek: 7.6, grad: 'Skopje' },
    { ime: 'Filip', prosek: 7.3, grad: 'Kumanovo' },
    { ime: 'Kristina', prosek: 8.8, grad: 'Kumanovo' },
    { ime: 'Aleksandar', prosek: 6.5, grad: 'Kumanovo' }
];

//Studenti od skopje, prosek nad 7, podredeni po ime

const filteredstudenti = studenti.filter((student) => {
    if(student.grad == "Skopje" && student.prosek >= 7){
        return student;
    }
})

function compare(a,b){
    if(a.ime < b.ime){
        return -1;
    }
    if(a.ime > b.ime){
        return 1;
    }
    return 0;
}
filteredstudenti.sort(compare);
console.log(filteredstudenti);


//2. Prosek nad 9 i ne od Skopje

const noviStudenti = studenti.filter((student) => {
    if(student.prosek >= 9 && student.ime != 'Skopje'){
        return student;
    }
}).sort((a,b) => b.prosek - a.prosek);

console.log(noviStudenti);


//3. Prvi 3 studenti so iminja od 5 karakteri podredeni po prosek

//1. Nachin:
const triStudenti = [];
let i = 0;
for(let j = 0; j<studenti.length; j++){
    if(studenti[j].ime.length == 5){
        triStudenti.push(studenti[j]);
        i++;
    }
    if(i == 3){
        break;
    }
}
triStudenti.sort((a,b)=> a.prosek - b.prosek);
console.log(triStudenti);

//2. Nachin so dekonstrukcija:

const threeStudents = studenti.filter(({ime}) => ime.length == 5).slice(0, 3).sort((a,b) => a.prosek - b.prosek);
console.log(threeStudents);



//4.Prosek na site studenti od Kumanovo
let k = 0;
const prosekKumanovo = studenti.filter((student)=>{
    if(student.grad == "Kumanovo"){
        k++;
        return student;
    }
}).reduce((acc, a)=>{
    return acc + a.prosek;
},0)/k;

console.log(prosekKumanovo);

//5. Prosek na prosecite od Skopje i Ohrid
let n = 0;
let zbir = 0;
studenti.forEach(({grad, prosek})=>{
    if(grad == "Skopje" || grad == "Ohrid"){
        n++;
        zbir += prosek;
    }
});
const prosekNaProsecite = zbir/n;
console.log(prosekNaProsecite);


//Goran, prosek 7.3, grad Delcevo

const novStudent = {
    ime: "Goran",
    prosek: 7.3,
    grad: "Delcevo",
};

//1 nachin so spread operator
const updatedStudenti = [...studenti, novStudent];
console.log(updatedStudenti);

//2 nachin bez pravenje nova niza:
// studenti.push(novStudent);
// console.log(studenti);

//7. Da se izbrise prviot student
//1 nachin so dekonstrukcija
const [_,...ostanatiStudenti] = studenti;
console.log(ostanatiStudenti);

//2 nachin so shift()
studenti.shift();
console.log(studenti);

//8. Nov array kaj sto Ohrid i Kumanovo prosekot e za 1 pogolem
//1 nachin so map:
const novArray = studenti.map(({grad, prosek, ...drugo})=>{
    if(grad == "Ohrid" || grad == "Kumanovo"){
        prosek++;
    }
    return {...drugo, prosek, grad};
});
console.log(novArray);

//2 nachin so forEach:

studenti.forEach((student) => {
    if(student.grad == "Ohrid" || student.grad == "Kumanovo"){
        student.prosek++;
    }
})
const newArray = [...studenti];
console.log(newArray);