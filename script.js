
var container = document.querySelector("#container");
var intCont = document.querySelector("#intro-container");
var quizCont = document.querySelector("#quiz-container");

var questionNumber = document.querySelector("#question-number");
var options = document.querySelector("#options");
var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var resetBtn = document.querySelector("#restartquiz");
var timer = document.querySelector("#timer");
var strbtn = document.querySelector("#st-btn");




//keep track of time 
var time;

//interval
var interval;

//this will index our quesitons 
var qIndex;


function startTest () {
    //hide all things that dont need to be there 
    //display the timer and start it 
    // start displaying questions 


    console.log("Starting Quiz");
    time = 10;

    qIndex = 0;


    //start the timer 
    interval = startTime ();

    // were starting to display the question
    startDisplayNextQuestion ();

}
 

function startTime() {
    console.log("startTime function ")
    return setInterval(runThisEverySecond, 1000);
}

function runThisEverySecond() {
    //every second we want to decrease the time, check if timer has ran out
    time--;
    console.log(time);
    //$("#timer").text(time);
    timer.innerHTML = time;
    if (time == 0) {
        clearInterval(interval);
        console.log("Stopping timer");
    }
    
}

function startDisplayNextQuestion () {
    // hide things and remove hide from other things 
    // then populate the page with a question 

    console.log("Start display fucntion got called")
    intCont.style.display = "none";
    quizCont.style.display= "block";

    showQuestion(questionsList[qIndex]);
    



}


function displayHomePage(){
    quizCont.style.display = "none";
    console.log("everything should be gone");
}

function displayHighScores(){
}


//this will affect our HTML to print out the question and answers 
function showQuestion( list  ){
    $("#question-number").text("You are at quesiton " + (qIndex));

    $("#question").text(list[0]);

    $("#btn0").text(list[1][0]);
    $("#btn1").text(list[1][2]);
    $("#btn2").text(list[1][3]);
    $("#btn3").text(list[1][1]);
    
    $("#btn0").on("click", () => {
        qIndex++;
        if (qIndex < questionsList.length) {startDisplayNextQuestion();}
    })
    $("#btn1").on("click", () => {
        qIndex++;
        if (qIndex < questionsList.length) {startDisplayNextQuestion();}
    })
    $("#btn2").on("click", () => {
        qIndex++;
        if (qIndex < questionsList.length) {startDisplayNextQuestion();}
    })
    $("#btn3").on("click", () => {
        qIndex++;
        if (qIndex < questionsList.length) {startDisplayNextQuestion();}
    })

    



}


var questionsList = [ ["WHAT WHAT?" , [ 1 ,"in da butt" ,2 ,7] ], ["what is TWO" , [ 1 ,3 ,2 ,7] ] , ["what is 1 +1?" , [ 1 ,3 ,2 ,7] ] , ["what is 17 + 33?" , [ 50  ,44  ,06 ,70 ] ] , ["what is 1 + 4?" , [ 1 ,3 ,2 ,7] ] ];


// var theNumberThree = questionsList[0][1][1];
// var theNUmberSeventy = questionsList[1][1][3];
// console.log(theNUmberSeventy);

strbtn.addEventListener("click", startTest);

//as soon as the html finishes loading => execute the function 
$(document).ready(displayHomePage());