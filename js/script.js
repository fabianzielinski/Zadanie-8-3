'use strict';


var buttonCes;
var buttonFht;
var text;
var textInfo;
var tempCes;
var tempFht;
var actTempCes;
var actTempFht;
var element;

var outputMsg = document.getElementById('textMsg');
var outputTmp = document.getElementById('textTemp');

var buttonCes = document.getElementById('btnCes');
var buttonFht = document.getElementById('btnFht');



var printText = function( text,  element ) {
	
	element.innerHTML += text + '<br><br>'; 
};

var takeCelcius = function() {

	tempCes = window.prompt('What is the temperature in degrees Celsius?');	
	
	if (isNaN(tempCes)) {outputMsg.innerHTML = " It's not a temperature !!! "};

	return tempCes;
};


var takeFarenheit = function() {

	tempFht = window.prompt('What is the temperature in degrees Farenheit?');	
	
	if (isNaN(tempFht)) {outputMsg.innerHTML = " It's not a temperature !!! "};

	return tempFht;
};

var celcToFarenhFunction = function(tempCes){

	actTempFht = ((tempCes*1.8)+32);

	return printText(actTempFht, outputTmp);	
};


var celcToCelciusFunction = function(tempFht){
	
	actTempCes = ((tempFht-32)/1.8);

	return printText(actTempCes, outputTmp);	
};

var tempInfo = function(tempCes) {


	if ( tempCes >= 35) {textInfo = " It's to hot ............ !! ";}

	else if (tempCes > 15) {textInfo = '" It is very nice ..."';}
			 
	else if (tempCes <= 5) {textInfo = '" Without a hat and scarf you will not get around "';}
			
	else {textInfo = '" Dress up warmer "';}

	return printText(textInfo, outputMsg);

};



btnCes.addEventListener('click', function() {

	takeCelcius();
	celcToFarenhFunction(tempCes);
	tempInfo(tempCes);

	// printText(actTempFht, outputTmp);
	// printText(textInfo, outputMsg);

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

printText('Click the button! I acout degrees...', outputMsg);
