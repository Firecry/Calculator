var screen = document.getElementById('screen')
var buttons = document.querySelectorAll('div#button')

dragElement(document.getElementById("main"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {

      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {

      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {

      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

setInterval(
    ()=>{
            const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    
            screen.style.backgroundColor = colorHex
            buttons.forEach(button=>{
                button.style.border = `1px solid ${colorHex}`
                button.style.color = `${colorHex}`
            })
}, 1500)

function handleClick(e){

    switch (e.target.innerHTML) {
        case 'C':
            screen.innerHTML = 0
        break;
        case '←':
            if(screen.innerHTML.length === 1){
                screen.innerHTML = 0
            }
            else{
                screen.innerHTML = screen.innerHTML.slice(0, -1)
            }
        break;
        case '⅟x':
            screen.innerHTML = 1/(screen.innerHTML)
        break;
        case 'x²':
            screen.innerHTML = screen.innerHTML * screen.innerHTML
        break;
        case '²√x':
            screen.innerHTML = Math.sqrt(screen.innerHTML)
        break;
        case '/':
            if(screen.innerHTML.endsWith('+') || screen.innerHTML.endsWith('-') || screen.innerHTML.endsWith('*') || screen.innerHTML.endsWith('/')){
                
            }
            else{
                screen.innerHTML += e.target.innerHTML
            }
        break;
        case '*':
            if(screen.innerHTML.endsWith('+') || screen.innerHTML.endsWith('-') || screen.innerHTML.endsWith('*') || screen.innerHTML.endsWith('/')){
                
            }
            else{
                screen.innerHTML += e.target.innerHTML
            }
        break;
        case '-':
            if(screen.innerHTML.endsWith('+') || screen.innerHTML.endsWith('-') || screen.innerHTML.endsWith('*') || screen.innerHTML.endsWith('/')){
                
            }
            else{
                screen.innerHTML += e.target.innerHTML
            }
        break;
        case '+':
            if(screen.innerHTML.endsWith('+') || screen.innerHTML.endsWith('-') || screen.innerHTML.endsWith('*') || screen.innerHTML.endsWith('/')){

            }
            else{
                screen.innerHTML += e.target.innerHTML
            }
        break;
        case '+/-':
            screen.innerHTML = screen.innerHTML * -1
        break;
        case '.':
            screen.innerHTML += e.target.innerHTML
        break;
        case '=':
            screen.innerHTML = eval(screen.innerHTML)
        break;
        default:
            if(screen.innerHTML.startsWith('0')){
                screen.innerHTML = ''
                screen.innerHTML += e.target.innerHTML
            }
            else{
                screen.innerHTML += e.target.innerHTML
            }
    }
}



buttons.forEach(button=>{
        button.addEventListener('click', handleClick)
    })