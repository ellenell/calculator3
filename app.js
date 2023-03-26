class Calculator {
  constructor(previousOperandTextElement, currentOperandandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandandTextElement = currentOperandandTextElement
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined 
  }

  delete() {

  }
  appendNumber(number) {
    this.currentOperand = number
  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtonButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })

})