let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let currentCategory = '';

const questions = {
    "Голлівуд": [
        {
            question: "Хто зняв фільм 'Тітаннік'?",
            options: ["Джеймс Кемерон", "Стівен Спілберг", "Крістофер Нолан"],
            answer: "Джеймс Кемерон"
        },
        {
            question: "У якому році вийшов фільм 'Матриця'?",
            options: ["1999", "2001", "2003"],
            answer: "1999"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Форрест Гамп'?",
            options: ["Том Генкс", "Бред Пітт", "Леонардо ДіКапріо"],
            answer: "Том Генкс"
        },
        {
            question: "Який фільм отримав Оскар за найкращий фільм у 2020 році?",
            options: ["Паразити", "1917", "Джокер"],
            answer: "Паразити"
        },
        {
            question: "Хто режисер фільму 'Аватар'?",
            options: ["Джеймс Кемерон", "Пітер Джексон", "Девід Фінчер"],
            answer: "Джеймс Кемерон"
        },
        {
            question: "Хто зіграв Джокера у фільмі 'Темний лицар'?",
            options: ["Хіт Леджер", "Хоакін Фенікс", "Джек Ніколсон"],
            answer: "Хіт Леджер"
        },
        {
            question: "Який фільм розповідає про подорож до центру Землі?",
            options: ["Інтерстеллар", "Назад у майбутнє", "Подорож до центру Землі"],
            answer: "Подорож до центру Землі"
        },
        {
            question: "Хто зняв фільм 'Володар перснів'?",
            options: ["Пітер Джексон", "Джеймс Кемерон", "Крістофер Нолан"],
            answer: "Пітер Джексон"
        },
        {
            question: "У якому році вийшов фільм 'Пірати Карибського моря'?",
            options: ["2003", "2005", "2007"],
            answer: "2003"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Гра престолів'?",
            options: ["Кіт Гарінгтон", "Пітер Дінклейдж", "Емілія Кларк"],
            answer: "Кіт Гарінгтон"
        }
    ],
    "Українське кіно": [
        {
            question: "Хто зняв фільм 'Тіні забутих предків'?",
            options: ["Сергій Параджанов", "Іван Миколайчук", "Олексій Герман"],
            answer: "Сергій Параджанов"
        },
        {
            question: "Який фільм зняв Олег Сенцов?",
            options: ["Гамер", "Рай", "Земля"],
            answer: "Гамер"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Помаранчеве небо'?",
            options: ["Олег Примогенов", "Олександр Скічко", "Олег Маслюк"],
            answer: "Олег Примогенов"
        },
        {
            question: "Який фільм отримав нагороду на Каннському кінофестивалі?",
            options: ["Земля", "Плем'я", "Майдан"],
            answer: "Плем'я"
        },
        {
            question: "Хто режисер фільму 'Мої думки тихі'?",
            options: ["Антоніо Лукіч", "Олег Сенцов", "Ірина Цілик"],
            answer: "Антоніо Лукіч"
        },
        {
            question: "Який фільм розповідає про події на Майдані?",
            options: ["Зимова війна", "Майдан", "Революція гідності"],
            answer: "Майдан"
        },
        {
            question: "Хто зняв фільм 'Земля'?",
            options: ["Олександр Довженко", "Сергій Параджанов", "Ірина Цілик"],
            answer: "Олександр Довженко"
        },
        {
            question: "Який фільм розповідає про життя Івана Франка?",
            options: ["Іван Сила", "Франко", "Тіні забутих предків"],
            answer: "Франко"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Плем’я'?",
            options: ["Григорій Фесенко", "Олег Маслюк", "Олександр Скічко"],
            answer: "Григорій Фесенко"
        },
        {
            question: "Який фільм розповідає про життя Тараса Шевченка?",
            options: ["Тарас. Повернення", "Шевченко. Сповідь", "Тіні забутих предків"],
            answer: "Тарас. Повернення"
        }
    ],
    "Класика": [
        {
            question: "Хто зняв фільм 'Громадянин Кейн'?",
            options: ["Орсон Веллс", "Альфред Хічкок", "Френсіс Форд Коппола"],
            answer: "Орсон Веллс"
        },
        {
            question: "У якому році вийшов фільм 'Касабланка'?",
            options: ["1942", "1945", "1950"],
            answer: "1942"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Розенкранц і Гільденстерн мертві'?",
            options: ["Гарі Олдман", "Тім Рот", "Річард Дрейфус"],
            answer: "Гарі Олдман"
        },
        {
            question: "Який фільм вважається першим звуковим фільмом?",
            options: ["Співак джазу", "Метрополіс", "Народження нації"],
            answer: "Співак джазу"
        },
        {
            question: "Хто режисер фільму 'Сім самураїв'?",
            options: ["Акіра Куросава", "Ясудзіро Одзу", "Хаяо Міядзакі"],
            answer: "Акіра Куросава"
        },
        {
            question: "Який фільм вважається першим кольоровим фільмом?",
            options: ["Чарівник країни Оз", "Громадянин Кейн", "Касабланка"],
            answer: "Чарівник країни Оз"
        },
        {
            question: "Хто зняв фільм 'Психо'?",
            options: ["Альфред Хічкок", "Орсон Веллс", "Стівен Спілберг"],
            answer: "Альфред Хічкок"
        },
        {
            question: "У якому році вийшов фільм 'Великий диктатор'?",
            options: ["1940", "1945", "1950"],
            answer: "1940"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Лоуренс Аравійський'?",
            options: ["Пітер О'Тул", "Альберт Фінні", "Річард Бертон"],
            answer: "Пітер О'Тул"
        },
        {
            question: "Який фільм вважається найкращим у жанрі нуар?",
            options: ["Мальтійський сокіл", "Подвійна страховка", "Лора"],
            answer: "Мальтійський сокіл"
        }
    ],
    "Фантастика": [
        {
            question: "Хто зняв фільм 'Інтерстеллар'?",
            options: ["Крістофер Нолан", "Стівен Спілберг", "Джеймс Кемерон"],
            answer: "Крістофер Нолан"
        },
        {
            question: "У якому році вийшов фільм 'Матриця'?",
            options: ["1999", "2001", "2003"],
            answer: "1999"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Термінатор'?",
            options: ["Арнольд Шварценеггер", "Сільвестр Сталлоне", "Брюс Вілліс"],
            answer: "Арнольд Шварценеггер"
        },
        {
            question: "Який фільм розповідає про подорож до центру Землі?",
            options: ["Інтерстеллар", "Назад у майбутнє", "Подорож до центру Землі"],
            answer: "Подорож до центру Землі"
        },
        {
            question: "Хто зняв фільм 'Чужий'?",
            options: ["Рідлі Скотт", "Джеймс Кемерон", "Стівен Спілберг"],
            answer: "Рідлі Скотт"
        },
        {
            question: "У якому році вийшов фільм 'Зоряні війни: Нова надія'?",
            options: ["1977", "1980", "1983"],
            answer: "1977"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Блейд Ранер'?",
            options: ["Гаррісон Форд", "Рутгер Гауер", "Шон Янг"],
            answer: "Гаррісон Форд"
        },
        {
            question: "Який фільм розповідає про боротьбу з роботами-вбивцями?",
            options: ["Термінатор", "Матриця", "Робот на ім'я Чаппі"],
            answer: "Термінатор"
        },
        {
            question: "Хто зняв фільм 'Гравітація'?",
            options: ["Альфонсо Куарон", "Крістофер Нолан", "Джеймс Кемерон"],
            answer: "Альфонсо Куарон"
        },
        {
            question: "Який фільм розповідає про подорож на Марс?",
            options: ["Марсіанин", "Інтерстеллар", "Гравітація"],
            answer: "Марсіанин"
        }
    ],
    "Комедії": [
        {
            question: "Хто зняв фільм 'Однокласники'?",
            options: ["Олександр Сірік", "Олег Борщевський", "Ірина Цілик"],
            answer: "Олександр Сірік"
        },
        {
            question: "У якому році вийшов фільм 'Іван Васильович змінює професію'?",
            options: ["1973", "1975", "1977"],
            answer: "1973"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Джентельмени удачі'?",
            options: ["Євген Леонов", "Георгій Віцин", "Савелій Крамаров"],
            answer: "Євген Леонов"
        },
        {
            question: "Який фільм розповідає про пригоди Шурика?",
            options: ["Операція 'И'", "Кавказька полонянка", "Брильянтова рука"],
            answer: "Операція 'И'"
        },
        {
            question: "Хто зняв фільм 'Брильянтова рука'?",
            options: ["Леонід Гайдай", "Ельдар Рязанов", "Георгій Данелія"],
            answer: "Леонід Гайдай"
        },
        {
            question: "У якому році вийшов фільм 'Службовий роман'?",
            options: ["1977", "1979", "1981"],
            answer: "1977"
        },
        {
            question: "Хто зіграв головну роль у фільмі 'Іронія долі, або З легким паром!'?",
            options: ["Андрій Мягков", "Олег Басилашвілі", "Євген Леонов"],
            answer: "Андрій Мягков"
        },
        {
            question: "Який фільм розповідає про пригоди Івана Бровкіна?",
            options: ["Іван Бровкін на цілині", "Іван Бровкін", "Іван Бровкін у космосі"],
            answer: "Іван Бровкін"
        },
        {
            question: "Хто зняв фільм 'Діамантова рука'?",
            options: ["Леонід Гайдай", "Ельдар Рязанов", "Георгій Данелія"],
            answer: "Леонід Гайдай"
        },
        {
            question: "Який фільм розповідає про пригоди Шурика?",
            options: ["Операція 'И'", "Кавказька полонянка", "Брильянтова рука"],
            answer: "Операція 'И'"
        }
    ]
};

function startQuiz(category) {
    currentCategory = category;
    document.getElementById('category-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
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