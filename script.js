//Square Number Calculate
function squarecalc(){
    var squaresolveanswer = document.getElementById("squaresolve").value * document.getElementById("squaresolve").value;
    document.getElementById("squareanswer").innerText = squaresolveanswer;  
}

//Cube Number Calculate
function cubecalc(){
    var cubesolveanswer = document.getElementById("cubesolve").value * document.getElementById("cubesolve").value * document.getElementById("cubesolve").value;
    document.getElementById("cubeanswer").innerText = cubesolveanswer;  
}
//Triangle Number Calculate
function trianglecalc(){
    var trianglesolveanswer = document.getElementById("trianglesolve").value;
    var trianglenumber = trianglesolveanswer; // 1
    var trianglenumberadd1 = trianglenumber; 
    trianglenumberadd1 ++;
    var trianglenumber2 = trianglenumber * trianglenumberadd1; //3
    trianglenumber = trianglenumber2 /2;//1.5
    document.getElementById("triangleanswer").innerText = trianglenumber;  
}