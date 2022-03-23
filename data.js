
//TYPES :
// 0 QCM
//  1 - oui
//  0 - non
//  2 - jsp
// 1 NUMBER INPUT
// 2 TEXT INPUT

// input = answer
let qst = [{ 
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
}
];

let current = 0; //current question. !DO NOT INCREMENT ON FRONTEND!

let final = () => { //executed after final question.

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
    }else {
        //dom insert HEALTHY
        console.log("result : HEALTHY");

        return false;
    }

    //second method





    //code here.


}

let _DOM_insert = (index) => { // inserts question in DOM. use current as argument and DO NOT manually increment it.
    // NOTE : inserted question should pipe the selected value into > foo(answer),
    // if answer isnt in the questions expected value list, it WILL break the code.
    //debug
    console.log("trigger : _DOM_insert");
    //dom insert.


    

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
//debug
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
} else { //if at last question.
    final(); //display result.
}
current++; //increment question counter. NOTE: current is of no use after final(); is called.
}