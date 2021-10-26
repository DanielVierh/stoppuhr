
let hour = 0;
let minute = 0;
let seconds = 0;
let miliSecons = 0;
let round = 0;
let timer;
timerIsRunning = false;


function runTimer(){
    if (timerIsRunning === true) {
        if (miliSecons <= 98) {
            miliSecons++;
            document.getElementById("outMilliseconds").style.color = "lightgreen";
        } else {
            miliSecons = 0;
            if (seconds <= 58) {
                seconds++;
                document.getElementById("outSeconds").style.color = "greenyellow";
            } else {
                seconds = 0;
                if (minute <= 58) {
                    minute++;
                    document.getElementById("outMinutes").style.color = "greenyellow";
                } else {
                    minute = 0;
                    hour++;
                    document.getElementById("outHours").style.color = "greenyellow";
                }
            }
        }
    }
    document.getElementById("outMilliseconds").innerHTML = `${addZero(miliSecons)}`;
    document.getElementById("outSeconds").innerHTML = `${addZero(seconds)}`;
    document.getElementById("outMinutes").innerHTML = `${addZero(minute)}`;
    document.getElementById("outHours").innerHTML = `${addZero(hour)}`;
}



function addZero(val){
    if(val < 10) {
        val = '0' + val;
    }
    return val;
}


function startStopTimer() {
    if(timerIsRunning === false) {
        timerIsRunning = true;
        timer = setInterval(runTimer, 10);
        document.getElementById("btnStartStopp").innerHTML = "II";
        document.getElementById("btnRound").hidden = false;
        document.getElementById("btnReset").hidden = false;
    }else{
        timerIsRunning = false;
        clearInterval(timer);
        document.getElementById("btnStartStopp").innerHTML = "Weiter"
    }
}

function resetTimer(){
    const decision = window.confirm("Stoppuhr wirklich zurücksetzen?");
    if(decision) {
        location.reload();
    }
}

function setRound() {
    const newElem = document.createElement('li');
    round++;
    newElem.innerHTML = `Runde: ${round} -- ${addZero(hour)}:${addZero(minute)}:${addZero(seconds)},${addZero(miliSecons)}`;
    document.getElementById('roundList').appendChild(newElem);  
}