var name = prompt("What's your name?");



if (name === "no" || name === "No" || name === "yes" || name === "Yes"){
    document.write("That's not a name..");
}  else if (name === "") {
    document.write("You forgot to write your name..");
} else if (name === "hello" || name === "hi" || name === "Hello" || name === "Hi") {
    document.write("Well, hello to you too.");
}  else if (name === null) {
    document.write("bro you didn't write anything");
}else {
    document.write("Welcome, " + name + "!");
}

function buttonAddition() {
    var num1 = prompt("Choose a number"); 
    var num2 = prompt("Choose the second number");
    var fnum1 = parseInt (num1);
    var fnum2 = parseInt (num2);
    var sum = fnum1 + fnum2;
    document.getElementById("sum").innerHTML = "the sum of the numbers you wrote is " + sum;
}

function buttonSubtraction() {
    var num1 = prompt("Choose a number"); 
    var num2 = prompt("Choose the second number");
    var fnum1 = parseInt (num1);
    var fnum2 = parseInt (num2);
    var difference = fnum1 - fnum2;
    document.getElementById("difference").innerHTML = "the difference of the numbers you wrote is " + difference;
}

function buttonMultiply() {
    var num1 = prompt("Choose a number"); 
    var num2 = prompt("Choose the second number");
    var fnum1 = parseInt (num1);
    var fnum2 = parseInt (num2);
    var product = fnum1 * fnum2;
    document.getElementById("product").innerHTML = "the product of the numbers you wrote is " + product;
}

function buttonDivide() {
    var num1 = prompt("Choose a number"); 
    var num2 = prompt("Choose the second number");
    var fnum1 = parseInt (num1);
    var fnum2 = parseInt (num2);
    var quotient = fnum1 / fnum2;
    document.getElementById("quotient").innerHTML = "the quotient of the numbers you wrote is " + quotient;
}


function passwordEntered() {
    
    var passAnswer = document.getElementById("passbox").value;
    document.getElementById("passbox").value = "";
    
    if (passAnswer === "hamilton" || passAnswer === "Hamilton" ){
    document.getElementById("hamilton").innerHTML = "entering this password probably makes you think you'll get something about Alexander Hamilton. <br> And that's because you're right. <br><i> Pardon me, are you Aaron Burr, sir? <br> No. <br> Alright, thank you sir! <br> (history never happens and hamilham's story ends here) </i>";
    document.getElementById("h").style.visibility = "visible";
    } 
}





     
var fruitNum = Math.floor(Math.random() * 40) + 5;
var girlNameGen = Math.floor(Math.random() * 17);
var girlName;
var fruitNameGen = Math.floor(Math.random() * 5);
var fruitName;
var num1 = Math.floor(Math.random() * 4) + 2;
var num2 = Math.floor(Math.random() * 12) + 5;
var boyNameGen = Math.floor(Math.random() * 7);
var boyName;


    
     
     if (girlNameGen === 0){
         girlName = "Angelica";
     } else if (girlNameGen === 1){
         girlName = "Eliza";
     } else if (girlNameGen === 2){
         girlName = "Alex";
     }else if (girlNameGen === 3){
         girlName = "Sophie";
     }else if (girlNameGen === 4){
         girlName = "Anne";
     }else if (girlNameGen === 5){
         girlName = "Jane";
     }else if (girlNameGen === 6){
         girlName = "Bianca";
     }else if (girlNameGen === 7){
         girlName = "Jenny";
     }else if (girlNameGen === 8){
         girlName = "Michelle";
     }else if (girlNameGen === 9){
         girlName = "Shreya";
     }else if (girlNameGen === 10){
         girlName = "Shayna";
     }else if (girlNameGen === 11){
         girlName = "Paige";
     }else if (girlNameGen === 12){
         girlName = "Via";
     }else if (girlNameGen === 13){
         girlName = "Oralie";
     }else if (girlNameGen === 14){
         girlName = "Marilyn";
     }else if (girlNameGen === 15){
         girlName = "Aaliyah";
     }else if (girlNameGen === 16){
         girlName = "Lea";
     }
     
    if (boyNameGen === 0){
        boyName = "Jack";
    } else if (boyNameGen === 1){
        boyName = "Connor";
    } else if (boyNameGen === 2){
        boyName = "Kenric";
    }else if (boyNameGen === 3){
        boyName = "Alec";
    }else if (boyNameGen === 4){
        boyName = "August";
    }else if (boyNameGen === 5){
        boyName = "Shawn";
    }else if (boyNameGen === 6){
        boyName = "Dari";
    }
 
     
     if (fruitNameGen === 0){
         fruitName = "apples";
     } else if (fruitNameGen === 1){
         fruitName = "oranges";
     } else if (fruitNameGen === 2){
         fruitName = "bananas";
     } else if (fruitNameGen === 3){
         fruitName = "mangoes";
     } else if (fruitNameGen === 4){
         fruitName = "pears";
     }
    
    
 function generateQuestion(){
     
document.getElementById("submit-area").style.visibility = "visible";



document.getElementById('number').innerHTML = girlName + " had " + fruitNum + " " + fruitName + ". " + boyName + " gave her " + num1 + " times that number of " + fruitName + ", but then took " + num2 + " away. How many " + fruitName + " does she have now?";
    
   
     
     
 }



function checkAnswer() {
    
    let correctAnswer = (fruitNum * num1) - num2;
    var userAnswer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    document.getElementById("answer-right-or-wrong").style.visibility = "visible";
   document.getElementById("mathQuestionGenerator").style.visibility = "hidden";
   
    if(userAnswer == correctAnswer){
        document.getElementById("results").innerHTML = "You're correct! Refresh this page for another question.";
    } else {
        document.getElementById("results").innerHTML = "Sorry, you're incorrect. Refresh the page to get a new question.";
    }

    document.getElementById("submit-area").style.visibility = "hidden";
}

function refresh(){
    window.location.reload();
}
  
       know = {
        "hello" : "oh hi",
         "hi" : "oh hello",
        "Hello" : "oh hi",
         "Hi" : "oh hello",
        "hello." : "oh hi",
         "hi." : "oh hello",
        "Hello." : "oh hi",
        "Hi." : "oh hello",
         "how are you?" : "tired",
		"i" : "j",
	    "screw you" : "that's rude uwu",
		"do you like to draw" : "I mean I guess, I'm not even human tho so how can I",
		"can you draw" : "can a fish drown?",
		"why are you so mean" : "aw I didn't mean to be mean :((((",
		"bye" : "oh ok bye",
		"bai" : "bai uwu",
		":3" : "owo",
		"uwu" : "uwu",
		"owo" : ":3",
		"no" : "but why? :(",
		"No." : "but y D:",
		"No" : "but y D:",
        "you suck" : "you are meen :("
            };
            function talk() {
                var user = document.getElementById("userBox").value;
                document.getElementById("userBox").value = "";
                document.getElementById("chatLog").innerHTML += "<div id='you'>"+ user +"<br></div>";
		
                if (user in know) {
                    setTimeout(() => {
                    document.getElementById("chatLog").innerHTML += "<div id='them'>" + know[user] +"<br></div>";
		    }, 700);
                } else {
  		    setTimeout(() => {
                    document.getElementById("chatLog").innerHTML += "Sorry dude, I don't know how to respond to that because the person who programmed me SUCKS <br>";
		    }, 700);
                }                                                                       
            } 

    
