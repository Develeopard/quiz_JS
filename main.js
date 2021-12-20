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

//Containers
const container = document.getElementById('container');
const startContainer = document.getElementById('start-container');

//quiz card
const questionText = document.getElementById('question-text');
const  [answerA, answerB, answerC, answerD]  = document.querySelectorAll('.answer');
const btn = document.getElementById('btn');
const startBtn = document.getElementById('start-btn');

let currentQuiz = 0;
let selectedRadioBtn = null;

const radioBtns = document.getElementsByName('answer');


// Scoreboard
//score
let startingScore = 0;
const score = document.getElementById('score')

//timer
let startingSeconds = 3;
const timer = document.getElementById('time');

let timerControl = setInterval(updateTimer, 1000);

function updateTimer(){
    startingSeconds = startingSeconds < 10 ? `0${startingSeconds}` : startingSeconds;
    timer.innerHTML = `${startingSeconds}`
    startingSeconds--;
    
    if(startingSeconds < 0){
        startingSeconds = 00;
        clearInterval(timerControl);
        alert('time\'s up')
        console.log(startingSeconds);
    }
}



// loadQuiz()


function loadQuiz(){
    
    startContainer.classList.add('hide');
    container.classList.remove('hide');
    updateTimer()
    deselectRadioButton()
    const currentQuizData = quizData[currentQuiz];
    
    questionText.innerText = currentQuizData.question
    
    answerA.innerText = currentQuizData.a
    answerB.innerText = currentQuizData.b
    answerC.innerText = currentQuizData.c
    answerD.innerText = currentQuizData.d
}

startBtn.addEventListener('click', loadQuiz);

function radioChoiceDetection(){

    radioBtns.forEach( radioBtn => {
        if(radioBtn.checked){
            selectedRadioBtn = radioBtn.id;
        }

        console.log(selectedRadioBtn);
    })
}

function deselectRadioButton(){
    radioBtns.forEach( radioBtn => {
        radioBtn.checked = false;
    })
}

btn.addEventListener('click', () => {

    radioChoiceDetection();

    if(selectedRadioBtn === quizData[currentQuiz].correct){
        startingScore++;
        score.innerHTML = startingScore;
        console.log(score);
        console.log(quizData[currentQuiz]);
    }
    currentQuiz++;

    if(currentQuiz < quizData.length){
        //TODO:  fix the quiz reset, not working
        loadQuiz()
    }
    else{
        // btn.innerHTML = `Reset Quiz`
        alert('No more questions..')
    }

})
