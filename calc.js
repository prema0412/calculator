


let previousNUmber = ''
let currentNumber = ''
let displayNumber = "0"
let enteredNumber = ''


//function to display entered numbers on output panel
const displayInputs = ( evnt => {


    clearOption = document.getElementById('clear')

    if (clearOption.innerHTML == "AC") {
        clearOption.innerHTML = "C"
    }
    
    enteredNumber = evnt.target.innerHTML

    console.log(enteredNumber);

    if (displayNumber == 0)
    {
        displayNumber = ''
    }   
    
    if ( displayNumber.includes('.')  && (enteredNumber == '.') )
    {
        Aler("I am checking decimals")
        return
    }
    
    displayNumber += enteredNumber
    currentNumber = enteredNumber
    previousNUmber += enteredNumber
    let outPut = document.getElementById('display')

    outPut.innerHTML = displayNumber


})

//function to perform calculation

const performcalculation = ( evnt => {
    alert("I will calculate soon")
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






