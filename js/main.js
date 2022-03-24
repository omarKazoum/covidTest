//getting refrence to all tree parts of the page
const startContent=document.querySelector("#start-content");
const quizContent=document.querySelector('#quiz-content');
const resultContent=document.querySelector('#result-content');
startQuizBtn=document.querySelector("#start-quiz-btn").addEventListener('click',()=>{
    //start quiz is clicked
    quizContent.style.display="block";
    startContent.style.display="none";
});
resultContent.style.display='none';
quizContent.style.display="none";