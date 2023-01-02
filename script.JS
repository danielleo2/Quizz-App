const quizzData = [
   {
    question: '¿Quien escribió Cronicas Marcianas?',
    a: 'Stephen King',
    b: 'Isaac Asimov',
    c: 'Ray Bradbury',
    d: 'Oscar Wilde',
    correct: 'c'
   },
   {
    question: '¿Quien escribió La Vuelta al mundo en 80 días?',
    a: 'Sylvia Plat',
    b: 'Julio Verne',
    c: 'Isabel Allende',
    d: 'Rafael Urdaneta',
    correct: 'b'
   },
   {
    question: '¿Quien escribió Frankestein?',
    a: 'Mary Shelley',
    b: 'Ana Kanerina',
    c: 'Jane Austen',
    d: 'Sara J Maas',
    correct: 'a'
   },
   {
    question: '¿Quien escribió La Divina Comedia?',
    a: 'Leonardo Davinci',
    b: 'Artemisa Gentileschi',
    c: 'Miguel Angel',
    d: 'Dante Alighieri',
    correct: 'd',
   },
];

const answersEls = document.querySelectorAll(".answers");
const quiz = document.getElementById("quiz");
const q_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
deselectAnswer();

    const currentQuizzData = quizzData[currentQuizz];
    q_text.innerText = currentQuizzData.question;
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;
};

function getSelection() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
             answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelection();

    if (answer === quizzData[currentQuizz].correct) {
        score++
    }

    if (answer) {
        currentQuizz++;
        if (currentQuizz < quizzData.length) {
            loadQuizz();
        } else {
            quiz.innerHTML = `<h2>Listo! Has acertado ${score} de ${quizzData.length} preguntas.</h2>
            <button class="btn" onclick="location.reload()">Otro Intento</button>`;
        }
    }
});