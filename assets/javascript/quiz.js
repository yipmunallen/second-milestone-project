const progressHeading = document.getElementById(`progress-heading`);
const progressBar = document.getElementById(`progress-bar`);
const progressBarFull = document.getElementById("progress-bar-full");
const timeCount = document.getElementById("timer-count");
const question = document.getElementById(`api-question`);
const answers = Array.from(document.getElementsByClassName(`answers`));

let currentQuestion = {};
let questionCounter = 1;
let startTime = 10;
let acceptingAnswers = false;
let questionList = [];
let score = 0;
let questionIndex = 0;
let counter;

function getQuizData(quizData){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            quizData(JSON.parse(this.responseText));
        }
    }

    xhr.open( "GET" , "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple");
    xhr.send();

}

nextQuestion();

function nextQuestion(){

    getQuizData(function(quizData){

        timeCount.style.color = null;
        startTimer(startTime);
        
        if (questionIndex === 20) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            window.location.href('/end-page.html');
        }

        progressHeading.innerText = `Question ${questionCounter} of 20`;
        progressBarFull.style.width = `${(questionCounter / 20) * 100}%`;

        currentQuestion = quizData.results[questionIndex];

        question.innerHTML = `${currentQuestion.question}`;

        correctAnswer = answers[Math.floor(Math.random()*answers.length)];
        correctAnswer.innerHTML = `${currentQuestion.correct_answer}`;
        
        for( i=j=0 ; j<3 && i < 4 ; i++){
            if(answers[i] == correctAnswer){
            }
            else{
                answers[i].innerHTML = `${currentQuestion.incorrect_answers[j]}`;
                j++;
            }
        };
    })
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.innerText = time;
        time--;
        if(time < 5){
            timeCount.style.color = "red";
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.innerText = "Out of Time!";
            questionIndex++;
            questionCounter++;
            correctAnswer.classList.add("correct-answer");
            setTimeout(() => {
                correctAnswer.classList.remove("correct-answer");
                timeCount.style.color = null;
                nextQuestion();
            }, 1000);
        }
    }

}

// Determine what happens when a correct/incorrect answer is clicked

answers.forEach(function(answer) {
answer.addEventListener("click", clickFunction);
function clickFunction(e) {

        const selectedAnswer = e.target;

        if(selectedAnswer == correctAnswer){
            selectedAnswer.classList.add("correct-answer");
            score++;
        }
        else{
            selectedAnswer.classList.add("incorrect-answer");
        }

        questionIndex++;
        questionCounter++;
        setTimeout(() => {
            selectedAnswer.classList.remove("incorrect-answer");
            selectedAnswer.classList.remove("correct-answer");
            clearInterval(counter);

            nextQuestion();
        }, 1000);

    
}
});
