
//TYPES :
// 0 QCM
//  1 - oui
//  0 - non
//  2 - jsp
// 1 NUMBER INPUT
// 2 TEXT INPUT

// input = answer
QUESTION_TYPE_QCM=0;
QUESTION_TYPE_INPUT_NBR=1;
QUESTION_TYPE_INPUT_TEXT=2;
let qst = [{
    title: {
        fr: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        },
        2: {
            fr: "NE SAIT PAS",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Quelle est votre température ?",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "°C",
            ar: "°C"
        },
        min: 35,
        max: 40
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24hr?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Comment vous sentez-vous ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "Bien",
            ar: ""
        },
        2: {
            fr: "Assez bien",
            ar: ""
        },
        3: {
            fr: "Mal",
            ar: ""
        },
        4: {
            fr: "Très mal",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous d’autre symptôme ?",
        ar: ""
    },
    type: 2,
    data: {
        text: {
            fr: "symptôme",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Quel est votre âge ?",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "âge",
            ar: ""
        },
        min: 0,
        max: 120
    },
    answer : null
},
{
    title: {
        fr: "Quel est votre poids ? ",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "kg",
            ar: ""
        },
        min: 20,
        max: 200
    },
    answer : null
},
{
    title: {
        fr: "Quel est votre taille ? ",
        ar: ""
    },
    type: 1,
    data: {
        text: {
            fr: "cm",
            ar: ""
        },
        min: 50,
        max: 200
    },
    answer : null
},
{
    title: {
        fr: " Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        },
        2: {
            fr: "Ne sait pas",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Êtes-vous diabétique ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous ou avez-vous eu un cancer ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: " Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: " Avez-vous une insuffisance rénale chronique dialysée ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: " Avez-vous une maladie chronique du foie ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: " Êtes-vous enceinte ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        },
        2: {
            fr: "MALE",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        },
        2: {
            fr: "NE SAIT PAS",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: " Avez-vous une insuffisance rénale chronique dialysée ?",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        }
    },
    answer : null
},
{
    title: {
        fr: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        ar: ""
    },
    type: 0,
    data: {
        1: {
            fr: "OUI",
            ar: ""
        },
        0: {
            fr: "NON",
            ar: ""
        },
        2: {
            fr: "NE SAIT PAS",
            ar: ""
        }
    },
    answer : null
}];

const LANG_FR='fr';
const LANG_AR='ar';
let current = 0;
let currentLang= LANG_FR;
const nextBtn=document.querySelector('.q-btn--next');
const backBtn=document.querySelector('.q-btn--back');
backBtn.addEventListener('click',(event)=>{
    console.log('clicked '+event.target.textContent);
})
nextBtn.addEventListener('click',(event)=>{
    console.log('clicked '+event.target.textContent);
})

let final = () => { //final answer



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
        radioBtn.value=k;
        radioBtn.name='answer';
        radioLabel.textContent=optionText;
        questionForm.appendChild(optionEl);
    })
    const questionContainer=document.querySelector('.question-content');
    questionContainer.innerHTML='';
    questionContainer.appendChild(questionBody);

}
insertQcmQuestion(0)
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

    const questionContainer=document.querySelector('.question-content');
    questionContainer.innerHTML='';
    questionContainer.appendChild(questionBody);

}
const insertInputTextQuestion=(index)=>{
    if(qst[index].type!==1)
        throw 'invalide question type';
}
let _DOM_insert = (index) => { // show question in dom
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
//takes the resone and decies what to do next
let foo = (ans) => { //executed when question answer is submitted
        
//data collection :

qst[current].answer = ans;

//display next :

// _DOM_insert() or bar()

if (current != qst.length - 1){
    _DOM_insert(current + 1);
} else {
    final();
}

current++;
}