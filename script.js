


var container = document.querySelector("#container");
//intro page 
var intCont = document.querySelector("#intro-container");
var strbtn = document.querySelector("#st-btn");

//quiz container things 
var quizCont = document.querySelector("#quiz-container");
var questionNumber = document.querySelector("#question-number");
var q = document.querySelector("#question");
var options = document.querySelector("#options");
var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var timer = document.querySelector("#timer");

var resetBtn = document.querySelector("#restartquiz");
//input form things 
var inputCont = document.getElementById("input-form-container");
var scoreHolder = document.querySelector("#score");
var inputField = document.querySelector("#input-field");
var subtBtn = document.querySelector("#submit");

//high scores things 
var highScoreCont = document.querySelector("#highscore-container");
var scoreL = document.querySelector("#score-list");
var homeBtn = document.querySelector("#home-btn");
var clearHighScore = document.querySelector("#clear-btn");


//display homepage function
displayHomePage()






//keep track of time 
var time;

//interval
var interval;

//this will index our quesitons 
var qIndex;

//this will be how manny correct answers they have at a given time
var usersScore;


function startTest() {
    //hide all things that dont need to be there 
    //display the timer and start it 
    // start displaying questions 


    console.log("Starting Quiz");
    time = 30;

    qIndex = 0;

    usersScore = 0;


    //start the timer 
    interval = startTime();

    // were starting to display the question
    startDisplayNextQuestion();
    console.log("calling start Diplay next question from startTest function");

}



function startTime() {
    console.log("startTime function ")
    return setInterval(runThisEverySecond, 1000);
}

function runThisEverySecond() {
    //every second we want to decrease the time, check if timer has ran out
    time--;
    console.log(time);

    timer.innerHTML = time;
    if (time <= 0) {
        clearInterval(interval);
        displayTheinputForm();
        console.log("Stopping timer");
    }

}

function startDisplayNextQuestion() {
    // hide things and remove hide from other things 
    // then populate the page with a question 

    console.log("Start display fucntion got called")
    intCont.style.display = "none";
    quizCont.style.display = "block";

    //getRidOfBindings();
    showQuestion(queList[qIndex]);

}


function displayHomePage() {
    intCont.style.display = "block";
    quizCont.style.display = "none";
    inputCont.style.display = "none";
    highScoreCont.style.display = "none";

    console.log("everything should be gone");
}

function removeScores() {
    while(scoreL.firstChild) {
        scoreL.removeChild(scoreL.firstChild);
    }
}

function displayHighScores() {

    removeScores();

    inputCont.style.display = "none";
    //highScoreCont.style.diplay = "compact";
    highScoreCont.style.display = "block";

    console.log("diplay High Scores got called");

    for (var i = 0; i < localStorage.length; i++) {
        var person = localStorage.key(i);
        var personScore = localStorage.getItem(localStorage.key(i));


        var toShow = document.createElement('div');
        
        toShow.innerHTML = "Name: " + person + " Score is: " + personScore;

        scoreL.appendChild(toShow);
    }
    homeBtn.addEventListener('click', displayHomePage);
    clearHighScore.addEventListener('click', clearStorage);
}

function clearStorage() {
    localStorage.clear();
    displayHighScores();
}
//this will affect our HTML to print out the question and answers 
//list is an object 
function showQuestion(list) {

    questionNumber.innerHTML = qIndex;

    q.innerHTML = list.ask;

    btn0.innerHTML = list.answers[0].text;
    btn0.dataset.ans = list.answers[0].correct;

    btn1.innerHTML = list.answers[1].text;
    btn1.dataset.ans = list.answers[1].correct;

    btn2.innerHTML = list.answers[2].text;
    btn2.dataset.ans = list.answers[2].correct;

    btn3.innerHTML = list.answers[3].text;
    btn3.dataset.ans = list.answers[3].correct;

    btn0.addEventListener('click', ansClick);
    btn1.addEventListener('click', ansClick);
    btn2.addEventListener('click', ansClick);
    btn3.addEventListener('click', ansClick);
}

function ansClick(buttonPressed) {

    // console.log(buttonPressed.target.dataset.ans);
    var theyCorrect = buttonPressed.target.dataset.ans;
    console.log(theyCorrect);
    if (theyCorrect == "true") {
        usersScore = usersScore + 1;
        console.log("Curent score is " + usersScore);
    } else {
        time = time - 5;
    }

    // check their answer and dicrease the timer i wilsh 
    // increment the the score if they answered corerctly 
    qIndex++;
    if (qIndex < queList.length) {
        startDisplayNextQuestion();
        console.log("calling start Diplay next question from anwer click");
    }
    else {
        console.log("DONE WITH THE QUIZ!!! NICE JOB!!");
        clearInterval(interval);
        displayTheinputForm();
    }
}

function displayTheinputForm() {
    console.log("Still under construction!");
    //quizCont.style.diplay = "none";
    $(quizCont).hide();
    inputCont.style.display = "block";
    scoreHolder.innerHTML = usersScore;


    subtBtn.addEventListener('click', () => {
        var n = inputField.value;
        saveScore(n, usersScore);
        displayHighScores();
    }
    );


}

function saveScore(n, s) {
    localStorage.setItem(n, s);
    console.log("Storing this name: " + n + " and this value: " + s);
}



var queList = [
    {
        ask: "what says woof?",

        answers: [
            { text: "dog", correct: true },
            { text: "frog", correct: false },
            { text: "cat", correct: false },
            { text: "apple", correct: false }
        ]
    },
    {
        ask: "what is 100 + 100?",

        answers: [
            { text: 78, correct: false },
            { text: 309, correct: false },
            { text: 12, correct: false },
            { text: 200, correct: true }
        ]
    }
    ,
    {
        ask: "What is Love?",

        answers: [
            { text: "Don't Ask", correct: false },
            { text: "Love Don't Live Here", correct: false },
            { text: "Baby Don't Hurt Me", correct: true },
            { text: "Hopeless Romantic", correct: false }
        ]
    }
    ,
    {
        ask: "what says Ribbet?",

        answers: [
            { text: "dog", correct: false },
            { text: "frog", correct: true },
            { text: "cat", correct: false },
            { text: "apple", correct: false }
        ]
    },
    {
        ask: "what says Moo?",

        answers: [
            { text: "dog", correct: false },
            { text: "cow", correct: true },
            { text: "cat", correct: false },
            { text: "apple", correct: false }
        ]
    }
]


strbtn.addEventListener("click", startTest);

displayHomePage();


