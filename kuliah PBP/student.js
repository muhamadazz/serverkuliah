let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let studentWithHighestScore = studentsScore.reduce((prev, current) => (prev.score > current.score) ? prev : current);
console.log("The student with the highest score is " + studentWithHighestScore.name + " with a score of  " + studentWithHighestScore.score);