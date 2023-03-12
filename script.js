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
//Circle Calculate
function circlecalc(){
    var CircumferenceDiameter = document.getElementById("CircumferenceDiameterSolve").value;
    var CircumferenceDiameter2 = CircumferenceDiameter * 2 * Math.PI;
    var CircumferenceDiameter3 = (CircumferenceDiameter * CircumferenceDiameter);
    CircumferenceDiameter3 = CircumferenceDiameter3 * Math.PI;
    CircumferenceDiameter2 = CircumferenceDiameter2;
    document.getElementById("circleroundthing").innerText = ("All values are rounded to 5 decimal points.");
    document.getElementById("circleanswer").innerText = ("Circumferenc = ") + Math.round((CircumferenceDiameter2 + Number.EPSILON) * 100000) / 100000;
    document.getElementById("circlediameteranswer").innerText = ("Diameter = ") + Math.round(((CircumferenceDiameter * 2) + Number.EPSILON) * 100000) / 100000;
    document.getElementById("circleareaanswer").innerText = ("Area = ") + Math.round((CircumferenceDiameter3 + Number.EPSILON) * 100000) / 100000;
};
//circles
function circlecalcradius(){
    var diameter = document.getElementById("RadiusSolve").value;
    var radius = diameter * 2;
    document.getElementById("circleroundthing2").innerText = ("All values are rounded to 5 decimal points.");
    document.getElementById("circleradius").innerText = ("Radius = ") + Math.round((radius + Number.EPSILON) * 100000) / 100000;
};
//random number generator
function choosenumber(){
    var secondrandomnumber = Number(document.getElementById("lastnumber").value);
    var randomnumberfinal = Math.floor(Math.random() * secondrandomnumber) + 1;
    if (randomnumberfinal == 69) {
        randomnumberfinal = ("69, lol");
    }
    document.getElementById("randomanswer").innerText = ("Your random number (inclusive of 1 and ") + secondrandomnumber + (") is ") + randomnumberfinal;
};
//loan calculator
function calculateloan() {
    var amount = Number(document.getElementById("loanamount").value)
    var rate = Number(document.getElementById("interestrate").value)
    var months = Number(document.getElementById("numberofmonths").value)
    var interest = (amount * (rate * 0.01)) / months;
    var totalamount = ((amount / months) + interest).toFixed(2);
    var totalamountwithoutinterest = ((amount / months)).toFixed(2);
    document.getElementById("interest").innerText = ("Interest is $") + interest;
    document.getElementById("monthlypayment").innerText = ("Monthly payment (2 d.p., and with interest) is $") + totalamount;
    document.getElementById("monthlypaymentwithoutinterest").innerText = ("Monthly payment (2 d.p. and without interest) is $") + totalamountwithoutinterest;
};

//comma
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
}