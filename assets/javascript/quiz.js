const progressHeading = document.getElementById(`progress-heading`);
const progressBar = document.getElementById(`progress-bar`);
const progressBarFull = document.getElementById("progress-bar-full");
const timer = document.getElementById("timer-count");
const question = document.getElementById(`api-question`);
const answers = Array.from(document.getElementsByClassName(`answers`));

let currentQuestion = {};
let questionCounter = 0;
let startTime = 10;
let acceptingAnswers = false;
let questionList = [];

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

function printDataToConsole(data){
    console.log(data);
}

getQuizData( printDataToConsole);

getQuizData(function(quizData){

    questionIndex = 0;
    currentQuestion = quizData.results[questionIndex];
    
    getQuestion();
    getAnswers();
})

function getQuestion(){

    question.innerHTML = `${currentQuestion.question}`;
}

function getAnswers(){

    correctAnswer = answers[Math.floor(Math.random()*answers.length)];
    console.log(correctAnswer);
    correctAnswer.innerHTML = `${currentQuestion.correct_answer}`;

    var answerOptions = new Array();
 
    for( i=j=0 ; j<3 && i < 4 ; i++){
        if(answers[i] == correctAnswer){
            console.log(answers[i]);
            var correctAnswerEntry = new Array();
            correctAnswerEntry = [ currentQuestion.correct_answer , "Correct" ];
            answerOptions.push(correctAnswerEntry);
            acceptingAnswers = true;
        }
        else{
            answers[i].innerHTML = `${currentQuestion.incorrect_answers[j]}`;
            console.log(answers[i]);
            var incorrectAnswerEntry = new Array();
            incorrectAnswerEntry = [ currentQuestion.incorrect_answers[j] , "Incorrect" ];
            answerOptions.push(incorrectAnswerEntry);
            j++;
        }
    };

    console.log(answerOptions);
}


answers.forEach((answersOptions) => {
    answersOptions.addEventListener('click', function (e) {


        const selectedChoice = e.target;
        selectedChoice.classList.add("incorrect-answer");

    });
});