

class Settings {
  constructor() {
    this.category = document.querySelector('#category');
    this.difficulty = [
      document.querySelector('#easy'),
      document.querySelector('#medium'),
      document.querySelector('#hard'),
    ];
    this.startButton = document.querySelector('#quiz-btn');
    this.startButton.addEventListener('click', this.startQuiz.bind(this));
  }

  startQuiz() {
    try{
      const categoryId = this.category.value;
      console.log(categoryId + "Settings page");
      const difficulty = this.getDifficulty();
      this.goToQuiz();

    }catch(error){
      alert(error);
    }
  }

  goToQuiz() {
    window.location.href="/quiz.html";
  }

  getDifficulty() {
    const chosenDifficulty = this.difficulty.filter(element => element.checked);

    if (chosenDifficulty.length === 1) {
      return chosenDifficulty[0].id;
    } else {
      throw new Error('Please select a difficulty!');
    }
  }
}

new Settings();

export {categoryID, difficulty };