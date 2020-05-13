(function quizeGame() {
    var questionList = [];
var score = 0;

var question = function(question, correctAns, op1, op2, op3) {
    this.question = question;
    this.options = [op1, op2, op3];
    this.correctAns = correctAns;
}

function addQuestion (question) {
    questionList.push(question)
}

addQuestion(new question("How are you?","Fine", "Fine", "Not fine", "can\'t say"));
addQuestion(new question("Who was First Lady Programmer ?","Lady ada agasta", "Albert Einstein", "Lady ada agasta", "Marko Polo"));
addQuestion(new question("Who is the CEO of apple ? ", "Tim Cook", "Steve Jobs", "Bill Gates", "Tim Cook"));
addQuestion(new question("What is the height of mt.Everest ? ", "8848 metres", "7848 metres", "8848 metres", "9989 metres"));
addQuestion(new question("Who is the king of jungle ? ", "Lion", "Tiger", "Lion", "Monkey"));

function playGame() { 
    var counter = 0;
    while(true) {
        displayQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        console.log(displayQuestion.question);
        console.log(`Options are : 
                    \n 1: ${displayQuestion.options[0]} 
                    \n 2: ${displayQuestion.options[1]} 
                    \n 3: ${displayQuestion.options[2]}`);
        console.log("Current Score : " + score + "\n\n");
        var answer = prompt("Enter the correct option ? \n     or \n exit to end game.")
        if (answer === "exit") {
            break;
        }
        else{
            counter += 1;
            if(displayQuestion.options[answer-1] === displayQuestion.correctAns){
                console.log("Your answer is correct . :-)")
                score += 1;
            }
            else{
                console.log("Your answer is incorrect. :-(");
            }
        }
    }
    console.log("Thank you");
    console.log("your Final score is " + score + " out of " + counter + "\n\n"); 
};
playGame();
})();