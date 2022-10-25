function squarecalc(){
    let squaresolveanswer = document.getElementById("squaresolve").value * document.getElementById("squaresolve").value;
    document.getElementById("squareanswer").innerText = squaresolveanswer;  
}

function cubecalc(){
    let cubesolveanswer = document.getElementById("cubesolve").value * document.getElementById("cubesolve").value * document.getElementById("cubesolve").value;
    document.getElementById("cubeanswer").innerText = cubesolveanswer;  
}