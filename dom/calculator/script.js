
class Calculator {
    constructor(previouseOperandTextElement,currentOperandTextElement){
        this.previouseOperandTextElement = previouseOperandTextElement;
        this.previouseOperandTextElement = currentOperandTextElement;
        this.clear();

    };

    clear(){
        this.previouseOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = number

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previouseOperandTextElement = document.querySelector('[data-previouse-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previouseOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})