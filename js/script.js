'use strict';


var outputMsg = document.getElementById('textMsg');
var outputTmp = document.getElementById('textTemp');

var buttonCes;
var buttonFht;


outputMsg.innerHTML = ' "Click the button! I acout degrees..." ' + '<br><br>' + outputMsg.innerHTML; 

buttonCes = document.getElementById('btnCes');
buttonFht = document.getElementById('btnFht');

btnCes.addEventListener('click', function() {

	var tempCes = window.prompt('What is the temperature in degrees Celsius?');	

	var tempFht = ((tempCes*1.8)+32);

		if (isNaN(tempCes)) {outputMsg.innerHTML = " It' not a temperature !!! " } 

		else { if (tempCes > 15) {outputMsg.innerHTML = '" It is very nice ..."';}
			 
			   else if (tempCes <= 5) {outputMsg.innerHTML = '" Without a hat and scarf you will not get around "';}
			
			   else {outputMsg.innerHTML = '" Dress up warmer "';}
	
   		outputTmp.innerHTML = '" Temperature is '+ tempFht +'  F "';
		} 
})

btnFht.addEventListener('click', function() {

	var tempFht = window.prompt('What is the temperature in degrees Farenheit?');	

	var	tempCes = ((tempFht-32)/1.8)

		if (isNaN(tempCes)) {outputMsg.innerHTML = " It' not a temperature !!! " } 

		else { if (tempCes > 15) {outputMsg.innerHTML = '" It is very nice ..."';}
			 
			   else if (tempCes <= 5) {outputMsg.innerHTML = '" Without a hat and scarf you will not get around "';}
			
			   else {outputMsg.innerHTML = '" Dress up warmer "';}
			  	
			outputTmp.innerHTML = '" Temperature is '+ Math.round(tempCes) +'  C "';
		} 
})