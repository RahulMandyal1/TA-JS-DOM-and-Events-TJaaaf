let calculatorScreen = document.querySelector('#calculator-screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
 buttons.forEach(btn=>{
     btn.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            calculatorScreen.value = screenValue;
        }
        else if (buttonText == '=') {
            calculatorScreen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            calculatorScreen.value = screenValue;
        }
    
    });
});
