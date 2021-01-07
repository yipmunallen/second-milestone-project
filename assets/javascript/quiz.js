/* Used https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript/blob/master/11.%20Fetch%20API%20Questions%20from%20Open%20Trivia%20API/game.js 
 as reference when writing this code */

const progressHeading = document.getElementById(`progress-heading`);
const progressBar = document.getElementById(`progress-bar`);
const progressBarFull = document.getElementById("progress-bar-full");
const timeCount = document.getElementById("timer-count");
const question = document.getElementById(`api-question`);
const nextQuestionBtn = document.getElementById(`next-question-btn`);
const answers = Array.from(document.getElementsByClassName(`answers`));
const categoryId = localStorage.getItem(`categoryId`);
const difficulty = localStorage.getItem(`difficulty`);

let currentQuestion = {};
let questionCounter = 1;
let startTime = 10;
let score = 0;
let questionIndex = 0;
let counter;
let acceptingAnswers;
let enableNextQuestionBtn;

function getQuizData(quizData){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            quizData(JSON.parse(this.responseText));
        }
    };

    const url = `https://opentdb.com/api.php?amount=20&category=${categoryId}&difficulty=${difficulty}&type=multiple`;

    xhr.open( "GET" , url);
    xhr.send();
}

getQuizData(function(quizData){

    nextQuestion();

    function nextQuestion(){ 
  
        if (questionIndex === 20) {
            localStorage.setItem('finalScore', score);
            return window.location.href = 'score.html' ;
        }

        nextQuestionBtn.style.visibility = 'hidden';
        timeCount.style.color = null;
        startTimer(startTime);
        acceptingAnswers = true;

        // Updates the progress bar as question counter increases
        progressHeading.innerText = `Question ${questionCounter} of 20`;
        progressBarFull.style.width = `${(questionCounter / 20) * 100}%`;

        // Takes the next question from the API
        currentQuestion = quizData.results[questionIndex];
        question.innerHTML = `${currentQuestion.question}`;

        // Assigns the correct answer to a random choice
        correctAnswer = answers[Math.floor(Math.random()*answers.length)];
        correctAnswer.innerHTML = `${currentQuestion.correct_answer}`;

        // Assigns the incorrect answers to remaining choices
        for( i=j=0 ; j<3 && i < 4 ; i++){
            if(answers[i] == correctAnswer){
            }
            else{
                answers[i].innerHTML = `${currentQuestion.incorrect_answers[j]}`;
                j++;
            }
        }
    }

    // Timer starts at 10 once nextQuestion() runs
    function startTimer(time){
        counter = setInterval(timer, 1000);
        function timer(){
            timeCount.innerText = time;
            time--;
            // Once timer is under 5, it's color turns red
            if(time < 5 && time > 0 || time === 0){
                timeCount.style.color = "red";
            }
            else if(time < 0){
                // No longer accept answers
                acceptingAnswers = false;
                clearInterval(counter);
                timeCount.innerText = "Out of Time!";
                questionIndex++;
                questionCounter++;
                correctAnswer.classList.add("correct-answer");
                nextQuestionBtn.style.visibility = 'visible';
                enableNextQuestionBtn = true;
                nextQuestionBtn.addEventListener("click", goToNextQuestionTimeOut);
            }
        }

    }

    function goToNextQuestionTimeOut(e) {
        if(enableNextQuestionBtn === true){  
            // Button can only be clicked once so nextQuestion() isn't run several times
            enableNextQuestionBtn = false;              
            correctAnswer.classList.remove("correct-answer");
            timeCount.style.color = null;
            nextQuestion();      
        }  
    }

    // Determines what happens when a correct/incorrect answer is clicked
    answers.forEach(function(answer) {
        answer.addEventListener("click", clickFunction);
        function clickFunction(e) {

            const selectedAnswer = e.target;

            function goToNextQuestion(e) {
                if(enableNextQuestionBtn === true){  
                    enableNextQuestionBtn = false;  
                    
                    correctAnswer.classList.remove("correct-answer");
                    nextQuestion();    
                }
            selectedAnswer.classList.remove("incorrect-answer");
            selectedAnswer.classList.remove("correct-answer"); 
            }

            if(acceptingAnswers === true){
                // Stop timer 
                clearInterval(counter);
                // Stop accepting answers
                acceptingAnswers = false;

                const selectedAnswer = e.target;

                // If correct answer has been selected, turn answer green and increase score
                if(selectedAnswer == correctAnswer){
                        selectedAnswer.classList.add("correct-answer");
                        score++;
                }
                // If incorrect answer has been selected, turn answer red and correct answer green
                else{
                        selectedAnswer.classList.add("incorrect-answer");
                        correctAnswer.classList.add("correct-answer");
                }
                questionIndex++;
                questionCounter++;
                nextQuestionBtn.style.visibility = 'visible';
                enableNextQuestionBtn = true;
                nextQuestionBtn.addEventListener("click", goToNextQuestion);
            }
        }
    });
});
