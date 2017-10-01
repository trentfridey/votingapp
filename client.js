let vote1Count = 0;
let vote2Count = 0;

function updateCounts(){
	let vote1CountElement = document.querySelector("#vote1-count");
	let vote2CountElement = document.querySelector("#vote2-count");
	
	vote1CountElement.innerHTML = vote1Count;
	vote2CountElement.innerHTML = vote2Count;
}

function vote1Clicked() {
	vote1Count++;
	updateCounts();
}

function vote2Clicked() {
	vote2Count++;
	updateCounts();
}

updateCounts();
