//getting refrence to all tree parts of the page
const startContent=document.querySelector("#start-content");
const quizContent=document.querySelector('#quiz-content');
const resultContent=document.querySelector('#result-content');
const infoContainner=document.querySelector('.info-container');
const quizWrapper=document.querySelector('.questions-board-wrapper');
startQuizBtn=document.querySelector("#start-quiz-btn").addEventListener('click',()=>{
    //start quiz is clicked
    quizContent.style.display="block";
    startContent.style.display="none";
    setActiveStep(1);
});
startQuizBtn2=document.querySelector('.q-btn--start-test');
startQuizBtn2.addEventListener('click',()=>{
    quizWrapper.style.display='block';
    infoContainner.style.display='none';
    setActiveStep(2);
})
//overriding default form behavior
document.querySelector('form').addEventListener('submit',()=>{return false});
//TYPES :
// 0 QCM
//  1 - oui
//  0 - non
//  2 - jsp
// 1 NUMBER INPUT
// 2 TEXT INPUT

// input = answer
const QUESTION_TYPE_QCM=0;
const QUESTION_TYPE_INPUT_NBR=1;
const QUESTION_TYPE_INPUT_TEXT=2;
let qst = [
{
    title: { //0
        fr: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?", //fr
        ar: "" //ar
    },
    type: 0, //question type
    data: { //answer config
        1: { //value : text
            fr: "OUI",
            ar: "",
            _next : 1 //next question for this answer
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 2
        },
        2: {
            fr: "NE SAIT PAS",
            ar: "",
            _next : 1
        }
    },
    answer : null // null. is set at runtime
},
{
    title: { //1
        fr: "Quelle est votre température ?",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "°C",
            ar: "°C",
            _next : 2
        },
        min: 35,
        max: 40
    },
    answer : null
},
{
    title: { //2
        fr: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 3
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 3
        }
    },
    answer : null
},
{
    title: { //3
        fr: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 4
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 4
        }
    },
    answer : null
},
{
    title: { //4
        fr: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 5
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 5
        }
    },
    answer : null
},
{
    title: { //5
        fr: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 6
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 6
        }
    },
    answer : null
},
{
    title: { //6
        fr: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 7
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 8
        }
    },
    answer : null
},
{
    title: { //7
        fr: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 8
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 8
        }
    },
    answer : null
},
{
    title: { //8
        fr: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24hr?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 9
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 9
        }
    },
    answer : null
},
{
    title: { //9
        fr: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 10
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 10
        }
    },
    answer : null
},
{
    title: { //10
        fr: "Comment vous sentez-vous ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "Bien",
            ar: "",
            _next : 11
        },
        2: {
            fr: "Assez bien",
            ar: "",
            _next : 11
        },
        3: {
            fr: "Mal",
            ar: "",
            _next : 11
        },
        4: {
            fr: "Très mal",
            ar: "",
            _next : 11
        }
    },
    answer : null
},
{
    title: { //11
        fr: "Avez-vous d’autre symptôme ?",
        ar: ""
    },
    type: 2,
    data: {
        text: {
            fr: "symptôme",
            ar: "",
            _next : 12
        }
    },
    answer : null
},
{
    title: { //12
        fr: "Quel est votre âge ?",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "âge",
            ar: "",
            _next : 13
        },
        min: 0,
        max: 120
    },
    answer : null
},
{
    title: { //13
        fr: "Quel est votre poids ? ",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "kg",
            ar: "",
            _next : 14
        },
        min: 20,
        max: 200
    },
    answer : null
},
{
    title: { //14
        fr: "Quel est votre taille ? ",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "cm",
            ar: "",
            _next : 15
        },
        min: 50,
        max: 200
    },
    answer : null
},
{
    title: { //15
        fr: " Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 16
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 16
        },
        2: {
            fr: "Ne sait pas",
            ar: "",
            _next : 16
        }
    },
    answer : null
},
{
    title: { //16
        fr: "Êtes-vous diabétique ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 17
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 17
        }
    },
    answer : null
},
{
    title: { //17
        fr: "Avez-vous ou avez-vous eu un cancer ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 18
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 18
        }
    },
    answer : null
},
{
    title: { //18
        fr: " Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 19
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 19
        }
    },
    answer : null
},
{
    title: { //19
        fr: " Avez-vous une insuffisance rénale chronique dialysée ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 20
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 20
        }
    },
    answer : null
},
{
    title: { //20
        fr: " Avez-vous une maladie chronique du foie ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 21
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 21
        }
    },
    answer : null
},
{
    title: { //21
        fr: " Êtes-vous enceinte ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 22
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 22
        },
        2: {
            fr: "MALE",
            ar: "",
            _next : 22
        }
    },
    answer : null
},
{
    title: { //22
        fr: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : 23
        },
        0: {
            fr: "NON",
            ar: "",
            _next : 23
        },
        2: {
            fr: "NE SAIT PAS",
            ar: "",
            _next : 23
        }
    },
    answer : null
},
{
    title: { //23
        fr: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: "",
            _next : null
        },
        0: {
            fr: "NON",
            ar: "",
            _next : null
        },
        2: {
            fr: "NE SAIT PAS",
            ar: "",
            _next : null
        }
    },
    answer : null
}];

