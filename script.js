let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let inp = document.querySelector('input')
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText; 
        console.log('Button text is ', buttonText)
        
        switch (buttonText) {
            case "=":
                inp.value = eval(inp.value);
                break;
            
            case "AC":
                inp.value = "";
                break;

            case "DEL":
                var value = inp.value;
                value = value.substring (0, value.length - 1);; // remove the last character
                inp.value = value;
                break;

            default:
                inp.value += buttonText;
                break;
        }
    })
}