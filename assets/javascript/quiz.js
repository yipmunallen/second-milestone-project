


const progressHeading = document.getElementById(`progress-heading`);
const progressBar = document.getElementById(`progress-bar`);
const progressBarFull = document.getElementById("progress-bar-full");
const timer = document.getElementById("timer-count");
const question = document.getElementById(`api-question`);
const answers = Array.from(document.getElementsByClassName(`answers`));

let currentQuestion = {};
let questionCounter = 0;
let startTime = 10;
let acceptingAnswers = true;
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

    //Get question
getQuizData(function(quizData){

    questionIndex = 0;
    currentQuestion = quizData.results[questionIndex];

    question.innerHTML = `${currentQuestion.question}`;

    correctAnswer = answers[Math.floor(Math.random()*answers.length)];
    console.log(correctAnswer);
    correctAnswer.innerHTML = `${currentQuestion.correct_answer}`;

    
    for(i=0 ; i<4 ; i++){
        for( j=0 ; j<3 ; j++){
            if(answers[i] == correctAnswer){

                console.log("here");
            }
            else{
                    console.log("J is" + j);
                    console.log("I is" + i);
                    answers[i].innerHTML = `${currentQuestion.incorrect_answers[j]}`;
                                console.log("here2");
 
            }
        }
    };

})

