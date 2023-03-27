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
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return 
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  compute() {

  }
  updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand
    this.previousOperandandTextElement.innerText = this.previousOperand
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

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })

})