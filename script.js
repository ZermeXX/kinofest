let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let currentCategory = '';

const questions = {
    "Голлівуд": [
        // Питання для категорії "Голлівуд"
    ],
    "Українське кіно": [
        // Питання для категорії "Українське кіно"
    ],
    "Класика": [
        // Питання для категорії "Класика"
    ],
    "Фантастика": [
        // Питання для категорії "Фантастика"
    ],
    "Комедії": [
        // Питання для категорії "Комедії"
    ]
};

function startQuiz(category) {
    currentCategory = category;
    document.getElementById('category-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('current-category').innerText = `Категорія: ${category}`; // Відображення категорії
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion(category);
    startTimer();
}

function loadQuestion(category) {
    const questionData = questions[category][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(option, questionData.answer);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        loadQuestion(currentCategory);
        resetTimer();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Залишилось часу: ${timeLeft} секунд`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    startTimer();
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `Ви набрали ${score} з ${questions[currentCategory].length} балів!`;
}

function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentCategory);
        resetTimer();
    }
}

function goToMain() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('category-selection').classList.remove('hidden');
    clearInterval(timer);
}
