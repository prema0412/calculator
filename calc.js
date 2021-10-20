
let displayNumber = '0'
let enteredNumber = ''
let previousResult = '0'

let savedOperator = ''
let chosenOperator = ''


//function to display entered numbers on output panel
const displayInputs = ( evnt => {


    clearOption = document.getElementById('clear')

    if (clearOption.innerHTML == "AC") {
        clearOption.innerHTML = "C"
    }
    
    enteredNumber = evnt.target.innerHTML


    if (displayNumber == '0')
    {
        displayNumber = ''
    }   

    // User shall not enter more than one decimal
    if ( (displayNumber.toString()).includes('.')  && (enteredNumber == '.') )
    {
        return
    }


    // User shall not enter more than 9 digits at a time

    let counter = 0

    for (i=0; i<displayNumber.length; i++)
    {
        if (displayNumber[i] != '.' && displayNumber[i] != '-') counter++

        if (counter == 9)
        return

    }

    // if (displayNumber.length == 9)
    // {
    //     return
    // }
   
        displayNumber += enteredNumber

    let outPut = document.getElementById('display')

    outPut.innerHTML = displayNumber



})

//function to add sign (negative numbers are allowed)

const addSign = () => {
    
        switch (Math.sign(displayNumber)) {
            case -1:
            case -0:   
                 displayNumber = (Math.abs(displayNumber)).toString()  
                break;
            case 1:
            case 0:  
                 displayNumber = (-Math.abs(displayNumber)).toString() 
                 break;

            default:
                break;
        }
        outPut.innerHTML = displayNumber

}

    
//operator will have to be saved for some operations as second input will come later

const chooseOperator = ( evnt => {

    chosenOperator = evnt.target.innerHTML

    console.log("chosen" + " " + chosenOperator);
    console.log("saved" + " " + savedOperator);

    if (displayNumber == '0')  return

    if  (chosenOperator === '%') 

    {
        previousResult = displayNumber
        calculate(chosenOperator)
        displayNumber = previousResult
        return
    }

    if  (chosenOperator === '=') 

    {
        calculate(savedOperator)
            displayNumber = '0'
        // displayNumber = previousResult
            previousResult = '0'
            savedOperator = ''
            chosenOperator = ''
        return
    }

  if  (savedOperator === '') {

        savedOperator = chosenOperator
        previousResult = displayNumber
        displayNumber = '0'
        return
       
  }    

//   if (previousResult != '' && previousResult != 0)  {
     calculate(savedOperator) 
//   }

    savedOperator = chosenOperator  
    console.log("chosen" + " " + chosenOperator);
    console.log("saved" + " " + savedOperator); 
    displayNumber = '0'
})    

//function to perform calculation

const calculate = ( operator => {

    console.log(operator)
    console.log(previousResult);
    console.log(displayNumber);

    switch (operator) {

        case '+':
            previousResult = parseFloat(previousResult) + parseFloat(displayNumber)
            outPut.innerHTML = previousResult.toLocaleString("en-IN")
            break;

        case '-':
            previousResult = parseFloat(previousResult) - parseFloat(displayNumber)
            outPut.innerHTML = previousResult.toLocaleString("en-IN")
            break;

        case 'x':
            previousResult = parseFloat(previousResult) * parseFloat(displayNumber)
            outPut.innerHTML = previousResult.toLocaleString("en-IN")
            break;

        case '÷':                  
            previousResult = parseFloat(previousResult) / parseFloat(displayNumber)
            outPut.innerHTML = previousResult.toLocaleString("en-IN")
            break;

        case '%':
            previousResult = (parseFloat(previousResult) / 100)
            outPut.innerHTML = previousResult
            break;    

        case '=':
            outPut.innerHTML = previousResult.toLocaleString("en-IN")
            console.log(outPut);
            break;    
    
        default:
            break;
    }
})



let numInputs = [];

//Add eventlistener to all numbered buttons

numInputs = document.getElementsByClassName('calc__number')
let i = 0;
for ( i=0; i<numInputs.length; i++)
{
    numInputs[i].addEventListener('click', displayInputs)

    
}


//Add eventlistener to all operator buttons

operators = document.getElementsByClassName('calc__operator')
for ( i=0; i<operators.length; i++)
{
    operators[i].addEventListener('click', chooseOperator)

    
}

let outPut = document.getElementById('display')

//Implementing clear and all clear function on click event

let clearOption = document.getElementById('clear')
clearOption.addEventListener('click', () => {

        if (clearOption.innerHTML == "AC") {
            displayNumber = '0'
            previousResult = '0'
            savedOperator = ''
            chosenOperator = ''
           
        }

        if(clearOption.innerHTML == "C") {
            displayNumber = '0'
            outPut.innerHTML = displayNumber
            clearOption.innerHTML = "AC"
            console.log(displayNumber)
            console.log(previousResult)

        }
})










