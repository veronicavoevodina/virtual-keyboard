const textarea = document.createElement('textarea');
textarea.id = "textarea";

textarea.type = "text";
let div = document.createElement('div');
document.body.prepend(div);
document.body.prepend(textarea);
div.id = "keyboard";
const keyboard = document.querySelector("#keyboard");



let language = document.createElement('div');
language.className = "language";
document.body.append(language);
let input = document.createElement('p');
input.className = "English langItem change";
input.innerHTML = "English";
language.append(input);
input = document.createElement('p');
input.className = "Russian langItem";
input.innerHTML = "Russian";
language.append(input);

let langkey = document.createElement('p');
langkey.className = "langkey";
langkey.innerHTML = "Press Shift+Ctrl to change language";
language.append(langkey);

let os = document.createElement('p');
os.className = "os";
os.innerHTML = "Keyboard created in Windows OS";
language.append(os);

language = document.querySelectorAll('.langItem');




div = document.createElement('div');
keyboard.append(div);
keyboard.firstChild.setAttribute("id", "firstRow");



div = document.createElement('div');
keyboard.append(div);
keyboard.childNodes[1].setAttribute("id", "secondRow");



div = document.createElement('div');
keyboard.append(div);
keyboard.childNodes[2].setAttribute("id", "thirdRow");



div = document.createElement('div');
keyboard.append(div);
keyboard.childNodes[3].setAttribute("id", "fourthRow");

div = document.createElement('div');
keyboard.append(div);
keyboard.childNodes[4].setAttribute("id", "fifthRow");


