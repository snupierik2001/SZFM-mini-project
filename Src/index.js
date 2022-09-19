let display = document.getElementById('display');
display.innerText='0';

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '0';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '/':
                display.innerText += e.target.innerText;
                break;
            case '*':
                display.innerText += e.target.innerText;
                break;
            default:
                if(display.innerText=='0'){
                    display.innerText='';
                    display.innerText += e.target.innerText;
                }
                else{
                display.innerText += e.target.innerText;
                }
        }
    });
});