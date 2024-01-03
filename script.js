//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

async function showMessageWithDelay(){
	const text=textInput.value;
	const delay=parseInt(delayInput.value, 10);
}

if(!text || isNaN(delay) || delay<=0){
	outputDiv.innerText='Invalid Input';
	return;
}

await new promise(resolve => setTimeOut(resolve, delay));

outputDiv.innerText=text;

submitButton.addEventListener('click', showMessageWithDelay);