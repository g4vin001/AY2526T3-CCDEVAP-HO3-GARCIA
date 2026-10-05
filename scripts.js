Math.PI;

let num1, num2, operator, correctAnswer;
const operators = ["*", "+", "-"];
let score = 0;

function checkAnswer(){

}

function playAgain(){

}

function generateQuestion(){

    let ans = ""

    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * 3)];

    const equation = `${num1} ${operator} ${num2}`;
    
    console.log(equation);

    correctAnswer = (num1, operator, num2) => {
    switch (operator) {
    case '+': return ans = num1 + num2;
    case '-': return ans = num1 - num2;
    case '*': return ans = num1 * num2;
    default: return 'Invalid operator';
    }

    };
    let x = document.getElementById("question");
    x = equation;

    // return correctAnswer;
}

// generateQuestion();