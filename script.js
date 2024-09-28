var hit;
var score = 0;
var timer = 60;

function hitNum(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit-val").textContent = hit;
}

function createBubbles(){
    var content = "";
    for(let i=1; i<=112; i++){
        rndm = Math.floor(Math.random()*10);
        content += `<div class="bubble">${rndm}</div> `;
    }

    document.querySelector("#btm").innerHTML = content;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer-val").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#btm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}


document.querySelector("#btm").addEventListener("click", function(dets){        let clickedOn = Number(dets.target.textContent);
    let clickedON = Number(dets.target.textContent)
    console.log(clickedOn);
    if(hit == clickedOn){
        score += 10;
        document.querySelector("#score-val").textContent = score;
        createBubbles();
        hitNum();
    }
})


hitNum();
runTimer();
createBubbles();