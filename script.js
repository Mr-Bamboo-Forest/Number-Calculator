//Square Number Calculate
function squarecalc(){
    var squaresolveanswer = Number(document.getElementById("squaresolve").value * Number(document.getElementById("squaresolve").value));
    document.getElementById("squareanswer").innerText = comma(squaresolveanswer);  
}
//Cube Number Calculate
function cubecalc(){
    var cubesolveanswer = Number(document.getElementById("cubesolve").value * document.getElementById("cubesolve").value * document.getElementById("cubesolve").value);
    document.getElementById("cubeanswer").innerText = comma(cubesolveanswer);  
}
//Triangle Number Calculate
function trianglecalc(){
    var trianglenumber = Number(document.getElementById("trianglesolve").value * trianglenumber++)/2;
    document.getElementById("triangleanswer").innerText = comma(trianglenumber);  
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
    document.getElementById("tetrahedralanswer").innerText = comma(tetrahedrald6);  
}
//Fibonaci Number Calculate
function fibo( num){  
    var n1 = 0;  
    var n2 = 1;  
    var temp;  
    var i = 0;  
    for (i = 0; i < num; i++){  
        temp = n1 + n2;  
        n1 = n2; 
        n2 = temp;
    }  
    return n2;  
}  
function fibonaccicalc(){
    var f1 = Number(document.getElementById("fibonaccisolve").value);  
    document.getElementById("fibonaccianswer").innerText = comma(fibo(f1));  
}
//Arithmetic Progression
function arithmeticcalc(){
    const a = Number(document.getElementById("arithmeticsolve1").value), b = Number(document.getElementById("arithmeticsolve2").value);
    const N = Number(document.getElementById("arithmeticsolvef").value);
    const findNthTerm = (first, second, num) => {
        const diff = second - first;
        const fact = (num - 1) * diff;
        const term = first + fact;
        return term;
    };
    document.getElementById("arithmeticanswer").innerText = comma(findNthTerm(a, b, N));
    console.log(findNthTerm(a, b, N));
}

//comma
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
