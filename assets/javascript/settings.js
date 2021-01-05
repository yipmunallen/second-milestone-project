const category = document.querySelector('#category');
const difficulty = [
      document.querySelector('#easy'),
      document.querySelector('#medium'),
      document.querySelector('#hard'),
    ];
const startButton = document.querySelector('#quiz-btn');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    try{
      var categoryId = category.value;
      console.log(categoryId + "Settings page");
      var difficulty = getDifficulty();
      goToQuiz();

    }catch(error){
      alert(error);
    }
  }

function  goToQuiz() {
    window.location.href="/quiz.html";
  }

function  getDifficulty() {
    var chosenDifficulty = difficulty.filter(element => element.checked);

    if (chosenDifficulty.length === 1) {
      return chosenDifficulty[0].id;
    } else {
      throw new Error('Please select a difficulty!');
    }
}

