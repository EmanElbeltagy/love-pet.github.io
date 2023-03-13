let modeA = "x";
let modeB = "x";
let modeC = "x";
let modeD = "x";
function resizeToggleA(test1,test2){
	if(modeA == "x"){
		test1.style.background = "yellow";
		test1.style.height = 25+"vw";
		test2.style.display = "block";
		modeA = "xToggle";
	}
	else if(modeA == "xToggle"){
		test1.style.background = null;
		test1.style.height = null;
		test2.style.display = "none";
		modeA = "x";
	}
}

function resizeToggleB(test1,test2){
	if(modeB == "x"){
		test1.style.background = "yellow";
		test1.style.height = 25+"vw";
		test2.style.display = "block";
		modeB = "xToggle";
	}
	else if(modeB == "xToggle"){
		test1.style.background = null;
		test1.style.height = null;
		test2.style.display = "none";
		modeB = "x";
	}
}

function resizeToggleC(test1,test2){
	if(modeC == "x"){
		test1.style.background = "yellow";
		test1.style.height = 25+"vw";
		test2.style.display = "block";
		modeC = "xToggle";
	}
	else if(modeC == "xToggle"){
		test1.style.background = null;
		test1.style.height = null;
		test2.style.display = "none";
		modeC = "x";
	}
}

function resizeToggleD(test1,test2){
	if(modeD == "x"){
		test1.style.background = "yellow";
		test1.style.height = 25+"vw";
		test2.style.display = "block";
		modeD = "xToggle";
	}
	else if(modeD == "xToggle"){
		test1.style.background = null;
		test1.style.height = null;
		test2.style.display = "none";
		modeD = "x";
	}
}

let catA = document.getElementById("cat1");
let catB = document.getElementById("cat2");
let catC = document.getElementById("cat3");
let dogA = document.getElementById("dog1");
let dogB = document.getElementById("dog2");
let dogC = document.getElementById("dog3");
let linkAll = document.getElementById('link1');
let linkCats = document.getElementById('link2');
let linkDogs = document.getElementById('link3');
function categoryCat(){

	dogA.style.display = "none";
	dogB.style.display = "none";
	dogC.style.display = "none";
	catA.style.display = "block";
	catB.style.display = "block";
	catC.style.display = "block";
	linkCats.setAttribute("class" , "active");
	linkAll.removeAttribute("class");
	linkDogs.removeAttribute("class");
}

function dogegoryDog(){

	dogA.style.display = "block";
	dogB.style.display = "block";
	dogC.style.display = "block";
	catA.style.display = "none";
	catB.style.display = "none";
	catC.style.display = "none";
	linkDogs.setAttribute("class" , "active");
	linkCats.removeAttribute("class");
	linkAll.removeAttribute("class");
}

function categoryAll(){

	dogA.style.display = "block";
	dogB.style.display = "block";
	dogC.style.display = "block";
	catA.style.display = "block";
	catB.style.display = "block";
	catC.style.display = "block";
	linkAll.setAttribute("class" , "active");
	linkCats.removeAttribute("class");
	linkDogs.removeAttribute("class");
}