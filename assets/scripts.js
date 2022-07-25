var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
	currentNumber = currentNumber + 1;
	defineLimit();
	currentNumberWrapper.innerHTML = currentNumber;
	changeColor();
}

function decrement(){
	currentNumber = currentNumber - 1;
	defineLimit();
	currentNumberWrapper.innerHTML = currentNumber;
	changeColor();
}

function defineLimit(){
	if (currentNumber === -11){
		currentNumber = -10;
	}
	else{
		if (currentNumber === 11){
			currentNumber = 10;
		}
	}
}

function changeColor(){
	if (currentNumber < 0){
		currentNumberWrapper.style.color = 'red';
	}
	else{
		currentNumberWrapper.style.color = 'black';
	}
}