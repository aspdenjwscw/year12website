const questions = [
    {
        question: "Question 1:",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false } 
        ]
    },
    {
        question: "Question 2:",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Answer 2", correct: false},
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: true } 
        ]
    },
    {
        question: "Question 3:",
        answers: [
            { text: "Answer 1", correct: false },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: true },
            { text: "Answer 4", correct: false } 
        ]
    },
    {
        question: "Question 4:",
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false } 
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = qusetionNo + ". " + currentQuestion.
    question;


    currentQuestionIndex.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();