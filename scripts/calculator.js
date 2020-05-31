var numberOne = document.getElementById("numOne");
var numberTwo = document.getElementById("numTwo");
var op = document.getElementById("operator");
var resShow = document.getElementById("resOneTwo");
var ca = document.getElementById("clear")

var v1 = document.getElementById("one");
var v2 = document.getElementById("two");
var v3 = document.getElementById("three");
var v4 = document.getElementById("four");
var v5 = document.getElementById("five");
var v6 = document.getElementById("six");
var v7 = document.getElementById("seven");
var v8 = document.getElementById("eight");
var v9 = document.getElementById("nine");
var v0 = document.getElementById("zero");
var vplus = document.getElementById("plus");
var vminus = document.getElementById("minus");
var vmulti = document.getElementById("multi");
var vdivide = document.getElementById("divide");
var vres = document.getElementById("result");

var numCheck = 0;
var num1 = "";
var num2 = "";

v1.addEventListener("click", getNumber);
v2.addEventListener("click", getNumber);
v3.addEventListener("click", getNumber);
v4.addEventListener("click", getNumber);
v5.addEventListener("click", getNumber);
v6.addEventListener("click", getNumber);
v7.addEventListener("click", getNumber);
v8.addEventListener("click", getNumber);
v9.addEventListener("click", getNumber);
v0.addEventListener("click", getNumber);

vplus.addEventListener("click",getOperator);
vminus.addEventListener("click",getOperator);
vmulti.addEventListener("click",getOperator);
vdivide.addEventListener("click",getOperator);

/** 
numberOne.addEventListener("input",makeInvalid);
numberTwo.addEventListener("input",makeInvalid);
op.addEventListener("input",makeInvalid);
resShow.addEventListener("input",makeInvalid);
**/
vres.addEventListener("click",getResult);

ca.addEventListener("click",clearAll);

function getNumber()
{
    if(numCheck==0)
    {
        tempnum = this.attributes["data-value"].value;
        console.log(tempnum);
        num1 = num1 + tempnum;
        console.log(num1);
        numberOne.value = num1
    }
    else if(numCheck==1)
    {
        tempnum = this.attributes["data-value"].value;
        console.log(tempnum);
        num2 = num2 + tempnum;
        console.log(num2);
        numberTwo.value = num2;
    }
}

function getOperator()
{
    numCheck=1;

    operation = this.attributes["data-value"].value;
    console.log(operation);
    op.value = operation;
}

function getResult()
{
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);
    console.log(number2)

    if(operation == '+')
    {
        vres = number1 + number2;
    }

    else if(operation == '-')
    {
        vres = number1-number2;
    }
    else if(operation == '*')
    {
        vres = number1*number2;
    }
    else if(operation == '/')
    {
        vres = number1/number2;
    }

    console.log(vres);
    resShow.value = vres;
}

function clearAll()
{
    num1 = "";
    num2 = "";
    op= "";
    resShow = "";
    numCheck = 0;
}

