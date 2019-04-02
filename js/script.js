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



var printText = function(text,  element) {
	
	element.innerHTML = text + '<br><br>'; 
};

var printTempF = function(text, element) {

	element.innerHTML = ' Temperature is :  '+ '  ' + text + '  F.' +'<br><br>';

};

var printTempC = function(text, element) {

	element.innerHTML = ' Temperature is :  '+ '  ' + text + '  C.' +'<br><br>';

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

	return printTempF(actTempFht, outputTmp);	
};


var celcToCelciusFunction = function(tempFht){
	
	actTempCes = Math.round(((tempFht-32)/1.8));

	return printTempC(actTempCes, outputTmp), actTempCes;	
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

})

btnFht.addEventListener('click', function() {

	takeFarenheit();

	celcToCelciusFunction(tempFht);

	tempInfo(actTempCes);
})

printText('Click the button! I acout degrees...', outputMsg);
