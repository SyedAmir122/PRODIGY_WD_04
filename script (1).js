let time = 0;
let timer = null;

function formatTime(ms){

let totalSeconds = Math.floor(ms / 1000);
let hours = String(Math.floor(totalSeconds / 3600)).padStart(2,'0');
let minutes = String(Math.floor((totalSeconds % 3600)/60)).padStart(2,'0');
let seconds = String(totalSeconds % 60).padStart(2,'0');

return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay(){
document.getElementById("display").innerText = formatTime(time);
}

function start(){

if(timer) return;

timer = setInterval(()=>{
time += 1000;
updateDisplay();
},1000);

}

function pause(){
clearInterval(timer);
timer = null;
}

function reset(){
pause();
time = 0;
updateDisplay();
document.getElementById("laps").innerHTML="";
}

function lap(){

if(time === 0) return;

let li = document.createElement("li");
li.innerText = formatTime(time);

document.getElementById("laps").appendChild(li);
}