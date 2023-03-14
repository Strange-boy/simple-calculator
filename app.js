
/* first we need to select the screen*/
const screenDisplay = document.querySelector('.screen');

/*Next step is to select all the buttons */
const allButtons = document.querySelectorAll('button')

/*here we would use an array to store all the calculated values */
let calculations = [];
let totalCalculations = 0;

/*here we are calling a call back function */
function calculate(button){
    const value = button.textContent;
    if(value === "CLEAR"){
        calculations = [];
        screenDisplay.textContent = '.';
    } else if(value === '='){
        screenDisplay.textContent =  eval(totalCalculations);
    } else if(value === 'Del'){
        calculations.pop();
        totalCalculations = calculations.join('');
        screenDisplay.textContent = totalCalculations;
    } else {

        calculations.push(value);
        // console.log(calculations);
        //inorder to display the content on the screen, we use
        totalCalculations = calculations.join('');
        screenDisplay.textContent = totalCalculations;
    }
}

//now we have to loop through all the elements of the button to display the number on the screen
allButtons.forEach(button => button.addEventListener('click',() => calculate(button)))