let current = 0; //current question. !DO NOT INCREMENT ON FRONTEND!
const LANG_FR='fr';
const LANG_AR='ar';
let currentLang= LANG_FR;

let final = () => { //executed after final question.
    setActiveStep(3);
    console.log("trigger : final");
    //calculate answer (first method. points system.) advanced algorithm later.
    //first method
    let total = 0; //bad symptoms counter. !ALTERNATIVE FOR ALGORITHM
    let foo = {};
    qst.forEach((val, i) => {
        if (val.answer != null){
            foo[i] = {};
            foo[i].question = val.title.fr;
            foo[i].answer = val.answer;
            if (val.type == 0 || val.answer == 1)
                total++;
        }
    });
    if (total > 12) {
        //dom insert SICK
        console.log("result : SICK");
        return true;
    }else{
        //dom insert HEALTHY
        console.log("result : HEALTHY");
        return false;
    }
    //second method
const nextBtn=document.querySelector('.q-btn--next');
const backBtn=document.querySelector('.q-btn--back');
//used to display the final result
const resultBtn=document.querySelector('.q-btn--show-result');
resultBtn.addEventListener('click',final)
backBtn.addEventListener('click',(event)=>{
    console.log('clicked '+event.target.textContent);
})
backBtn.style.display='none';
nextBtn.addEventListener('click',(event)=>{
    console.log('clicked '+event.target.textContent);
})
    //code here.
}
const insertQcmQuestion=(index)=>{
    if(qst[index].type!==QUESTION_TYPE_QCM)
        throw 'invalide question type';
    const question=qst[index];
    const title=currentLang===LANG_FR? question.title.fr:question.title.ar;
    const questionBody=document.createElement('div');
    questionBody.classList.add('question-body');
    questionBody.innerHTML=`
                        <div class="question-text">qsdsqdsdfdsf</div>
                        <form action="#" class="answer-form">
                            <!-- form inputs will be generated form js-->
                        </form>
                   `;
    questionBody.querySelector('.question-text').textContent=title;
    const questionForm=questionBody.querySelector('.answer-form');
    const keys =Object.keys(question.data);
    keys.forEach((k)=>{
        //for each one of the possible answers
        const optionText=currentLang===LANG_FR? question.data[k].fr:question.data[k].ar;
        const optionValue=k;
        let optionEl=document.createElement('div');
        optionEl.classList.add('radiocontainer');
        optionEl.innerHTML=`
            <label class="radio"></label>
            <input type="radio" class="radiobutton">`;
        const radioBtn=optionEl.querySelector('.radiobutton');
        const radioLabel=optionEl.querySelector('.radio');
        radioBtn.setAttribute('id','option-'+k);
        radioLabel.setAttribute('for','option-'+k);
        radioBtn.value=k;
        radioBtn.name='answer';
        radioBtn.addEventListener('change',($)=>{
            qst[current].answer=radioBtn.value;
            enableNextBtn(true);
        })
        radioLabel.textContent=optionText;
        questionForm.appendChild(optionEl);
    })
    const questionContainer=document.querySelector('.question-content');
    questionContainer.innerHTML='';
    questionContainer.appendChild(questionBody);
}
const insertInputNumberQuestion=(index)=>{
    if(qst[index].type!==QUESTION_TYPE_INPUT_NBR)
        throw 'invalide question type';
    const question=qst[index];
    const title=currentLang===LANG_FR? question.title.fr:question.title.ar;
    const questionBody=document.createElement('div');
    questionBody.classList.add('question-body');
    questionBody.innerHTML=`
                        <div class="question-text">qsdsqdsdfdsf</div>
                        <form action="#" class="answer-form">
                            <!-- form inputs will be generated form js-->
                        </form>
                   `;
    questionBody.querySelector('.question-text').textContent=title;
    const questionForm=questionBody.querySelector('.answer-form');
    const inputParent=document.createElement('div');
    inputParent.classList.add('inputtext','my-5');
    inputParent.innerHTML=`
        <input type="number" placeholder="37" class="textinput">
        <label id="labeltext"></label>    
    `;
    inputParent.querySelector('#labeltext').textContent=currentLang==LANG_FR?question.data.text.fr:question.data.text.ar;
    const questionInput =inputParent.querySelector('.textinput');
    questionInput.focus();
    questionInput.setAttribute('autofocus',1);
    const changeCallBack=($)=>{
        //the value of the input has chnaged
        const value=parseInt($.target.value);
        console.log('value changed');
        if(value<=parseInt($.target.max) && value>=parseInt($.target.min)){
            //so the value is valid
            console.log('value valid');
            qst[current].answer=value;
            enableNextBtn(true);
            questionInput.classList.remove('invalide');
        }else{
            enableNextBtn(false);
            questionInput.classList.add('invalide');
            console.log('value invalid');
        }
    }
    questionInput.addEventListener('keyup',changeCallBack);
    questionInput.addEventListener('change',changeCallBack);
    questionForm.innerHTML='';
    questionForm.appendChild(inputParent);
    questionInput.placeholder=question.data.min+" - "+question.data.max;
    questionInput.min=question.data.min;
    questionInput.max=question.data.max;
    const questionContainer=document.querySelector('.question-content');
    questionContainer.innerHTML='';
    questionContainer.appendChild(questionBody);
}
const insertInputTextQuestion=(index)=>{
    if(qst[index].type!==2)
        throw 'invalide question type';
    const question=qst[index];
    const title=currentLang===LANG_FR? question.title.fr:question.title.ar;
    const questionBody=document.createElement('div');
    questionBody.classList.add('question-body');
    questionBody.innerHTML=`
                        <div class="question-text">qsdsqdsdfdsf</div>
                        <form action="#" class="answer-form">
                            <!-- form inputs will be generated form js-->
                        </form>
                   `;
    questionBody.querySelector('.question-text').textContent=title;
    const questionForm=questionBody.querySelector('.answer-form');
    const inputParent=document.createElement('div');
    inputParent.classList.add('inputtext','my-5');
    inputParent.innerHTML=`
        <input type="text"  class="textinput">
        <label id="labeltext"></label>
        
    `;
    inputParent.querySelector('#labeltext').textContent=currentLang==LANG_FR?question.data.text.fr:question.data.text.ar;
    const questionInput =inputParent.querySelector('.textinput');
    questionInput.focus();
    questionInput.setAttribute('autofocus',1);
    enableNextBtn(true);
    questionInput.addEventListener('keydown',($)=>{
        //the value of the input has chnaged
        const value=$.target.value;
        console.log('value changed');
        if(value.length>2){
            console.log('value valid');
            //so the value is valid
            qst[current].answer=value;
          }else{
            console.log('value invalid');
        }

    })
    questionForm.innerHTML='';
    questionForm.appendChild(inputParent);
    const input=inputParent.querySelector('.textinput');
    //change input propreties here
    const questionContainer=document.querySelector('.question-content');
    questionContainer.innerHTML='';
    questionContainer.appendChild(questionBody);
}
let _DOM_insert = (index) => { // show question in dom
    enableBackBtn(current>0);
    setProgress((index+1)/qst.length*100,(index+1)+"/"+qst.length);
    enableNextBtn(false);
    switch(qst[index].type){
        case QUESTION_TYPE_INPUT_TEXT:
            insertInputTextQuestion(index);
            break;
        case QUESTION_TYPE_INPUT_NBR:
            insertInputNumberQuestion(index);
            break;
        case QUESTION_TYPE_QCM:
            insertQcmQuestion(index);
            break;
        default : throw 'unspupported question type';
    }
}
let params = {
    title : "",
    sub_text : ""
}

