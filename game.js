// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = document.getElementById("number1")
var num2 = document.getElementById("number2")
let s
let num_1
let num_2

function Randomnum(){
num_1 = Math.round(Math.random()*100)
num_2 = Math.round(Math.random()*100)
if (num_1<num_2){
    s=num_1+num_2
    num_1=s-num_1
    num_2=s-num_1
}

num1.innerHTML=num_1
num2.innerHTML=num_2
}

Randomnum()

// Iteration 3: Creating variables required to make the game functional
 let score = 0
 let time = 5
 let intervalid



// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3 = document.getElementById('number3')


// Iteration 5: Creating a randomise function to make the game functional
 
function Arithmetic(){
let aritharr = ["+", "*", "-", "/","%"]
let randomindex = Math.round( Math.random()*4)
 return aritharr[randomindex]

}

let num_3
function newnum3(){
let operation = Arithmetic()

if (operation === "+"){

    num_3= num_1+num_2
}

else if (operation === "-"){

    num_3= num_1-num_2
}

else if (operation === "*"){

    num_3= num_1*num_2
    
}

else if (operation === "/"){

    num_3= num_1/num_2
    Math.round(num_3)
}

else if (operation === "%"){

    num_3= num_1%num_2
    Math.round(num3)
}

num3.innerHTML= num_3

}
newnum3()

// Iteration 6: Making the Operators (button) functional

document.getElementById("plus").onclick = function(){

if(num_1 +num_2 === num_3){
next()
}
else{
over()
}

}

document.getElementById("minus").onclick = function(){

    if(num_1 -num_2 === num_3){
    next()
    }
    else{
    over()
    }
    
    }

    document.getElementById("divide").onclick = function(){

        if(Math.round(num_1 /num_2) === num_3){
        next()
        }
        else{
        over()
        }
        
        }

        document.getElementById("mul").onclick = function(){

            if(num_1 *num_2 === num_3){
            next()
            }
            else{
            over()
            }
            
            }

            document.getElementById("modulus").onclick = function(){

                if(num_1 %num_2 === num_3){
                next()
                }
                else{
                over()
                }
                
                }


function next(){

score ++
time =5
Randomnum()
newnum3()

}

function over(){

    clearInterval(intervalid)
    localStorage.setItem("score", score)
    location.href = "gameover.html"

}



// Iteration 7: Making Timer functional

intervalid = setInterval(function() {
    document.getElementById("timer").innerText = time
    time--
    if (time<= 0){
    
        over()
    } }, 1000); 

        
    
