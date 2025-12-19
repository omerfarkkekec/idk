let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sound = document.getElementById('clickSound');
let historyList = document.getElementById('historyList');
let clearHistoryBtn = document.getElementById('clearHistory');


let string ='';

buttons.forEach( element => {
    element.addEventListener('click',(b) => {

        sound.pause();
        sound.currentTime = 0; 
        sound.play().catch(e => console.log("Ses çalma hatası:", e));

        if(b.target.innerText == '=') {
            let eskiString = string;
            string= String(eval(string));
            inputBox.value = string;

            let li = document.createElement('li');
            li.innerText = `${eskiString} = ${string}`;
    
            let sonuc = string;
            li.onclick = () => {
               string = sonuc; 
               inputBox.value = sonuc;
            };
        historyList.prepend(li); // En yeni işlemi en üste ekle
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
            if(b.target.id !== 'clearHistory'){
            string += b.target.innerText;
            inputBox.value = string;
            }
        }
    })
})
clearHistoryBtn.onclick = () => {
    historyList.innerHTML = '';

};
