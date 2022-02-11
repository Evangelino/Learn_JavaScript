
class Calculator {
    constructor(previouseOperandTextElement,currentOperandTextElement){
        this.previouseOperandTextElement = previouseOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    };

    clear(){
        this.currentOperandTextElement = '';
        this.previouseOperandTextElement = '';
    }

    delete(){

    }

    appendNumber(){

    }

    chooseOperation(){

    }

    compute(){

    }

    updateDisplay(){

    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previouseOperandTextElement = document.querySelector('[data-previouse-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')