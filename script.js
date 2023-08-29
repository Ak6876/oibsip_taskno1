let result = 0.0;
let buffer = "0";
let operator;
let decimalAdded = false;
const screen = document.querySelector('.screen');
screen.innerText = buffer;
function handleClick(value){

    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
    
}

function handleSymbol(symbol){
    switch(symbol){
        case 'clear':
                    buffer = '0';
                    result = 0;
                    decimalAdded = false;
                    break;
        case '=':
                if(operator === null){return}            
                handleOperation(parseFloat(buffer));
                operator = null;
                buffer = result.toString();
                result = 0;
                decimalAdded = false;
                break;
        case '←':
                if(buffer.length ===1){
                    buffer = '0';
                }else{
                    buffer = buffer.slice(0,buffer.length-1);
                }
                if (operator === null) {
                    result = parseFloat(buffer); 
                }
                break;
        case '.':if (!decimalAdded) {
                    buffer += ".";
                    decimalAdded = true;
                }
                break;
        case '+':
        case '-':
        case 'x':
        case '/':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){return;}
    const floatBuffer = parseFloat(buffer);
    if(result === 0){
        result = floatBuffer;
    }else{
        handleOperation(floatBuffer);
    }
    operator = symbol;
    buffer = '0';
    decimalAdded = false;
}

function handleOperation(floatBuffer){
    if(operator === '+'){
        result += floatBuffer;
    }else if(operator === '-'){
        result -= floatBuffer;
    }else if (operator === 'x') {
        result *= floatBuffer;
    }else if (operator === '/') {
        result /= floatBuffer;
        result=parseFloat(result.toFixed(3))
    }
}

function handleNumber(num){
    if(buffer === '0' ){
        buffer = num;
    }else {
        buffer += num;
    }
}

