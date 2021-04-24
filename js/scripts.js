var screen = document.getElementById("screen-result");

function getData(ref) {
    let value = ref.value;
    screen.value+=value;
}

window.onload = function (){
    let bgPath = './img/bg/';
    let bgQuantity = 2;
    let num = Math.round(Math.random()*(bgQuantity-1));
    document.getElementById('body').style.backgroundImage= `url(${bgPath}bg${num}.jpg)`;
}


function clean(){
    screen.value="";
}
function backspace() {
    screen.value=screen.value.slice(0,screen.value.length-1);
}

function solve() {
    if(screen.value!="")try{
        screen.value = eval(screen.value);
    }catch(error){
        screen.value="Error";
        let buzzer=new Audio("./audio/buzzer.mp3");
        let audioLoad=buzzer.play();
        audioLoad.then(()=>setTimeout(() => clean(),500));
    }
}