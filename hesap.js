let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sound = document.getElementById('clickSound');

let string ='';

buttons.forEach( element => {
    element.addEventListener('click',(b) => {

        sound.currentTime = 0; 
        sound.play();

        if(b.target.innerText == '=') {
            string= String(eval(string));
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL') {
            string = string.substring(0,string.length - 1);
            inputBox.value = string;
        }
        else if(b.target.id == 'plusminus') {
            string = String(-eval(string));
            inputBox.value = string;
        }
        else{
            string += b.target.innerText;
            inputBox.value = string;
        }
    })
})