const quizData = [
    {
        question: 'Who was the first Manchester United captain in Premier League era?',
        a: 'Eric Cantona',
        b: 'Bryan Robinson',
        c: 'George Best',
        d: 'Nemanja Vidic',
        correct: 'b'
    },
    {
        question: 'Which team has most UEFA Champions League titles?',
        a: 'Juventus',
        b: 'Chelsea',
        c: 'Real Madrid',
        d: 'Borusia Dortmund',
        correct: 'c'
    },
    {
        question: 'The world\'s first international football match was played between, who?',
        a: 'Germany and Austria',
        b: 'Spain and Portugal',
        c: 'Scotland and England',
        d: 'Hungary and Austria',
        correct: 'c'
    }
]

const questionText = document.getElementById('question-text');
const  [answerA, answerB, answerC, answerD]  = document.querySelectorAll('.answer');
const btn = document.getElementById('btn');

let currentQuiz = 0;
let selectedRadioBtn = null;

loadQuiz()


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    
    questionText.innerText = currentQuizData.question

    answerA.innerText = currentQuizData.a
    answerB.innerText = currentQuizData.b
    answerC.innerText = currentQuizData.c
    answerD.innerText = currentQuizData.d
}

function radioChoiceDetection(){
    const radioBtns = document.getElementsByName('answer');


    radioBtns.forEach( radioBtn => {
        if(radioBtn.checked){
            selectedRadioBtn = radioBtn.id;
        }
    })

}

btn.addEventListener('click', () => {
    currentQuiz++;
    radioChoiceDetection();

    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        alert('No more questions..')
    }

})