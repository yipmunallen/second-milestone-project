const progressHeading = document.getElementById(`progress-heading`);
const progressBar = document.getElementById(`progress-bar`);
const progressBarFull = document.getElementById("progress-bar-full");
const timeCount = document.getElementById("timer-count");
const question = document.getElementById(`api-question`);
const nextQuestionBtn = document.getElementById(`next-question-btn`);
const answers = Array.from(document.getElementsByClassName(`answers`));

let currentQuestion = {};
let questionCounter = 1;
let startTime = 10;
let questionList = [];
let score = 0;
let questionIndex = 0;
let counter;
let outOfTime = false;
let acceptingAnswers;

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

getQuizData(function(quizData){

    nextQuestion();

    function nextQuestion(){ 
  
        if (questionIndex === 20) {
            localStorage.setItem('finalScore', score);
            //go to the end page
            return window.location.href = '/score.html' ;
        }

        acceptingAnswers = true;
        nextQuestionBtn.style.visibility = 'hidden';
        timeCount.style.color = null;
        startTimer(startTime);

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
        }

    // Timer starts at 10 once nextQuestion() runs
    function startTimer(time){
        counter = setInterval(timer, 1000);
        function timer(){
            timeCount.innerText = time;
            time--;
            // Once timer is under 5, it's color turns red
            if(time < 5){
                timeCount.style.color = "red";
            }
            // Once timer is below 0, show "Out Of Time" , stop accepting answers and show "Next Question" button
            if(time < 0){
                clearInterval(counter);
                timeCount.innerText = "Out of Time!";
                questionIndex++;
                questionCounter++;
                correctAnswer.classList.add("correct-answer");
                nextQuestionBtn.style.visibility = 'visible';
                acceptingAnswers = false;
                nextQuestionBtn.addEventListener("click", goToNextQuestion);
                    function goToNextQuestion(e) {

                    correctAnswer.classList.remove("correct-answer");
                    timeCount.style.color = null;
                    nextQuestion();        
                }
            }
        }

    }

    // Determines what happens when a correct/incorrect answer is clicked

    answers.forEach(function(answer) {
        answer.addEventListener("click", clickFunction);
        function clickFunction(e) {
                if (!acceptingAnswers) return;
                // Stop timer 
                clearInterval(counter);
                // Stop accepting answers
                acceptingAnswers = false;

                const selectedAnswer = e.target;

                // If correct answer has been selected, turn div green and increase score
                if(selectedAnswer == correctAnswer){
                        selectedAnswer.classList.add("correct-answer");
                        score++;
                        console.log(score);
                }
                // If incorrect answer has been selected, turn div red
                else{
                        selectedAnswer.classList.add("incorrect-answer");
                }

                questionIndex++;
                questionCounter++;
                nextQuestionBtn.style.visibility = 'visible';
                acceptingAnswers = false;
                nextQuestionBtn.addEventListener("click", goToNextQuestion);
                    function goToNextQuestion(e) {
                    selectedAnswer.classList.remove("incorrect-answer");
                    selectedAnswer.classList.remove("correct-answer");
                    clearInterval(counter);
                    nextQuestion();    
                }
        }
    });
})
