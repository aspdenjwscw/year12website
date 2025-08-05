const questions = [
  {
    question: "What is a simple way to remember when tests, assignments, and projects are due?",
    answers: [
      { text: "Try to remember everything in your head", correct: false },
      { text: "Write them down in a calendar or planner", correct: true },
      { text: "Wait until the day before to check", correct: false },
      { text: "Ask your friends constantly", correct: false }
    ]
  },
  {
    question: "What should you do if a task feels overwhelming?",
    answers: [
      { text: "Ignore the task completely", correct: false },
      { text: "Do everything all at once", correct: false },
      { text: "Ask someone else to do it", correct: false },
      { text: "Break it into smaller steps and do a bit each day", correct: true }
    ]
  },
  {
    question: "Why is making a routine helpful for school work?",
    answers: [
      { text: "It builds a habit and makes it easier to focus", correct: true },
      { text: "It causes more stress", correct: false },
      { text: "It makes studying boring", correct: false },
      { text: "It wastes time", correct: false }
    ]
  },
  {
    question: "What should you do with distractions when studying?",
    answers: [
      { text: "Keep checking them during study", correct: false },
      { text: "Use them as rewards before studying", correct: false },
      { text: "Put them away so you can work quicker", correct: true },
      { text: "Ignore distractions and multitask", correct: false }
    ]
  },
  {
    question: "How long should you work before taking a break?",
    answers: [
      { text: "Work for 1 hour straight without breaks", correct: false },
      { text: "Work for 10 minutes, then take a 30-minute break", correct: false },
      { text: "Work for 25–30 minutes, then take a 5-minute break", correct: true },
      { text: "Never take breaks", correct: false }
    ]
  },
  {
    question: "Why is it better to start a task sooner rather than later?",
    answers: [
      { text: "It doesn’t make a difference", correct: false },
      { text: "It causes more stress", correct: false },
      { text: "It makes the task feel less scary and gives more time to fix problems", correct: true },
      { text: "It wastes time", correct: false }
    ]
  },
  {
    question: "What is a simple breathing exercise to reduce stress?",
    answers: [
      { text: "Hold your breath as long as possible", correct: false },
      { text: "Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds", correct: true },
      { text: "Only breathe through your mouth", correct: false },
      { text: "Breathe quickly and shallowly", correct: false }
    ]
  },
  {
    question: "Why is getting fresh air helpful when stressed?",
    answers: [
      { text: "It makes no difference", correct: false },
      { text: "It distracts you from work", correct: false },
      { text: "It helps clear your mind and relax your body", correct: true },
      { text: "It tires you out more", correct: false }
    ]
  },
  {
    question: "Who should you talk to if you're feeling stressed?",
    answers: [
      { text: "Nobody — keep it all inside", correct: false },
      { text: "Only strangers online", correct: false },
      { text: "A friend, family member, or teacher", correct: true },
      { text: "Ignore your feelings", correct: false }
    ]
  },
  {
    question: "How much sleep should you aim for to help reduce stress?",
    answers: [
      { text: "Sleep isn’t important", correct: false },
      { text: "8–10 hours per night", correct: true },
      { text: "More than 12 hours", correct: false },
      { text: "Less than 5 hours", correct: false }
    ]
  },
  {
    question: "What is a good way to reduce stress with movement?",
    answers: [
      { text: "Avoid moving to save energy", correct: false },
      { text: "Do light exercise like dancing, stretching, or playing sports", correct: true },
      { text: "Only do intense workouts", correct: false },
      { text: "Stay seated all day", correct: false }
    ]
  },
  {
    question: "Why is it better to do one thing at a time?",
    answers: [
      { text: "It feels less stressful and improves focus", correct: true },
      { text: "It makes tasks harder", correct: false },
      { text: "It wastes time", correct: false },
      { text: "It makes no difference", correct: false }
    ]
  },
  {
    question: "Why should you take short breaks while studying?",
    answers: [
      { text: "Breaks make you tired", correct: false },
      { text: "Because breaks waste time", correct: false },
      { text: "To rest your brain and improve focus", correct: true },
      { text: "To get distracted", correct: false }
    ]
  },
  {
    question: "What does being kind to yourself mean during stressful times?",
    answers: [
      { text: "Ignoring problems", correct: false },
      { text: "Accepting that doing your best is enough", correct: true },
      { text: "Being lazy and not trying", correct: false },
      { text: "Comparing yourself to others", correct: false }
    ]
  },
  {
    question: "What is the benefit of writing due dates in a planner?",
    answers: [
      { text: "It causes stress", correct: false },
      { text: "It wastes time", correct: false },
      { text: "You won’t forget anything and can plan ahead", correct: true },
      { text: "It makes tasks harder", correct: false }
    ]
  },
  {
    question: "How can breaking big tasks into smaller parts help you?",
    answers: [
      { text: "Makes the task feel manageable and easier to start", correct: true },
      { text: "Makes tasks more confusing", correct: false },
      { text: "Is a waste of time", correct: false },
      { text: "Causes more stress", correct: false }
    ]
  },
  {
    question: "What should you do with your phone when studying?",
    answers: [
      { text: "Ignore it and multitask", correct: false },
      { text: "Put it away to avoid distractions", correct: true },
      { text: "Keep it next to you for quick checks", correct: false },
      { text: "Use it as a study timer only", correct: false }
    ]
  },
  {
    question: "Why is it helpful to make studying a routine?",
    answers: [
      { text: "It wastes time", correct: false },
      { text: "It builds good habits and makes focusing easier", correct: true },
      { text: "It causes stress", correct: false },
      { text: "It’s boring", correct: false }
    ]
  },
  {
    question: "What’s a good way to handle stress when school feels overwhelming?",
    answers: [
      { text: "Keep it to yourself", correct: false },
      { text: "Talk to someone you trust like a friend or teacher", correct: true },
      { text: "Ignore your feelings", correct: false },
      { text: "Give up completely", correct: false }
    ]
  },
  {
    question: "How can taking deep breaths help when stressed?",
    answers: [
      { text: "It helps your body relax and calms your mind", correct: true },
      { text: "It makes no difference", correct: false },
      { text: "It wastes time", correct: false },
      { text: "It makes you more anxious", correct: false }
    ]
  }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Restart";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerText === "Restart") {
        startQuiz();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
});

startQuiz();


