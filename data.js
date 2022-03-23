
//TYPES :
// 0 QCM
//  1 - oui
//  0 - non
//  2 - jsp
// 1 NUMBER INPUT
// 2 TEXT INPUT

// input = answer
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
}
];

let current = 0;


let final = () => { //final answer



}

let _DOM_insert = (index) => { // show question in dom

    // inserts the question in dom
    
    

}


//takes the resone and decies what to do next
let foo = (ans) => { //executed when question answer is submitted
        
//data colletion :

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