let RESULT_TYPE_SICK = 1;
let RESULT_TYPE_HEALTHY = 0;

let _DOM_insert_result = (params, mode) => {



}

let show_data = () => { // shows data for debug
    let total = 0; //bad symptoms counter. !ALTERNATIVE FOR ALGORITHM
    let foo = {};
    qst.forEach((val, i) => {
        if (val.answer != null){
            foo[i] = {};
            foo[i].question = val.title.fr;
            foo[i].answer = val.answer;
            if (val.type == 0 && val.answer == 1)
                total++;
        }
    });
    console.table(foo);
    console.log("total > " + total);
    if (total > 12) {
        //dom insert SICK
        console.log("result : SICK");
    }else {
        //dom insert HEALTHY
        console.log("result : HEALTHY");
    }
}


let foo = (ans) => { //executed when question answer is submitted
        console.table({
            answer : ans,
            current : current,
            question_length : qst.length
        });
    //data colletion :
    qst[current].answer = ans; //set answer null value to user input @ runtime.
    //display next :
    if (current != qst.length - 1){ //question position check.
        //_next extraction changes @ question.type.
        if (qst[current].type == 0){
            console.log('next : '+ qst[current].data[ans]._next);
            _DOM_insert(qst[current].data[ans]._next); // used data[ans] due to different _next per answer.
        } else if (qst[current].type == 1 || qst[current].type == 2){
            console.log('next : '+ qst[current].data.text._next);
            _DOM_insert(qst[current].data.text._next); // used data.text due to single _next. !BAD FOR PRODUCTION!.
        }
        current++; //increment question counter. NOTE: current is of no use after final(); is called.
    } else { //if at last question.
        resultBtn.style.display='block';
        nextBtn.style.display="none";
    }
}
//start state

