let palaying = false;
let score;
let action;
let timeremaining
let correctAnswer


// if we click on the start /reset 
document.getElementById("startreset").onclick = function(){
	 //if we are playing
	if(palaying == true){
		location.reload();  // reload page 
	}else{// we are not playing 
		
		//change mode to playing
		palaying = true;
		
		//set score to 0 
		score = 0;
		document.getElementById("scorevalue").innerHTML = score;
		
		// show contdow box 
		show("timeremaining");
		//document.getElementById("timeremaining").style.display = "block"
		timeremaining = 60;
		
		
		document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		
		// hide the game over box 
		hide("gameOver");
		
		//change button to reset
		
		document.getElementById("startreset").innerHTML = "Reset Game";
		
		//start countdown
		startCountdown();
		
		
		//generate a new Q%A
		
		generateQA();
		
	}
}

for(i=1; i<5; i++){
	document.getElementById("box" + i).onclick = 
	function(){
	//check if we are playing
	if(palaying == true){//yes
		if(this.innerHTML == correctAnswer){
			
			//increase score by 1 
		   score++;
			document.getElementById("scorevalue").innerHTML = score;
			
			
			//hide wrong box and show correct box
			
			hide("wrong");
			show("correct");
			setTimeout(function() {
				hide('correct');
			}, 1000);
			
			//generate ner Q&A
			generateQA();
			
		   }else{
			   //wrong answers
			   	hide("correct");
			show("wrong");
			setTimeout(function() {
				hide('wrong');
			}, 1000);
			   
		   }
	}
}

}



  //if we are playing 
// reload page 
// we are not playing 
//set score to 0 
// show contdow box 
// reduce time by 1sec in loops 
// time left
// yes->continue
// no->game over 
//change button to reset 
// generate new Q&A



// if we click on the box
// if we are playing 
// correct
// yes 
// increse score 
// show correct box for 1 sec 
//generate a new Q&A 
// no 
// show try againg box for 1 sec


//funtions

//start counter


function startCountdown(){
	action = setInterval(function(){
		timeremaining -= 1 ;
	document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		if(timeremaining == 0 ){// game over
			clearInterval(action);
			stopCountdown();
			
			show("gameOver");
			
		//document.getElementById("gameOver").style.display = "block";
			
		document.getElementById("gameOver").innerHTML = "<p>Game Over</p> <p>Your score is " + score + ".</p>";
			 
			
			
			hide("timeremaining");
		//	document.getElementById("timeremaining").style.display = "none";	
			
		hide("correct");	
		hide("wrong");	
		palaying = false;	
		document.getElementById("startreset").innerHTML = "Start Game";	
			
		} 
	}, 1000);
}


//stop counter

function stopCountdown(){
	clearInterval(action);
}


//hide an elelmnet
function hide(Id){
	document.getElementById(Id).style.display = "none";
	
}

//show an element
//show an element
function show(Id){
	document.getElementById(Id).style.display = "block";
	
}


// generate questions and multiple answers


function generateQA(){
	let x =  1+ Math.round(9*Math.random());
	let y =  1+ Math.round(9*Math.random());
	correctAnswer = x*y;
	document.getElementById("question").innerHTML = x + "x" + y;
	
	let correctPosition = 1+ Math.round(3*Math.random());
	
	document.getElementById("box" +correctPosition).innerHTML = correctAnswer; // fill one box with the correc answers 
	
	//fill other boxes with wrong answers 
	let answers = [correctAnswer];
	
	
	for(i=1; i<5; i++){
	if(i !== correctPosition){
	let wrongAnswer;
		do{
			wrongAnswer = (1+ Math.round(9*Math.random())) * (1+ Math.round(9*Math.random()));
		}while(answers.indexOf(wrongAnswer)>-1)
		
		
		
		
	document.getElementById("box" + i).innerHTML = wrongAnswer;
		
	answers.push(wrongAnswer);	
			
		}
	}
}