const en = {
    firstRow: ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
    secondRow: ["Tab", "q", "w", "e", "r", "t","y","u","i","o","p","[","]", "&#47" ,"del"],
    thirdRow: ["Caps Lock", "a", "s", 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#34;', "Enter"],
    fourthRow: ["Shift","&#47", "z", 'x', "c", "v", "b", "n", "m", ",", ".", "/","&#8593;", "Shift"],
    fifthRow: ["Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"],
}
const ru = {
    firstRow: ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
    secondRow: ["Tab", "й", "ц", "у", "к", "е","н","г","ш","щ","з","х","ъ", "&#47" ,"del"],
    thirdRow: ["Caps Lock", "ф", "ы", 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', "Enter"],
    fourthRow: ["Shift","&#47", "я", 'ч', "с", "м", "и", "т", "ь", "б", "ю", ".","&#8593;", "Shift"],
    fifthRow: ["Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"],
}
const letters = ["q", "w", "e", "r", "t","y","u","i","o","p", "a", "s", 'd', 'f', 'g', 'h', 'j', 'k', 'l', "z", 'x', "c", "v", "b", "n", "m",
"й", "ц", "у", "к", "е","н","г","ш","щ","з","х","ъ", "ф", "ы", 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', "я", 'ч', "с", "м", "и", "т", "ь", "б", "ю"];


const obj = {
    "Tab":{9: "Tab", value: false,},
    "Caps Lock":{20: "CapsLock", value: false,},
    "Shift":{16: "Shift", value: false,},
    "Ctrl":{17: "Control", value: false,},
    "Win":{91: "Meta", value: false,},
    " ":{32: " ", value: false,},
    "Alt":{18: "Alt", value: false,},
    "&#8592;":{37: "ArrowLeft", value: false,},
    "&#8595;":{40: "ArrowDown", value: false,},
    "&#8594;":{39: "ArrowRight", value: false,},
    "&#8593;":{38: "ArrowUp", value: false,},
    "del":{46: "Delete", value: false,},
    "Backspace":{8: "Backspace", value: false,},
    "Enter":{13: "Enter", value: false,},

}



let langEn = document.querySelector('.English');
let langRu = document.querySelector('.Russian');
keyboard.childNodes.forEach((el) => {
    let rowNum = en[el.id];
     for (let button = 0; button < rowNum.length; button++ ) {
        div = document.createElement('div');
        div.innerHTML = rowNum[button];
        div.className = "button";
         el.append(div);
     }  
})
let lang;
lang = en;
langRu.addEventListener('click', langRuFunc);
function langRuFunc() {
    lang = ru;
    langRu.classList.add('change');
    langEn.classList.remove('change');
    whatLang(lang);
}
langEn.addEventListener('click', langEnFunc);
function langEnFunc() {
    lang = en;
    whatLang(lang);
    langEn.classList.add('change');
    langRu.classList.remove('change');
    
}
function changeLang() {
    if (lang === ru) {
        langEnFunc()
}
    else {
        langRuFunc()
    }
}
function whatLang(lang) {
    button.forEach(el => el.style.backgroundColor = "");
    keyboard.childNodes.forEach((el) => {
        let rowNum = lang[el.id];
        for (let button = 0; button < rowNum.length; button++ ) {  
            el.childNodes[button].innerHTML = rowNum[button];  
        }
    })
    }
 const button = document.querySelectorAll(".button");

textarea.onkeydown = function(event) {
    for (let i=0; i<button.length; i++) {
        let but = button[i];
        if(event.key === but.innerHTML || event.code === but.className ) {but.classList.toggle('active')}
        
    }
}
    textarea.onkeyup = function() {
        for (let i=0; i<button.length; i++) {
            let but = button[i];
            but.classList.remove('active')   
        }
}

 button.forEach(el => {
    el.onfocus= function() {
        el.classList.add('active')
    }
   })

  function severalKeys(changeLang, ...args) {

    let arrChars = [];                    // массив одновременно нажатых клавиш

    document.addEventListener("keydown", function (event) {
        if (event.repeat) return;         // повторы не обрабатываем
        arrChars.push(event.key);        // запоминаем код нажатой и пока еще не отпущенной клавиши
    });

    document.addEventListener("keyup", function () {
        if (arrChars.length == 0) return; // нечего обрабатывать, завершаем функцию

        let runFunc = true;
        for (let arg of args) { 
                                            // нажаты ли одновременно отслеживаемые клавиши
            if (!arrChars.includes(arg)) {
                runFunc = false;
                break;
                
            }
        }
        if (runFunc) {changeLang()}            

        arrChars.length = 0;              // очистим массив одновременно нажатых клавиш
    });

}
severalKeys(changeLang, 'Control', 'Shift');

button.forEach(el => {
    if (letters.includes(el.innerHTML)){
       el.classList.add('letter');
    }
    if(el.innerHTML === " ")
    {el.classList.add('space')}
    })
let letter = document.querySelectorAll('.letter');

button.forEach(el => {
    el.onmousedown = FuncMousedown;
    el.onmouseup = FuncMouseup;  
      
   })
  
   function FuncMousedown(event) {
      if (event.target.innerHTML in obj) {
        event.target.style.backgroundColor = "rgb(203, 122, 179)";
        if (event.target.innerHTML === "Backspace") {
        textarea.value = textarea.value.substr(0, textarea.value.length-1);
        event.target.style.backgroundColor = "rgb(203, 122, 179)";
        return textarea.value;
         }
         if (event.target.innerHTML === "Tab") {
            event.target.style.backgroundColor = "rgb(203, 122, 179)";
            textarea.value += "    ";
         }
         if (event.target.innerHTML === "Ctrl" || event.target.innerHTML === "Alt" || event.target.innerHTML === "Win" ) {
            event.target.style.backgroundColor = "rgb(203, 122, 179)";
         }
        if (event.target.innerHTML === "Enter") {
            event.target.style.backgroundColor = "rgb(203, 122, 179)";
            textarea.value+="\n";
         }
        if (event.target.innerHTML === " ") {
    event.target.style.backgroundColor = "rgb(203, 122, 179)";
    textarea.value += " ";
         }
         if (event.target.innerHTML === "del") {
            event.target.style.backgroundColor = "rgb(203, 122, 179)";
            let s = textarea.selectionStart;
            textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.substr(textarea.selectionStart+1, textarea.value.length);
         textarea.selectionStart = s;
         textarea.selectionEnd = s;
        }
        if (event.target.innerHTML === "Caps Lock")
{
    
    event.target.style.backgroundColor = "rgb(203, 122, 179)";
    if (keyboard.childNodes[1].childNodes[1].innerHTML === "q" || keyboard.childNodes[1].childNodes[1].innerHTML === "й"){
    letter.forEach(el => {
        el.innerHTML = el.innerHTML.toUpperCase(); 
       
       })
    } else {
        event.target.style.backgroundColor = "";
        letter.forEach(el => el.innerHTML = el.innerHTML.toLowerCase())}
    
         }
         if (event.target.innerHTML === "Shift") {
            event.target.style.backgroundColor = "rgb(203, 122, 179)";
            if (keyboard.childNodes[1].childNodes[1].innerHTML === "q" || keyboard.childNodes[1].childNodes[1].innerHTML === "й"){
            letter.forEach(el => {
                el.innerHTML = el.innerHTML.toUpperCase(); 
               
               })
            } else {
                event.target.style.backgroundColor = "";
                letter.forEach(el => el.innerHTML = el.innerHTML.toLowerCase())}
         }
       }
    else {
          letter.forEach(el => el.style.backgroundColor = "")
          event.target.style.backgroundColor = "rgb(203, 122, 179)";    
      }
    }


   function FuncMouseup(event) {
       if (event.target.innerHTML in obj) {
        event.target.style.backgroundColor = "";
        if (event.target.innerHTML === " ") {event.target.style.backgroundColor = "";}
        if (event.target.innerHTML === "Backspace") {event.target.style.backgroundColor = "";}
        if (event.target.innerHTML === "del") {event.target.style.backgroundColor = "";}

        if (event.target.innerHTML === "Ctrl" || event.target.innerHTML === "Alt" || event.target.innerHTML === "Win" ) {
            event.target.style.backgroundColor = "";
         }
         if (event.target.innerHTML === "Tab") {
            event.target.style.backgroundColor = "";
         }
        if (event.target.innerHTML === "Enter") {
            event.target.style.backgroundColor = "";
        } 
        if (event.target.innerHTML === "Shift") {
            event.target.style.backgroundColor = "";
            if (keyboard.childNodes[1].childNodes[1].innerHTML === "q" || keyboard.childNodes[1].childNodes[1].innerHTML === "й"){
            letter.forEach(el => {
                el.innerHTML = el.innerHTML.toUpperCase(); 
               })
            } else {
                event.target.style.backgroundColor = "";
                letter.forEach(el => el.innerHTML = el.innerHTML.toLowerCase())}
         }
    }
       else {
        event.target.style.backgroundColor = "";
      textarea.value += event.target.innerHTML;
      
       
   }}
 