const nextBtn=document.querySelector('.q-btn--next');
const backBtn=document.querySelector('.q-btn--back');
//used to display the final result
resultBtn=document.querySelector('.q-btn--show-result');
resultBtn.addEventListener('click',final);
backBtn.addEventListener('click',(event)=>{
    console.log('clicked '+event.target.textContent);
    if(!current>0)
        throw "can't go back you are already at position 0";
    current--;
    _DOM_insert(current);
})
nextBtn.addEventListener('click',(event)=>{
    moveToNextQuestion();
    console.log('clicked '+event.target.textContent);
})
const moveToNextQuestion=()=>{
    foo(qst[current].answer);
}

const enableNextBtn=(b)=>{
    nextBtn.disabled=!b;
}
const enableBackBtn=(b)=>{
    backBtn.disabled=!b;
}
const setActiveStep=(step/* from 1 to 3*/)=>{
    if(step>3 || step<1)
        throw `step ${step} does not exit`;
    document.querySelector('.step.active').classList.toggle('active');
    document.querySelectorAll('.step')[step-1].classList.toggle('active');
}
/**
 * @param progress from 0 to 100
 * @param text text alongside the progressbar
 */
const setProgress=(progress,text)=>{
    console.log("progress "+progress)
    if(progress>100 || progress<0)
        throw "progress of value "+progress+" not authorized";
    document.querySelector('.progress-bar__progress').style.width=progress+"%";
    document.querySelector('.q-progress-label').textContent=text;
}
//initial state

resultContent.style.display='none';
quizWrapper.style.display='none';
quizContent.style.display="none";
//startContent.style.display="none";
enableNextBtn(false);
enableBackBtn(false);
resultBtn.style.display='none';
_DOM_insert(0);
