class Question{
    constructor(text,valideAnswerSubmittedCallBack=null) {
        this.btnBack=document.querySelector('btn--back');
        this.btnNext=document.querySelector('btn--next');
        this.text=text;
        this.valideAnswerSubmittedCallBack=valideAnswerSubmittedCallBack;
        this.questionLayoutCon=document.createElement("div");
        this.questionLayoutCon.classList.add('question-body');
        this.questionLayoutCon.innerHTML=`
                <div class="question-text"></div>
                <form action="#" class="answer-form">
                         
                </form>
          `;
        this.answer='';
        //TODO : change this
        this.questionLayoutCon.querySelector('.answer-form').addEventListener('submit',(e)=>{
            e.preventDefault();
            if(isAnswerValide()){
                valideAnswerSubmittedCallBack(this);
            }
        });
    }
    /**
     * returns an HTMLDivElement to be inserted in the appropriate DOM element
     * @returns HTMLDivElement
     */
    getHtmlElement(){
           return con;
    }
    insertInLayout(parent){
        parent.innerHTML='';
        parent.appendChild(this.getHtmlElement());
    }
    isAnswerValide(){
        //to be implemented by the children depending on their question type
    };
    enableNexBtn(b){
        this.btnNext.disabled=b;

    }
    enableBackBtn(b){
        this.btnBack.disabled=b;
    }
}
class QCMQuestion extends Question{
    /**
     *
     * @param text
     * @param options an associative array [{optionText:'some text',iconSrc:'images/xgz.png'},{optionText:'some text',iconSrc:'images/xgz.png'},]
     * @param valideAnswerSubmittedCallBack closure
     * @param invalideAnswerSubmitted   closure
     */
    constructor(questionText,options,valideAnswerSubmittedCallBack=null) {
                super(questionText,valideAnswerSubmittedCallBack,invalideAnswerSubmitted);
                this.options;
    }
    /**
     * validates the questions form
     * @returns {boolean}
     */
    isAnswerValide() {
        return true;
    }
}
class InputQuestion extends Question{
    constructor(questionText,min,max,inputLabel,valideAnswerSubmittedCallBack=null){
        super(questionText,valideAnswerSubmittedCallBack,invalideAnswerSubmitted);
        this.max=max;
        this.min=min;

        this.input=document.createElement('input');
        input.classList.add('form-input');
        input.setAttribute('max',this.max);
        input.setAttribute('min',this.min);
        input.addEventListener('change',($e)=>{
           if(this.isAnswerValide($e.target)){

           }
        });



    }
    isAnswerValide(answer) {
        //check weather the value in the input is between min and max supplied
        // in the constructor and return a boolean
        return answer >=this.min && answer<=this.max;

    }

}
