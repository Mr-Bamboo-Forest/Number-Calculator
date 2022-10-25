//Square Number Calculate
function squarecalc(){
    var squaresolveanswer = Number(document.getElementById("squaresolve").value * document.getElementById("squaresolve").value);
    document.getElementById("squareanswer").innerText = squaresolveanswer;  
}

//Cube Number Calculate
function cubecalc(){
    var cubesolveanswer = Number(document.getElementById("cubesolve").value * document.getElementById("cubesolve").value * document.getElementById("cubesolve").value);
    document.getElementById("cubeanswer").innerText = cubesolveanswer;  
}
//Triangle Number Calculate
function trianglecalc(){
    var trianglesolveanswer = Number(document.getElementById("trianglesolve").value);
    var trianglenumber = trianglesolveanswer; // 1
    var trianglenumberadd1 = trianglenumber; 
    trianglenumberadd1 ++;
    var trianglenumber2 = trianglenumber * trianglenumberadd1; //3
    trianglenumber = trianglenumber2 /2;//1.5
    document.getElementById("triangleanswer").innerText = trianglenumber;  
}
//Tetrahedral Number Calculate
function tetrahedralcalc(){
    var tetrahedralsolveanswer = Number(document.getElementById("tetrahedralsolve").value);
    var t = tetrahedralsolveanswer;
    var tetrahedraladd1 = t+=1;
    var tetrahedraladd2 = tetrahedraladd1 +=1;
    tetrahedraladd1 --;
    var tetrahedraladd3 = tetrahedraladd2 +=1;
    tetrahedraladd2 --;
    var tetrahedral = tetrahedraladd1 * tetrahedraladd2 * tetrahedraladd3;
    var tetrahedrald6 = tetrahedral /6;
    document.getElementById("tetrahedralanswer").innerText = tetrahedrald6;  
}