console.log ('Script is loaded 🔥');


var result = document.getElementById('result-box')

var opr = null
var num1 = 0
var num2 = 0

//TODO: add logic for multiple numbers transaction

function handleButtonClick (cmd) {
    if(!isNaN(cmd)) {
        // cmd is a number
        result.value += cmd


    }
    else {
        switch (cmd) {
            case 'AC' : result.value = ''; break;
            case 'CLR': 
                result.value = result.value.slice(0, -1); 
                break;
            case 'PER': 
            case 'DIV':
            case 'MUL':
            case 'SUB':
            case 'ADD':
                num1 = parseInt(result.value)
                opr = cmd
                result.value = ''
                break;
            case 'RES':
                num2 = parseInt(result.value)
                //Todo: add logic for multiple operations
                result.value = num1 + num2
                break;
            case 'DEC': //Todo: add logic for Decimal numbers
        }
    }

    console.log(num1, opr, num2, result.value)
}