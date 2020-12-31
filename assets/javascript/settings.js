class Settings{
    constructor(){
        this.category = document.getElementById(`category`);
        this.difficulty = [
            document.getElementById(`easy`),
            document.getElementById(`medium`),
            document.getElementById(`hard`),
        ]
        this.numberofQuestions = document.getElementById(`questions`);
    }
    startQuiz(){

    }
}


export default Settings;