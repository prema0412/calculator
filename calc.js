


let previousNUmber = '0'
let currentNumber = ''
let displayNumber = "0"
let enteredNumber = ''
let previousResult = '0'
let currentResult = ''


//function to display entered numbers on output panel
const displayInputs = ( evnt => {


    clearOption = document.getElementById('clear')

    if (clearOption.innerHTML == "AC") {
        clearOption.innerHTML = "C"
    }
    
    enteredNumber = evnt.target.innerHTML


    if (displayNumber == 0)
    {
        displayNumber = ''
    }   

    // User shall not enter more than one decimal
    
    if ( displayNumber.includes('.')  && (enteredNumber == '.') )
    {
        return
    }


    // User shall not enter more than 9 digits at a time

    if (displayNumber.length == 9)
    {
        return
    }
   
        displayNumber += enteredNumber
        previousResult = displayNumber

        console.log(displayNumber);
        console.log(previousResult);
    
    
    // displayNumber += enteredNumber
    // currentNumber = displayNumber
    // previousNUmber = displayNumber
    // previousResult = displayNumber

    let outPut = document.getElementById('display')

    outPut.innerHTML = displayNumber

    // console.log(typeof(displayNumber))


})

//function to add sign (negative numbers are allowed)

const addSign = () => {
    
        console.log(displayNumber + " " + Math.abs(displayNumber));

       
       
        switch (Math.sign(displayNumber)) {
            case -1:
            case -0:    
                break;
            case 1:
            case 0:  
                 displayNumber = (-Math.abs(displayNumber)).toString() 

            default:
                break;
        }
        outPut.innerHTML = displayNumber

}

// const addDecimal = () => {
    

//     console.log(displayNumber);

   
   
//     switch (toString(displayNumber).includes('.')) {
//         case true:    
//             break;
//         case false:
//              displayNumber = displayNumber + document.getElementById('decimaml') 
//         default:
//             break;
//     }
//     outPut.innerHTML = displayNumber
// }
    

//function to perform calculation

const performcalculation = ( evnt => {

    selectedOperator = evnt.target.innerHTML

    console.log(selectedOperator);
    switch (selectedOperator) {
        case '+':

            console.log(displayNumber);
            console.log(previousResult);

            if ( previousResult == 0)

            {
                previousResult = displayNumber
                displayNumber = 0
            }
            else {
                previousResult = parseFloat(previousResult) + parseFloat(displayNumber)
                displayNumber = 0
            }
            console.log(displayNumber)
            console.log(previousResult)
            outPut.innerHTML = previousResult
            break;

            case '-':

                console.log(displayNumber);
                console.log(previousResult);
    

                if ( previousResult == 0)
    
                {
                    previousResult = displayNumber
                    displayNumber = 0
                }
                else {
                    previousResult = parseFloat(previousResult) - parseFloat(displayNumber)
                    displayNumber = 0
                }
                console.log(displayNumber)
                console.log(previousResult)
                outPut.innerHTML = previousResult
                break;

            case 'x':

            console.log(displayNumber);
            console.log(previousResult);

            if ( previousResult == 0)


            
            {
                previousResult = displayNumber
                displayNumber = 0
            }
            else {

                if  ( (displayNumber != 0 ) && (previousResult != displayNumber) ) {

                    previousResult = parseFloat(previousResult) * parseFloat(displayNumber)
                    displayNumber = 0
                }
               
            }
            console.log(displayNumber)
            console.log(previousResult)
            outPut.innerHTML = previousResult
            break;

            case '÷':

            console.log(displayNumber);
            console.log(previousResult);

            if ( previousResult == 0)

            {
                previousResult = displayNumber
                previousNUmber = displayNumber
                displayNumber = 0
            }
            else {

                if  (!(displayNumber == 0 ) ) {
                    
                    previousResult = parseFloat(previousResult) / parseFloat(displayNumber)
                    displayNumber = 0
                }
               
            }
            console.log(displayNumber)
            console.log(previousResult)
            outPut.innerHTML = previousResult
            break;


            case '%':

                console.log(displayNumber);
                console.log(previousResult);
    
                if ( previousResult == 0) previousResult = displayNumber
    
                
                    
                previousResult = (parseFloat(previousResult) / 100)
                displayNumber = 0

                console.log(displayNumber)
                console.log(previousResult)
                outPut.innerHTML = previousResult
                break;    

                case '=':

                    console.log(displayNumber);
                    console.log(previousResult);
        
    
                    if ( previousResult == 0)
        
                    {
                        previousResult = displayNumber
                        displayNumber = 0
                    }
                    // else {
                    //     previousResult = parseFloat(previousResult) - parseFloat(displayNumber)
                    //     displayNumber = 0
                    // }
                   
                    outPut.innerHTML = previousResult
                    displayNumber = 0
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
// numInputs.forEach( (numInput, index) => {
//     numInput[index].addEventListener('click', () => {
//         counter = counter++;
//         alert("I am addded" + counter + "times")
//     })
// });

//Add eventlistener to all operator buttons

operators = document.getElementsByClassName('calc__operator')
for ( i=0; i<operators.length; i++)
{
    operators[i].addEventListener('click', performcalculation)

    
}

let outPut = document.getElementById('display')

//Implementing clear and all clear function on click event

let clearOption = document.getElementById('clear')
clearOption.addEventListener('click', () => {

        if (clearOption.innerHTML == "AC") {
            displayNumber = 0

            previousNUmber = ''
            previousResult = 0
            currentNumber = ''
            // console.log(previousNUmber);
        }

        if(clearOption.innerHTML == "C") {

            displayNumber = 0
            outPut.innerHTML = displayNumber
            clearOption.innerHTML = "AC"
            // console.log(previousNUmber);

            // console.log(displayNumber);
            // let lengthOfDisplay = displayNumber.length
            // // console.log(lengthOfDisplay);
            // displayNumber = displayNumber.slice(0, lengthOfDisplay-1)
            // outPut.innerHTML = displayNumber

        }
})










