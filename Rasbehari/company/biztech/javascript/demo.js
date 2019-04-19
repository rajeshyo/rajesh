
//Array.....
        // 0      1      2
/*var car=["BMW","Volvo","Audi"];

document.write("<h2>"+car[2]+"</h2");
car.push(2);
for(var i=0;i<car.length;i++)
{

document.write("<h2>"+car[i]+"</h2>");

}
*/


//Function calling.....

/*function addNumber(a,b)
{
 var c=a+b;   
 return c;
}
var output=addNumber(3,5);//function call
document.write("<h1>The result "+output+"</h1>");
*/
/*var b=10;
function myfun()
{
    var a=5;
    document.write("<h1>local "+a+"</h1>");
    document.write("<h1>global "+b+"</h1>");
}
 myfun();*/


//Objects.....
/*
var car ={
car_brand:"Tesla",
car_modal:"Model123",
price:350000,

//method here..
teslaAutopilot:function()
{

  document.write( "<h2>This is car has Auto piloat</h2>");
}

}
car.teslaAutopilot();

document.write("<h1>"+car.car_brand+car.car_modal+"</h1>");
*/

//function object.......
/*
function car(car_brand,car_modal,price)
{

    this.brand=car_brand;
    this.modal=car_modal;
    this.price=price;

this.teslaAutopilot=function()
{
    document.write( "<h2>This is car has Auto </h2>");
}
}

//delete car.price;
var c1=new car("Tesla","modal-231",20000000);
var c2=new car("BMW","modal-7431",40000000);
//delete c1.price;


document.write("<h1>"+c1.modal+" "+c1.brand+" "+c1.price+"</h2>");

document.write("<h1>"+c2.modal+" "+c2.brand+" "+c2.price+"</h2>");
c1.teslaAutopilot();
*/



//DOM (Document Object Modal)
/*
function buttonClick()
{
    var n1=parseInt(document.getElementById("t1").value);
    var n2=parseInt(document.getElementById("t2").value);
    var tot=n1+n2;

    alert("Result="+tot);
}
*/
/*

function fn1()
{
   var pass1=document.getElementById("text1").value;
   var pass2=document.getElementById("text2").value;
   var rb1=document.getElementById("rb1");
   var rb2=document.getElementById("rb2");
   var select=document.getElementById("selectbox");

if(pass1=="" && pass2==""){
    alert("Enter password...");

}
  else if(pass1==pass2){
   // alert("password is correct");
      }

   else{
       alert("password is wrong....");
   }



   if(rb1.checked==true)
   {
       alert("You selected"+rb1.value);
   }
   else if(rb2.checked==true)
   {
    alert("You selected "+rb2.value);
   }
   else{
       alert("please select your department");
   }
alert(select.options[select.selectedIndex].value);

}   
 
*/














