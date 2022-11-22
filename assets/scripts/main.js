console.log ('Script is loaded 🔥');

var result = document.getElementById('result-box')
var historyList = document.getElementById('history-box')

var expr = []

function handleButtonClick (cmd) {
    if(!isNaN(cmd) || cmd === '.') {
        // cmd is a number
        result.value += cmd
    }
    else {
        switch (cmd) {
            case 'AC' : 
                result.value = ''; 
                historyList.innerHTML = '';
                expr = []
                break;
            case 'CLR': 
                result.value = result.value.slice(0, -1); 
                break;
            case '%': // modulus operator
            case '/':
            case '*':
            case '-':
            case '+':
                expr.push(result.value) // pushing number
                result.value = ''

                expr.push(cmd) // pushing operand
                break;
            case '=':
                expr.push(result.value) // pushing number
                result.value = ''
                // evaluate the string of expression 
                result.value = eval(expr.join('')).toFixed(3)

                break;
            case 'TOG':
                if(document.body.className.includes('dark')) {
                    document.body.className = ''
                }
                else {
                    document.body.className = 'dark'
                }
                break;
        }
        historyList.innerHTML = expr.join(' ')
    }
}