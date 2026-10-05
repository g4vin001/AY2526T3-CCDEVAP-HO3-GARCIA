Math.PI;

let num1, num2, operator, correctAnswer;
const operators = ["*", "+", "-"];
let score = 0;


function checkAnswer(){

    let userAnswer = Number(document.getElementById("answer").value);
    let answer;

    switch (operator) {

        case "+":
            answer = num1 + num2;
            break;

        case "-":
            answer = num1 - num2;
            break;

        case "*":
            answer = num1 * num2;
            break;
    }

    if (userAnswer === answer) {
        score++;
        document.getElementById("score").textContent = score;
        document.getElementById("message").textContent = "Correct!";

        if (score === 5) {
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
            return;
        }

    }
    else {
        document.getElementById("message").textContent =
            "Wrong! Correct answer is " + answer;
    } 

    generateQuestion();
}


function playAgain(){
    score = 0;
    document.getElementById("score").textContent = score; //sources ID 
    document.getElementById("div-questions").style.display = "block"; //become visible
    document.getElementById("div-success").style.display = "none"; //hide success message
    generateQuestion();
}

function generateQuestion(){

    let ans = ""

    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * 3)];

    const equation = `${num1} ${operator} ${num2}`;
    
    console.log(equation);

    /*
    correctAnswer = (num1, operator, num2) => {
    switch (operator) {
    case '+': return ans = num1 + num2;
    case '-': return ans = num1 - num2;
    case '*': return ans = num1 * num2;
    default: return 'Invalid operator';
    }
    

    switch (operator) {
    case '+': 
        return ans = num1 + num2;
    case '-': 
        return ans = num1 - num2;
    case '*': 
        return ans = num1 * num2;
    default: 
        return 'Invalid operator';
    }
    */

    let x = document.getElementById("question");
    x.textContent = equation;

    // return correctAnswer;
}

// generateQuestion();