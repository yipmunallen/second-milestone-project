const score = document.getElementById(`final-score-populated`);
const finalScore = localStorage.getItem(`finalScore`);

console.log(finalScore);

showScore();

function showScore(){
    
    score.innerText = finalScore
}