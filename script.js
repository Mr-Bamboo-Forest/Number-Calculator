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
    var trianglesolveanswer = document.getElementById("trianglesolve").value;
    var trianglenumber = trianglesolveanswer;
    var trianglenumberadd1 = trianglenumber; 
    trianglenumberadd1 ++;
    var trianglenumber2 = trianglenumber * trianglenumberadd1;
    trianglenumber = trianglenumber2 /2;
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
}
//Prime or Composite?
function primecalc(){
    var isPrime = "true";
    var corp = Number(document.getElementById("primesolve").value); // corp means composite or prime, not corporation
    if (corp <= 0){
        document.getElementById("primeanswer").innerText = "Can't calculate with 0 or a negative number."
    }
    if (corp === 1) {
        document.getElementById("primeanswer").innerText = "1 is neither prime nor composite number.";
    }
    else if (corp > 1) {
        for (let z = 2; z < corp; z++) {
            if (corp % z == 0) {
                isPrime = "false";
                break;
            }
        }
        if (isPrime == "true") {
            document.getElementById("primeanswer").innerText = comma((corp)) + (" is a prime number (not a composite number).");
        } else {
            document.getElementById("primeanswer").innerText = comma((corp)) + (" is a composite number (not a prime number).");
        }
    }
}

//comma
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
